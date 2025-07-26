import { useUser } from '@oceancode/ocean-wui';
import { WebSocketClient } from "./WebSocketClient";

export const WS_URL = import.meta.env.VITE_WS_URL || '/chart'
const webSocketClient = new WebSocketClient(
  ()=> {
    let url:string = WS_URL
    if(window){
      const protocol = window.location.protocol.toLocaleLowerCase()
      if(protocol.startsWith('https')){
        url = 'wss';
      }else {
        url = 'ws'
      }
      url+='://'+window.location.host+WS_URL
    }

    // 非生产环境可配置完整地址
    if(__DEV__){
      url = WS_URL
    }

    const user = useUser()
    url+='/'+user.getUserId()
    return url;
  }
)


export function useWebSocket() {
  return webSocketClient
}