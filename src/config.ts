import { getStore } from '@oceancode/framework';
import { routes } from '@/router'

export function loadConfig() {
  const options = {
    plugins: {
      pinia: getStore(),
    },
    router: {
      routes: routes,
      mode: 'hash',
      base: import.meta.env.VITE_APP_ROUTER,
    }
  }
  return options;
}