import Vue from 'vue'
import { createRouter } from './router'
import App from './App.vue'
import './config'

export function createApp() {
  const router = createRouter()

  const app = new Vue({
    router,
    render: h => h(App),
  })

  return { app, router }
}
