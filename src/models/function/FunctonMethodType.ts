/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export namespace FunctonMethodType {
  export enum FunctonMethodType {
    /**
     * 数据接口
     */
    API = "api",

    /**
     * 服务接口
     */
    REMOTE_API = "remote_api",

    /**
     * UI函数
     */
    UI = "ui",

    /**
     * Sql
     */
    SQL = "sql",

    /**
     * 测试函数
     */
    TEST = "test",

  }

  export function options(){
    return [
      { label: '数据接口', value: FunctonMethodType.API },
      { label: '服务接口', value: FunctonMethodType.REMOTE_API },
      { label: 'UI函数', value: FunctonMethodType.UI },
      { label: 'Sql', value: FunctonMethodType.SQL },
      { label: '测试函数', value: FunctonMethodType.TEST },
    ]
  }

  export function from(val: FunctonMethodType) {
    return options().find(e => e.value === val)
  }
}