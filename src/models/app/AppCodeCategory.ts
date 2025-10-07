/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export namespace AppCodeCategory {
  export enum AppCodeCategory {
    /**
     * 应用
     */
    APP = "app",

    /**
     * 页面
     */
    PAGE = "page",

    /**
     * 函数
     */
    FUNCTION = "function",

  }

  export function options(){
    return [
      { label: '应用', value: AppCodeCategory.APP },
      { label: '页面', value: AppCodeCategory.PAGE },
      { label: '函数', value: AppCodeCategory.FUNCTION },
    ]
  }

  export function from(val: AppCodeCategory) {
    return options().find(e => e.value === val)
  }
}