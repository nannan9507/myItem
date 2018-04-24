
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

// route-level code splitting

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: routes,
  })
}
