/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export namespace PageGroupType {
  export enum PageGroupType {
    /**
     * 布局组件
     */
    LAYOUT_COMPONENT = 1,

    /**
     * 公共组件
     */
    COMMON_COMPONENT = 2,

    /**
     * 页面
     */
    PAGE = 3,

    /**
     * 组件
     */
    COMPONENT = 4,

  }

  export function options(){
    return [
      { label: '布局组件', value: PageGroupType.LAYOUT_COMPONENT },
      { label: '公共组件', value: PageGroupType.COMMON_COMPONENT },
      { label: '页面', value: PageGroupType.PAGE },
      { label: '组件', value: PageGroupType.COMPONENT },
    ]
  }

  export function from(val: PageGroupType) {
    return options().find(e => e.value === val)
  }
}