/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export interface UpdateFunctionMethod {
  /**
   * 自增主键
   */
  id:string

  /**
   * returnModelId
   */
  returnModelId?:string

  /**
   * path
   */
  path?:string

  /**
   * inputRequired
   */
  inputRequired?:boolean

  /**
   * 名称
   */
  name:string

  /**
   * caseId
   */
  caseId?:string

  /**
   * packageId
   */
  packageId?:string

  /**
   * 描述
   */
  description?:string

  /**
   * aggConfigs
   */
  aggConfigs?:Array<FunctionMethodResAggOption>

  /**
   * permissions
   */
  permissions?:Array<any>

  /**
   * external
   */
  external?:boolean

  /**
   * callType
   */
  callType:FunctionCallType

  /**
   * inputModelId
   */
  inputModelId?:string

  /**
   * 类型
   */
  type:FunctonMethodType

  /**
   * 方法
   */
  method?:string

  /**
   * traits
   */
  traits?:Array<any>

  /**
   * resultCount
   */
  resultCount?:FunctionMethodReturnType

  /**
   * implType
   */
  implType:FunctionMethodImplType

}