/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { FunctonMethodType } from '@/models/function/FunctonMethodType';
import { FunctionMethodReturnType } from '@/models/function/FunctionMethodReturnType';
import { FunctionMethodImplType } from '@/models/function/FunctionMethodImplType';
import { FunctionCallType } from '@/models/function/FunctionCallType';

export interface FunctionMethodInfo {
  /**
   * 类型
   */
  type: FunctonMethodType.FunctonMethodType

  /**
   * 名称
   */
  name: string

  /**
   * implType
   */
  implType: FunctionMethodImplType.FunctionMethodImplType

  /**
   * 描述
   */
  description?: string

  /**
   * aggConfigs
   */
  aggConfigs?: Array<FunctionMethodResAggOption>

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
   * traits
   */
  traits?: Array<any>

  /**
   * permissions
   */
  permissions?: Array<any>

  /**
   * resultCount
   */
  resultCount?: FunctionMethodReturnType.FunctionMethodReturnType

  /**
   * path
   */
  path: string

  /**
   * returnModelId
   */
  returnModelId?: string

  /**
   * 配置
   */
  config?: string

  /**
   * inputRequired
   */
  inputRequired?: boolean

  /**
   * packageId
   */
  packageId: string

  /**
   * 自增主键
   */
  id: string

  /**
   * method
   */
  method?: string

}