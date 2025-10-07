/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export interface MenuInfo {
  /**
   * 名称
   */
  name:string

  /**
   * parentId
   */
  parentId?:string

  /**
   * 自增主键
   */
  id:string

  /**
   * 描述
   */
  description?:string

  /**
   * 类型
   */
  type:MenuType

  /**
   * 是否显示
   */
  visible?:boolean

  /**
   * 组件
   */
  componentId?:string

  /**
   * 图标
   */
  icon?:string

  /**
   * 排序
   */
  orderNum:number

  /**
   * 创建时间
   */
  createdAt:string

  /**
   * 更新时间
   */
  updatedAt:string

  /**
   * traits
   */
  traits?:Array<any>

}