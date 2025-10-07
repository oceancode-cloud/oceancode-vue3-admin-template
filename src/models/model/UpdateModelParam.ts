/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export interface UpdateModelParam {
  /**
   * 自增主键
   */
  id:string

  /**
   * 名称
   */
  name:string

  /**
   * modelId
   */
  modelId:string

  /**
   * parentId
   */
  parentId?:string

  /**
   * 描述
   */
  description?:string

  /**
   * traits
   */
  traits?:Array<any>

}