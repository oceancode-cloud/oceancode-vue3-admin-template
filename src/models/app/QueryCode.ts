/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { AppCodeCategory } from '@/models/app/AppCodeCategory';

export interface QueryCode {
  /**
   * 更新时间
   */
  updatedAt?: string

  /**
   * category
   */
  category: AppCodeCategory.AppCodeCategory

  /**
   * 应用ID
   */
  appId: string

  /**
   * sourceId
   */
  sourceId: string

}