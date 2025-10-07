/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export namespace PageImplType {
  export enum PageImplType {
    /**
     * 设计实现
     */
    DESIGN = 0,

    /**
     * 编码实现
     */
    CODE = 1,

    /**
     * 自定义
     */
    CUSTOM = 2,

  }

  export function options(){
    return [
      { label: '设计实现', value: PageImplType.DESIGN },
      { label: '编码实现', value: PageImplType.CODE },
      { label: '自定义', value: PageImplType.CUSTOM },
    ]
  }

  export function from(val: PageImplType) {
    return options().find(e => e.value === val)
  }
}