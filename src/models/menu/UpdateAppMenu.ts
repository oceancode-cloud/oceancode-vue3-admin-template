/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export interface UpdateAppMenu {
  /**
   * 名称
   */
  name: string

  /**
   * 排序
   */
  orderNum: number

  /**
   * 描述
   */
  description?: string

  /**
   * traits
   */
  traits?: Array<any>

  /**
   * 自增主键
   */
  id: string

  /**
   * 图标
   */
  icon?: string

  /**
   * 组件
   */
  componentId?: string

}