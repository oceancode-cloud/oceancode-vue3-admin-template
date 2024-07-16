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
    id:2,
    parentId:3,
    path: '/',
    name:'home',
    component: () => import('@/views/home.vue')
  },
  {
    id:3,
    path: '/dashboard',
    component: () => import('@/packages/layout/common/CommonLayout.vue')
  },
  {
    id:4,
    path: '/login',
    name:'login',
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
]

export const routes = deepTree(routeList)