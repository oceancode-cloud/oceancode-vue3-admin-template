/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { PageGroupType } from '@/models/page/PageGroupType';

export interface AddPageGroup {
  /**
   * 名称
   */
  name: string

  /**
   * type
   */
  type?: PageGroupType.PageGroupType

  /**
   * code
   */
  code: string

  /**
   * parentId
   */
  parentId?: string

}