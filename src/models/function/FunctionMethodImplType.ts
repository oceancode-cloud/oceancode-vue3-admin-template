/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export namespace FunctionMethodImplType {
  export enum FunctionMethodImplType {
    /**
     * 编码实现
     */
    CODE = 0,

    /**
     * 流程编排
     */
    FLOW_DESIGN = 1,

  }

  export function options(){
    return [
      { label: '编码实现', value: FunctionMethodImplType.CODE },
      { label: '流程编排', value: FunctionMethodImplType.FLOW_DESIGN },
    ]
  }

  export function from(val: FunctionMethodImplType) {
    return options().find(e => e.value === val)
  }
}