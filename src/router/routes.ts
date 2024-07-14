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
    path: '/',
    name:'home',
    component: () => import('@/views/home.vue')
  },
]

export const routes = deepTree(routeList)