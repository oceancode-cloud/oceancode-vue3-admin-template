/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export namespace PageType {
  export enum PageType {
    /**
     * 页面
     */
    PAGE = "page",

    /**
     * 组件
     */
    COMPONENT = "component",

  }

  export function options(){
    return [
      { label: '页面', value: PageType.PAGE },
      { label: '组件', value: PageType.COMPONENT },
    ]
  }

  export function from(val: PageType) {
    return options().find(e => e.value === val)
  }
}