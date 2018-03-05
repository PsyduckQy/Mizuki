/**
 * Created by Administrator on 2018/2/24.
 */
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.timeout = 100000

// 请求拦截器 (在发送请求之前)
axios.interceptors.request.use((res) => {
  return res
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export default axios
