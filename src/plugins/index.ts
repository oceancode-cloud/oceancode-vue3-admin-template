import type { App } from 'vue'
import { registerPlugins } from '@oceancode/ocean-wui'
import { routerPlugin } from './router'
import { permissionPlg } from './permission'
import { axoisRequest } from './axios'
import { setupI18n,i18nPlugin } from './i18n'
import { messagePlugin } from './message'

export function setupPlugins(app:App){
  const i18n = setupI18n(app)
  const i81nPlg = i18nPlugin(i18n,app)
  i81nPlg.setLang(i81nPlg.getDefaultLang())
  registerPlugins([
    routerPlugin(),
    permissionPlg(),
    axoisRequest(),
    messagePlugin(),
    i81nPlg
  ])
  app.config.globalProperties.$t = i81nPlg.t
}