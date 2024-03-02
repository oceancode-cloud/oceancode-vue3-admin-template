// router config
export const routes = [
  {
    path: '/',
    redirect: {
      name: 'dashboard',
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      needLogin: false
    },
    component: () => import('@/views/home.vue'),
  },
]
