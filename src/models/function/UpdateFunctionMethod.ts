/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { FunctonMethodType } from '@/models/function/FunctonMethodType';
import { FunctionMethodReturnType } from '@/models/function/FunctionMethodReturnType';
import { FunctionMethodImplType } from '@/models/function/FunctionMethodImplType';
import { FunctionCallType } from '@/models/function/FunctionCallType';

export interface UpdateFunctionMethod {
  /**
   * 自增主键
   */
  id: string

  /**
   * returnModelId
   */
  returnModelId?: string

  /**
   * path
   */
  path?: string

  /**
   * inputRequired
   */
  inputRequired?: boolean

  /**
   * 名称
   */
  name: string

  /**
   * caseId
   */
  caseId?: string

  /**
   * packageId
   */
  packageId?: string

  /**
   * 描述
   */
  description?: string

  /**
   * aggConfigs
   */
  aggConfigs?: Array<FunctionMethodResAggOption>

  /**
   * permissions
   */
  permissions?: Array<any>

  /**
   * external
   */
  external?: boolean

  /**
   * callType
   */
  callType: FunctionCallType.FunctionCallType

  /**
   * inputModelId
   */
  inputModelId?: string

  /**
   * 类型
   */
  type: FunctonMethodType.FunctonMethodType

  /**
   * 方法
   */
  method?: string

  /**
   * traits
   */
  traits?: Array<any>

  /**
   * resultCount
   */
  resultCount?: FunctionMethodReturnType.FunctionMethodReturnType

  /**
   * implType
   */
  implType: FunctionMethodImplType.FunctionMethodImplType

}