/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { UserSessionInfo } from '@/models/user/UserSessionInfo';

export interface UserLoginResponse {
  /**
   * token
   */
  token: string

  /**
   * userInfo
   */
  userInfo: UserSessionInfo

}