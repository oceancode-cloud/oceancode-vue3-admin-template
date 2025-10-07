import { createApp } from 'vue'
import App from './App.vue'
import { bootstrap } from './bootstrap'
import router from './router'
import store from './store';

const app = createApp(App)
bootstrap(app)
.then(()=>{
  app.use(router);
  app.use(store);
  app.mount('#app')
})

