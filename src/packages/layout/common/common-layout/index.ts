/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { checkRouterParams } from '@/utils';

export function loadMenuMethod(route: any) {
  return [
    {
      id: 22,
      label: "首页",
      key: "home",
      visible: true,
      router: {
        meta: {
          title: "首页",
        },
        name: "home",
      },
    },
    {
      id: 19,
      label: "应用管理",
      key: "19",
      visible: true,
      children: [
        {
          id: 20,
          label: "应用列表",
          key: "appList",
          parentId: 19,
          visible: true,
          router: {
            meta: {
              title: "应用列表",
            },
            name: "appList",
          },
          show: () => checkRouterParams(route, ['projectId']),
        },
        {
          id: 21,
          label: "菜单列表",
          key: "menuList",
          parentId: 19,
          visible: true,
          router: {
            meta: {
              title: "菜单列表",
            },
            name: "menuList",
          },
        },
      ],
      show: () => checkRouterParams(route, ['projectId']),
    },
  ]
}
export function loadMenuMethod(route: any) {
  return [
    {
      id: 22,
      label: "首页",
      key: "home",
      visible: true,
      router: {
        meta: {
          title: "首页",
        },
        name: "home",
      },
    },
    {
      id: 19,
      label: "应用管理",
      key: "19",
      visible: true,
      children: [
        {
          id: 20,
          label: "应用列表",
          key: "appList",
          parentId: 19,
          visible: true,
          router: {
            meta: {
              title: "应用列表",
            },
            name: "appList",
          },
          show: () => checkRouterParams(route, ['projectId']),
        },
        {
          id: 21,
          label: "菜单列表",
          key: "menuList",
          parentId: 19,
          visible: true,
          router: {
            meta: {
              title: "菜单列表",
            },
            name: "menuList",
          },
        },
      ],
      show: () => checkRouterParams(route, ['projectId']),
    },
  ]
}