/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { FieldRelateModel } from '@/models/model/FieldRelateModel';
import { ModelFieldType } from '@/models/model/ModelFieldType';

export interface UpsertModelField {
  /**
   * primaryKey
   */
  primaryKey?: boolean

  /**
   * 描述
   */
  description?: string

  /**
   * refId
   */
  refId?: string

  /**
   * 名称
   */
  name: string

  /**
   * required
   */
  required?: boolean

  /**
   * defaultValue
   */
  defaultValue?: string

  /**
   * type
   */
  type: ModelFieldType.ModelFieldType

  /**
   * elementType
   */
  elementType?: string

  /**
   * example
   */
  example?: string

  /**
   * traits
   */
  traits?: Array<any>

  /**
   * field
   */
  field: string

  /**
   * modelId
   */
  modelId: string

  /**
   * length
   */
  length?: number

  /**
   * constVal
   */
  constVal?: string

  /**
   * min
   */
  min?: string

  /**
   * relatedField
   */
  relatedField?: FieldRelateModel

  /**
   * max
   */
  max?: string

  /**
   * precision
   */
  precision?: number

  /**
   * 自增主键
   */
  id?: string

  /**
   * column
   */
  column?: string

  /**
   * orderNum
   */
  orderNum?: number

  /**
   * format
   */
  format?: string

}