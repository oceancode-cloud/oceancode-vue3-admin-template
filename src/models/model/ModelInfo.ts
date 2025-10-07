/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export interface ModelInfo {
  /**
   * parentId
   */
  parentId?:string

  /**
   * fields
   */
  fields?:Array<ModelFieldInfo>

  /**
   * groupId
   */
  groupId:string

  /**
   * traits
   */
  traits?:Array<any>

  /**
   * 自增主键
   */
  id:string

  /**
   * 名称
   */
  name:string

  /**
   * primaryField
   */
  primaryField?:ModelFieldInfo

  /**
   * 描述
   */
  description?:string

  /**
   * enumType
   */
  enumType?:ModelEnumType

  /**
   * type
   */
  type:ModelType

  /**
   * modelId
   */
  modelId:string

  /**
   * datasourceId
   */
  datasourceId?:string

  /**
   * parentIds
   */
  parentIds?:Array<any>

  /**
   * referenceIds
   */
  referenceIds?:Array<any>

}