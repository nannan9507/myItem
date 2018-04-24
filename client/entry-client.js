import { createApp } from './app'
// eslint-disable-next-line
module.hot && module.hot.accept()

// client entry
const { app, router } = createApp()
router.onReady(() => {
  app.$mount('#app')
})

// service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      // eslint-disable-next-line
      console.log('SW registered: ', registration)
    }).catch(registrationError => {
      // eslint-disable-next-line
      console.log('SW registration failed: ', registrationError)
    })
  })
}
