/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { ModelFieldInfo } from '@/models/model/ModelFieldInfo';
import { ModelEnumType } from '@/models/model/ModelEnumType';
import { ModelType } from '@/models/model/ModelType';

export interface ModelInfo {
  /**
   * parentId
   */
  parentId?: string

  /**
   * fields
   */
  fields?: Array<ModelFieldInfo>

  /**
   * groupId
   */
  groupId: string

  /**
   * traits
   */
  traits?: Array<any>

  /**
   * 自增主键
   */
  id: string

  /**
   * 名称
   */
  name: string

  /**
   * primaryField
   */
  primaryField?: ModelFieldInfo

  /**
   * 描述
   */
  description?: string

  /**
   * enumType
   */
  enumType?: ModelEnumType.ModelEnumType

  /**
   * type
   */
  type: ModelType.ModelType

  /**
   * modelId
   */
  modelId: string

  /**
   * datasourceId
   */
  datasourceId?: string

  /**
   * parentIds
   */
  parentIds?: Array<any>

  /**
   * referenceIds
   */
  referenceIds?: Array<any>

}