/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { userLogout } from '@common-api/api/user/UserFunction';

export function loadContextMenu(param: any) {
  return [
    {
      label:'退出登录',
      key: '1757864471887_0',
       onClick(param: any) {
        return userLogout();
      }
    },
  ]
}