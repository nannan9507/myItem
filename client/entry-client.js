module.hot && module.hot.accept()
import { createApp } from './app'

// client entry
const { app, router } = createApp()
router.onReady(() => {
  app.$mount('#app')
})

// service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration)
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError)
    })
  })
}