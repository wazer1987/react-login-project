import axios from 'axios'
const service = axios.create({
    baseURL:'http://localhost:4000',
    timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    
    
    return Promise.reject(error)
  }
)

export default service
