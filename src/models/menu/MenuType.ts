/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export namespace MenuType {
  export enum MenuType {
    /**
     * 目录
     */
    CATEGORY = 0,

    /**
     * 菜单
     */
    MENU = 1,

  }

  export function options(){
    return [
      { label: '目录', value: MenuType.CATEGORY },
      { label: '菜单', value: MenuType.MENU },
    ]
  }

  export function from(val: MenuType) {
    return options().find(e => e.value === val)
  }
}