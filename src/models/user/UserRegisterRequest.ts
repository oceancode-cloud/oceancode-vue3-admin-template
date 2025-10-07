/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export interface UserRegisterRequest {
  /**
   * 电子邮箱
   */
  email:string

  /**
   * 注册码
   */
  code:string

  /**
   * password
   */
  password?:string

}