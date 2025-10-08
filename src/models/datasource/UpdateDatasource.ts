/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export interface UpdateDatasource {
  /**
   * 自增主键
   */
  id: string

  /**
   * 名称
   */
  name: string

  /**
   * 关联账号
   */
  accountId?: string

  /**
   * 描述
   */
  description?: string

  /**
   * 唯一ID
   */
  datasourceId: string

}