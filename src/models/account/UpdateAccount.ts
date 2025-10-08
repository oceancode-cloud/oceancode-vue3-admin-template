/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export interface UpdateAccount {
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
   * 配置
   */
  config?: Map<String, any>

  /**
   * 是否使用
   */
  used?: boolean

  /**
   * 启用时间
   */
  expireStartTime?: string

  /**
   * 失效时间
   */
  expireEndTime?: string

}