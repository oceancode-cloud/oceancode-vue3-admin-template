/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { FlowCategory } from '@/models/flow/FlowCategory';

export interface QueryFlowConfig {
  /**
   * category
   */
  category: FlowCategory.FlowCategory

  /**
   * sourceId
   */
  sourceId: string

}