/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { MenuType } from '@/models/menu/MenuType';

export interface AddMenu {
  /**
   * 名称
   */
  name: string

  /**
   * 分组ID
   */
  groupId?: string

  /**
   * 类型
   */
  type: MenuType.MenuType

  /**
   * 是否显示
   */
  visible?: boolean

  /**
   * 排序
   */
  orderNum: number

  /**
   * 关联组件
   */
  componentId?: string

  /**
   * 描述
   */
  description?: string

  /**
   * 父页面
   */
  parentId?: string

}