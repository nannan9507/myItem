import Vue from 'vue'

// axios配置
import {
  createAxios,
  addRequestInterceptor,
  addResponseInterceptor,
} from 'summerd-sdk/client/http'

// element-ui配置
import './elementui'

// http请求拦截器
addRequestInterceptor(request => {
  return request
})

addResponseInterceptor(response => {
  return response
})

const axios = createAxios({})

Vue.prototype.http = axios
