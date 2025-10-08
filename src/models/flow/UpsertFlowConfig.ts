/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { FlowCategory } from '@/models/flow/FlowCategory';

export interface UpsertFlowConfig {
  /**
   * sourceId
   */
  sourceId: string

  /**
   * category
   */
  category: FlowCategory.FlowCategory

  /**
   * config
   */
  config?: string

}