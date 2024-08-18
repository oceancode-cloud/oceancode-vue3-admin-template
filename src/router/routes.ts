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
    parentId: -2,
    path:'/home',
    component: () => import('@/views/home.vue')
  }
]

export const routes = deepTree(routeList)