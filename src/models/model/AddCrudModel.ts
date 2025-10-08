/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { ModelType } from 'ocean-admin-api/models/model/ModelType';

export interface AddCrudModel {
  /**
   * category
   */
  category: string

  /**
   * modelId
   */
  modelId: string

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
  type: ModelType.ModelType

  /**
   * fields
   */
  fields: Array<AddCrudModelField>

}