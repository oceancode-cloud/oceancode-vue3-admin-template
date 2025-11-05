/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { checkRouterParams } from '@/utils';

export function loadOption1762266760947(route: any) {
  return [
    {
      id: 54,
      label: "基本配置",
      key: "appSetting",
      visible: true,
      router: {
        meta: {
          title: "基本配置",
        },
        name: "appSetting",
      },
      show: () => checkRouterParams(route, ['projectId', 'appId']),
    },
  ]
}