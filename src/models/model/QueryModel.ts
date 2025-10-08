/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { ModelType } from '@/models/model/ModelType';

export interface QueryModel {
  /**
   * groupId
   */
  groupId?: string

  /**
   * type
   */
  type?: ModelType.ModelType

  /**
   * types
   */
  types?: Array<any>

}