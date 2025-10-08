/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { AccountType } from '@/models/account/AccountType';

export interface AddAccount {
  /**
   * 配置
   */
  config?: Map<String, any>

  /**
   * 启用时间
   */
  expireStartTime?: string

  /**
   * 失效时间
   */
  expireEndTime?: string

  /**
   * 名称
   */
  name: string

  /**
   * 类型
   */
  type: AccountType.AccountType

  /**
   * 是否使用
   */
  used?: boolean

  /**
   * 描述
   */
  description?: string

}