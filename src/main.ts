import { createApp } from 'vue'
import App from './App.vue'

import { getStore, bootstrap } from '@oceancode/framework';
import '@oceancode/framework/dist/style.css';

import { loadConfig } from './config'
const app = createApp(App).use(getStore())
bootstrap(app, loadConfig())
  .then(() => {
    app.mount('#app')
  })
  .catch((err: any) => {
    throw err
  })
