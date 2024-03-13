import { useCounterStore } from '@/stores/modules/user'
import axios from 'axios'

const baseURL = 'http://127.0.0.1:2010'

const instance = axios.create({
  baseURL,
  timeout: 100000
})


instance.interceptors.request.use(
  (config) => {
    const userStore = useCounterStore()
    if(userStore.token) {
      config.headers.Authorization = `Bearer ${userStore.token}`
    }else{
      config.headers.Authorization = ''
      return config
    }
    return config
  },
  (err) => Promise.reject(err)
)

// 验证token
instance.interceptors.response.use(
  (res) => {
    if(res.data.token){
      console.log('成功')
      return res
    }
    return res
  },
  (err) => {
    console.log(err)
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
