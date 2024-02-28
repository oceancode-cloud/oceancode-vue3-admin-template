import { getStore } from '@oceancode/core';
const pinia = getStore()

const routes = [
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
export function loadConfig() {
  const options = {
    plugins: {
      pinia: pinia,
    },
    env: import.meta.env,
    // modules: config.getAppModules(),

    // request: {
    //   getProjectId: () => {
    //     return null
    //   }
    // },
    router: {
      routes: routes,
      mode: 'hash',
    }
  }
  return options;
}