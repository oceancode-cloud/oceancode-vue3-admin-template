/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { PageImplType } from '@/models/page/PageImplType';

export interface UpdatePage {
  /**
   * 自增主键
   */
  id: string

  /**
   * title
   */
  title: string

  /**
   * pageId
   */
  pageId: string

  /**
   * implType
   */
  implType: PageImplType.PageImplType

  /**
   * 配置
   */
  config?: string

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

}