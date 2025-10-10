/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { commonRoutes } from './common';
import { deepTree } from '@oceancode/ocean-wui';

const routeList = [
  {
    id: 24,
    path: '/user/user/login',
    name: 'login',
    parentId: -2,
    component: () => import('@/views/user/UserLogin.vue'),
    meta:{
      title: '用户登录',
      permissions: ['unlogin']
    },
  },
  {
    id: 152,
    path: '/workspace/workspace/list',
    name: 'home',
    parentId: 1364,
    component: () => import('@/views/workspace/WorkspaceList.vue'),
    meta:{
      title: '工作区',
    },
  },
  {
    id: 177,
    path: '/user/user/register',
    name: 'userRegister',
    parentId: -2,
    component: () => import('@/views/user/UserRegister.vue'),
    meta:{
      title: '用户注册',
      permissions: ['unlogin']
    },
  },
  {
    id: 403,
    path: '/user/reset/password',
    name: 'resetPassword',
    parentId: -2,
    component: () => import('@/views/user/ResetPassword.vue'),
    meta:{
      title: '重置密码',
    },
  },
  {
    id: 622,
    path: '/:projectId/:projectId/:projectId/app/app/list',
    name: 'appList',
    parentId: -2,
    component: () => import('@/views/app/AppList.vue'),
    meta:{
      title: '应用列表',
    },
  },
  {
    id: 742,
    path: '/:projectId/app/account/list',
    name: 'accountList',
    parentId: -2,
    component: () => import('@/views/app/AccountList.vue'),
    meta:{
      title: '账号列表',
    },
  },
  {
    id: 774,
    path: '/:projectId/dataset/datasource/list',
    name: 'datasourceList',
    parentId: -2,
    component: () => import('@/views/dataset/DatasourceList.vue'),
    meta:{
      title: '数据源列表',
    },
  },
  {
    id: 842,
    path: '/:projectId/dataset/model/list',
    name: 'modelList',
    parentId: -2,
    component: () => import('@/views/dataset/ModelList.vue'),
    meta:{
      title: '模型列表',
    },
  },
  {
    id: 1123,
    path: '/:projectId/dataset/function/list',
    name: 'functionList',
    parentId: -2,
    component: () => import('@/views/dataset/FunctionList.vue'),
    meta:{
      title: '函数开发',
    },
  },
  {
    id: 1229,
    path: '/dataset/function/method/manager',
    name: 'functionMethodManager',
    parentId: -2,
    component: () => import('@/views/dataset/FunctionMethodManager.vue'),
    meta:{
      title: '函数包管理',
    },
  },
  {
    id: 1260,
    path: '/app/menu/list',
    name: 'menuList',
    parentId: -2,
    component: () => import('@/views/app/MenuList.vue'),
    meta:{
      title: '菜单列表',
    },
  },
  {
    id: 1364,
    component: () => import('@/packages/layout/common/CommonLayout.vue'),
  },
  {
    id: 1444,
    component: () => import('@/packages/layout/common/TestLayout.vue'),
  },
  {
    id: 1448,
    path: '/dataset/model/manager',
    name: 'modelManager',
    parentId: -2,
    component: () => import('@/views/dataset/ModelManager.vue'),
    meta:{
      title: '模型管理',
    },
  },
  {
    id: 1489,
    component: () => import('@/packages/layout/common/ModelManagerLayout.vue'),
  },
  {
    id: 1567,
    path: '/dataset/model/mock/data',
    name: 'modelMockData',
    parentId: -2,
    component: () => import('@/views/dataset/ModelMockData.vue'),
    meta:{
      title: '模型Mock数据',
    },
  },
  {
    id: 1669,
    component: () => import('@/packages/layout/common/FunctionPackageLayout.vue'),
  },
]

export const routes = deepTree([...commonRoutes, ...routeList]);