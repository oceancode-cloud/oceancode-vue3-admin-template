/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { PageGroupType } from '@/models/page/PageGroupType';

export interface PageGroupInfo {
  /**
   * 自增主键
   */
  id: string

  /**
   * 名称
   */
  name: string

  /**
   * code
   */
  code: string

  /**
   * type
   */
  type: PageGroupType.PageGroupType

  /**
   * parentId
   */
  parentId: string

}