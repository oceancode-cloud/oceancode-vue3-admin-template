// import { getStore } from '@oceancode/framework';
const pinia = null; // getStore()

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
      base: import.meta.env.VITE_APP_ROUTER,
    }
  }
  return options;
}