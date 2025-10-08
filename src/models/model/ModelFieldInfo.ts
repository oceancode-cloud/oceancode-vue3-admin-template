/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { ModelEnumType } from '@/models/model/ModelEnumType';
import { FieldRelateModel } from '@/models/model/FieldRelateModel';
import { ModelFieldType } from '@/models/model/ModelFieldType';

export interface ModelFieldInfo {
  /**
   * field
   */
  field: string

  /**
   * column
   */
  column?: string

  /**
   * example
   */
  example?: string

  /**
   * format
   */
  format?: string

  /**
   * primaryKey
   */
  primaryKey: boolean

  /**
   * required
   */
  required: boolean

  /**
   * elementType
   */
  elementType?: string

  /**
   * elementTypeId
   */
  elementTypeId?: string

  /**
   * refId
   */
  refId?: string

  /**
   * enumType
   */
  enumType?: ModelEnumType.ModelEnumType

  /**
   * constVal
   */
  constVal?: string

  /**
   * refModelId
   */
  refModelId?: string

  /**
   * 自增主键
   */
  id: string

  /**
   * 名称
   */
  name: string

  /**
   * 描述
   */
  description?: string

  /**
   * type
   */
  type: ModelFieldType.ModelFieldType

  /**
   * length
   */
  length?: number

  /**
   * precision
   */
  precision?: number

  /**
   * defaultValue
   */
  defaultValue?: string

  /**
   * min
   */
  min?: string

  /**
   * max
   */
  max?: string

  /**
   * relatedField
   */
  relatedField?: FieldRelateModel

  /**
   * enumValues
   */
  enumValues?: Array<ModelFieldEnumOption>

  /**
   * orderNum
   */
  orderNum?: number

  /**
   * traits
   */
  traits?: Array<any>

  /**
   * ellipsis
   */
  ellipsis?: boolean

}