import { deepTree } from '@oceancode/ocean-wui'

const routeList = [
  {
    id: 1,
    path: '/',
    redirect: {
      name:'home'
    }
  },
  {
    id: -2,
    component: () => import('@/components/common/AppRouterContext.vue')
  },
  {
    id:2,
    path: '/home',
    parentId: -2,
    name:'home',
    component: () => import('@/views/home/Home.vue')
  },
  {
    id:3,
    path: '/dashboard',
    component: () => import('@/packages/layout/common/CommonLayout.vue')
  },
  {
    id: 333,
    component: () => import('@/packages/layout/common/CommonLayout.vue')
  },
  {
    id:4,
    path: '/login',
    name:'login',
    parentId:-2,
    meta:{
      permissions:['unlogin']
    },
    component: () => import('@/views/user/Userlogin.vue')
  },
  {
    id:5,
    parentId:3,
    path: '/user',
    name:'userList',
    component: () => import('@/views/user/UserList.vue')
  },
  {
    id:5,
    parentId:3,
    path: '/data/dict',
    name:'dataDict',
    component: () => import('@/views/data/DictManager.vue')
  },
  {
    id: 349,
    path: '/menu/list',
    name: 'menuList',
    parentId: 3,
    meta:{
      permissions: ['login', ],
    },
    component: () => import('@/views/system/MenuList.vue')
  },
  {
    id: 351,
    path: '/task/manager',
    name: 'taskManager',
    parentId: 333,
    meta:{
      permissions: ['login', ],
    },
    component: () => import('@/views/system/TaskManager.vue')
  },
  {
    id: 352,
    path: '/dashoard',
    name: 'dashoard',
    parentId: 333,
    meta:{
      permissions: ['login', ],
    },
    component: () => import('@/views/home/Dashoard.vue')
  },
  {
    id: 357,
    path: '/role/list',
    name: 'roleList',
    parentId: 333,
    meta:{
      permissions: ['login', ],
    },
    component: () => import('@/views/system/RoleList.vue')
  },
]

export const routes = deepTree(routeList)