import Vue from 'vue'
import {
  createAxios,
  addRequestInterceptor,
  addResponseInterceptor
} from 'summerd-sdk/client/http'

addRequestInterceptor(request => {
  return request
})

addResponseInterceptor(response => {
  return response
})

const axios = createAxios({})

axios.get('/api/aaa/bbb')

Vue.prototype.http = axios