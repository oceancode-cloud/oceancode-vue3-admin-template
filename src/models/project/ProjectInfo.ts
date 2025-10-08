/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export interface ProjectInfo {
  /**
   * 更新时间
   */
  updatedAt: string

  /**
   * 自增主键
   */
  id: string

  /**
   * 名称
   */
  name: string

  /**
   * 描述
   */
  description?: string

  /**
   * 创建人
   */
  username: string

  /**
   * 创建时间
   */
  createdAt: string

}