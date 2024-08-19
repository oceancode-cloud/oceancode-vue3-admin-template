import { deepTree } from '@oceancode/ocean-wui'

const routeList = [
  {
    id: -1,
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
    id: 378,
    path: '/user/login',
    name: 'userLogin',
    parentId: -2,
    meta:{
      permissions: ['login', ],
    },
    component: () => import('@/views/user/UserLogin.vue')
  },
]

export const routes = deepTree(routeList)