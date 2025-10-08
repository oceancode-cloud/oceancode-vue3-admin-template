/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { ModelEnumType } from '@/models/model/ModelEnumType';
import { ModelType } from '@/models/model/ModelType';

export interface AddModel {
  /**
   * 名称
   */
  name: string

  /**
   * type
   */
  type: ModelType.ModelType

  /**
   * modelId
   */
  modelId: string

  /**
   * mappingId
   */
  mappingId?: string

  /**
   * parentId
   */
  parentId?: string

  /**
   * 描述
   */
  description?: string

  /**
   * groupId
   */
  groupId: string

  /**
   * datasourceId
   */
  datasourceId?: string

  /**
   * traits
   */
  traits?: Array<any>

  /**
   * enumType
   */
  enumType?: ModelEnumType.ModelEnumType

}