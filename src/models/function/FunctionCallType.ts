/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export namespace FunctionCallType {
  export enum FunctionCallType {
    /**
     * 新增
     */
    ADD = 1,

    /**
     * 删除
     */
    DELETE = 2,

    /**
     * 修改
     */
    UPDATE = 3,

    /**
     * 查询
     */
    QUERY = 4,

    /**
     * 用户登录
     */
    LOGIN = 5,

    /**
     * 下载
     */
    DOWNLOAD = 6,

  }

  export function options(){
    return [
      { label: '新增', value: FunctionCallType.ADD },
      { label: '删除', value: FunctionCallType.DELETE },
      { label: '修改', value: FunctionCallType.UPDATE },
      { label: '查询', value: FunctionCallType.QUERY },
      { label: '用户登录', value: FunctionCallType.LOGIN },
      { label: '下载', value: FunctionCallType.DOWNLOAD },
    ]
  }

  export function from(val: FunctionCallType) {
    return options().find(e => e.value === val)
  }
}