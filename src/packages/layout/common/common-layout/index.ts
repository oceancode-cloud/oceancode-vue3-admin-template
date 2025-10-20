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
      label: "开发管理",
      key: "19",
      visible: true,
      children: [
        {
          id: 34,
          label: "应用管理",
          key: "34",
          parentId: 19,
          visible: true,
          children: [
            {
              id: 20,
              label: "应用列表",
              key: "appList",
              parentId: 34,
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
              parentId: 34,
              visible: true,
              router: {
                meta: {
                  title: "菜单列表",
                },
                name: "menuList",
              },
              show: () => checkRouterParams(route, ['projectId']),
            },
            {
              id: 35,
              label: "账号列表",
              key: "accountList",
              parentId: 34,
              visible: true,
              router: {
                meta: {
                  title: "账号列表",
                },
                name: "accountList",
              },
              show: () => checkRouterParams(route, ['projectId']),
            },
          ],
          show: () => checkRouterParams(route, ['projectId']),
        },
        {
          id: 46,
          label: "数据开发",
          key: "46",
          parentId: 19,
          visible: true,
          children: [
            {
              id: 47,
              label: "数据源列表",
              key: "datasourceList",
              parentId: 46,
              visible: true,
              router: {
                meta: {
                  title: "数据源列表",
                },
                name: "datasourceList",
              },
              show: () => checkRouterParams(route, ['projectId']),
            },
            {
              id: 49,
              label: "模型列表",
              key: "modelList",
              parentId: 46,
              visible: true,
              router: {
                meta: {
                  title: "模型列表",
                },
                name: "modelList",
              },
              show: () => checkRouterParams(route, ['projectId']),
            },
          ],
          show: () => checkRouterParams(route, ['projectId']),
        },
      ],
      show: () => checkRouterParams(route, ['projectId']),
    },
  ]
}