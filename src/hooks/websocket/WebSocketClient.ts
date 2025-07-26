import { uuid } from "@/utils";

export interface WebSocketClientOptions {
  reconnectDelay?: number
  heartbeatInterval?: number
}

export interface UrlGetFunction {
  (): string;
}

export interface ChartMessage {
  type?: ChartMessageType
  data: any
  fromUser?: number | string
  toUser?: number | string
  msgId?: string
  errorCode?: string
}

export interface MessageCallbackFunction {
  (data: any, res: ChartMessage): void
}

export enum ChartMessageType {
  MESSAGE = 1,
  NOTIFIER_MESSAGE = 2,
  CHART_MESSAGE = 3,
}

export class WebSocketClient {
  private url_: string | UrlGetFunction;
  private reconnectDelay: number = 2000;
  private heartbeatInterval: number = 10000;
  private heartbeatMsg: string = 'ping';
  private ws: WebSocket | null = null;
  private isConnected: boolean = false;
  private heartbeatTimer: number | null = null;
  private reconnectTimer: number | null = null;
  private callbackQueues: Map<string, MessageCallbackFunction[]> = new Map();

  constructor(url: string | UrlGetFunction, options: WebSocketClientOptions = {}) {
    this.url_ = url;
    this.reconnectDelay = options.reconnectDelay || 2000;
    this.heartbeatInterval = options.heartbeatInterval || 5000;
  }

  get url() {
    return typeof this.url_ === 'string' ? this.url_ : this.url_();
  }

  connect() {
    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      this.isConnected = true;
      this.startHeartbeat();
    };

    this.ws.onmessage = (event) => {
      const data = event.data;
      if (typeof data === 'string') {
        if (data === 'pong') {
          return;
        }
      }
      let value = data;
      let isJson = false;
      if (typeof value === 'string') {
        value = data.trim()
        if (value.startsWith('{')) {
          value = JSON.parse(value);
          isJson = true;
        }
      }
      this.processMessageData(value, isJson);
    };

    this.ws.onclose = () => {
      this.isConnected = false;
      console.log('Connection closed');
      this.stopHeartbeat();
      this.reconnect();
    };

    this.ws.onerror = (event) => {
      console.error('WebSocket error: ' + event);
      this.ws?.close();
    };
  }

  private processCallbacks(msgId: string, data: any, res: ChartMessage) {
    if (!msgId) {
      return
    }
    if (!this.callbackQueues.has(msgId)) {
      return;
    }
    this.callbackQueues.get(msgId)?.forEach(cb => {
      try {
        cb(data, res);
      } catch (err) {
        console.error(err);
      }
    })
    this.callbackQueues.delete(msgId)
  }

  private processMessageData(data: any, isJson: boolean): void {
    const errorCode = isJson ? data.errorCode : ''
    const msgId = isJson ? data.msgId : '';
    const value = isJson ? data.data : null;

    this.processCallbacks(msgId, errorCode ? null : value, data);
  }

  private registryCallback(msgId?: string | null, callback?: MessageCallbackFunction) {
    if (!msgId || !callback) {
      return;
    }
    if (!this.callbackQueues.has(msgId)) {
      this.callbackQueues.set(msgId, []);
    }
    this.callbackQueues.get(msgId)?.push(callback);
  }

  private sendText(message: string) {
    if (this.isConnected) {
      this.ws?.send(message);
    } else {
      console.error('WebSocket is not connected');
    }
  }

  private startHeartbeat() {
    this.stopHeartbeat();
    this.heartbeatTimer = setInterval(() => {
      if (this.isConnected) {
        this.sendText(this.heartbeatMsg);
      }
    }, this.heartbeatInterval);
  }

  private stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }

  private reconnect() {
    if (!this.isConnected) {
      console.log(`Reconnecting in ${this.reconnectDelay / 1000} seconds...`);
      this.reconnectTimer = setTimeout(() => {
        this.connect();
      }, this.reconnectDelay);
    }
  }

  private initMessageRequest(msg: string | ChartMessage): ChartMessage {
    let msgId: string = ''
    if (typeof msg != 'string') {
      msgId = msg.msgId as string
    }
    if (msgId) {
      msgId = uuid()
    }
    const request: ChartMessage = typeof msg === 'string' ?
      { type: ChartMessageType.CHART_MESSAGE, data: msg } : msg;

    if (!request.msgId) {
      request.msgId = msgId;
    }
    return request;
  }

  public sendTo(userId: string | number, msg: string | ChartMessage, callback?: MessageCallbackFunction) {
    const request = this.initMessageRequest(msg);
    request.toUser = userId;
    request.type = ChartMessageType.CHART_MESSAGE;
    this.sendText(JSON.stringify(request));
    this.registryCallback(request.msgId, callback);
  }

  public sendMessage(msg: string | ChartMessage, callback?: MessageCallbackFunction) {
    const request = this.initMessageRequest(msg);
    request.type = ChartMessageType.MESSAGE;
    this.sendText(JSON.stringify(request));
    this.registryCallback(request.msgId, callback);
  }

  close() {
    this.ws?.close();
  }
}