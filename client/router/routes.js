import Index from '../views/index.vue'

// 同步component: Index
// 异步component: () => import(../views/index.vue),

const routes = [
  {
    path: '/',
    component: Index,
  },
]

export default routes