import { createApp } from 'vue'
import { trackUserState } from './services/firebase/auth.js'
import App from './App.vue'
import router from './router'

import "./assets/global.css"


let app

trackUserState(() => {
  if (!app) {
    app = createApp(App).use(router).mount('#app')
  }
})

