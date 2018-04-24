import Vue from 'vue'
import {
  createAxios,
  addRequestInterceptor,
  addResponseInterceptor,
} from 'summerd-sdk/client/http'

// http请求拦截器
addRequestInterceptor(request => {
  return request
})

addResponseInterceptor(response => {
  return response
})

const axios = createAxios({})

Vue.prototype.http = axios
