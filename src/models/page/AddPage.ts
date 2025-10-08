/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { PageImplType } from '@/models/page/PageImplType';
import { PageType } from '@/models/page/PageType';

export interface AddPage {
  /**
   * pageId
   */
  pageId: string

  /**
   * title
   */
  title: string

  /**
   * type
   */
  type?: PageType.PageType

  /**
   * implType
   */
  implType: PageImplType.PageImplType

  /**
   * permissions
   */
  permissions?: Array<any>

  /**
   * traits
   */
  traits?: Array<any>

  /**
   * 描述
   */
  description?: string

  /**
   * parentId
   */
  parentId?: string

  /**
   * groupId
   */
  groupId?: string

  /**
   * templateId
   */
  templateId?: string

}