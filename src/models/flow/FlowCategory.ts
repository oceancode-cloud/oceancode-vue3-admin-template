/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export namespace FlowCategory {
  export enum FlowCategory {
    /**
     * 应用
     */
    APP = "app",

    /**
     * FUNCTION
     */
    FUNCTION = "function",

  }

  export function options(){
    return [
      { label: '应用', value: FlowCategory.APP },
      { label: 'FUNCTION', value: FlowCategory.FUNCTION },
    ]
  }

  export function from(val: FlowCategory) {
    return options().find(e => e.value === val)
  }
}