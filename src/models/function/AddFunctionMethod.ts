/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export interface AddFunctionMethod {
  /**
   * aggConfigs
   */
  aggConfigs?:Array<FunctionMethodResAggOption>

  /**
   * inputModelId
   */
  inputModelId?:string

  /**
   * 方法
   */
  method?:string

  /**
   * 名称
   */
  name:string

  /**
   * packageId
   */
  packageId:string

  /**
   * path
   */
  path?:string

  /**
   * callType
   */
  callType:FunctionCallType

  /**
   * resultCount
   */
  resultCount?:FunctionMethodReturnType

  /**
   * returnModelId
   */
  returnModelId?:string

  /**
   * inputRequired
   */
  inputRequired?:boolean

  /**
   * caseId
   */
  caseId?:string

  /**
   * traits
   */
  traits?:Array<any>

  /**
   * 描述
   */
  description?:string

  /**
   * 类型
   */
  type:FunctonMethodType

  /**
   * external
   */
  external?:boolean

  /**
   * permissions
   */
  permissions?:Array<any>

  /**
   * implType
   */
  implType:FunctionMethodImplType

}