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
    id: -3,
    path:'/no_permission',
    name:'NoPermission',
    component: () => import('@/views/NoPermission.vue')
  },
  {
    id: -4,
    path:'/home',
    name:'home',
    component: () => import('@/views/home.vue'),
  }
]

export const routes = deepTree(routeList)