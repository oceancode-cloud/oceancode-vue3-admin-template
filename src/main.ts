import { createApp } from 'vue'
import App from './App.vue'

import { getStore } from '@oceancode/core';
import { setupFramework } from "@oceancode/framework";
import "@oceancode/framework-core/dist/style.css";
import "@oceancode/core/dist/style.css";
import "@oceancode/framework/dist/style.css";

import { loadConfig } from './config'
const app = createApp(App).use(getStore())
setupFramework(app, loadConfig())
  .then(() => {
    app.mount('#app')
  })
  .catch((err: any) => {
    throw err
  })
