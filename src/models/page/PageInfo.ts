/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export interface PageInfo {
  /**
   * title
   */
  title:string

  /**
   * pageId
   */
  pageId:string

  /**
   * type
   */
  type:PageType

  /**
   * implType
   */
  implType:PageImplType

  /**
   * 更新时间
   */
  updatedAt:string

  /**
   * 描述
   */
  description?:string

  /**
   * parentId
   */
  parentId:string

  /**
   * config
   */
  config?:string

  /**
   * groupId
   */
  groupId:string

  /**
   * 变量
   */
  variables?:Array<PageVariable>

  /**
   * traits
   */
  traits?:Array<any>

  /**
   * 自增主键
   */
  id:string

}