// router config
export const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      needLogin: false
    },
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/:path(.*)*',
    redirect: {
      name: 'dashboard',
    },
  }
]
