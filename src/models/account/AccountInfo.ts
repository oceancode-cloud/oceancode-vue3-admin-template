/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { AccountType } from '@/models/account/AccountType';

export interface AccountInfo {
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
   * 是否使用
   */
  used: boolean

  /**
   * 类型
   */
  type: AccountType.AccountType

  /**
   * 启用时间
   */
  expireStartTime?: string

  /**
   * 失效时间
   */
  expireEndTime?: string

  /**
   * 配置
   */
  config?: Map<String, any>

}