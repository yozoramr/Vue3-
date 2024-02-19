import instance from '@/utils/request'
import axios from 'axios'

// 注册验证
export const userRegisterService = (obj) => {
  axios.post('http://127.0.0.1:2010/api/login/register', obj)
}

// 登录验证
export const userLoginService = (obj) => {
  return instance.post('/api/login/login', obj)
}

// 获取账户信息
export const userGetinfoService = (token) => {
  return instance.post('/api/getinfo', token)
}

// 获取列表信息
export const containGetFormServerce = () => {
  return instance.get('/api/contain/getform')
}

// 修改列表信息
export const containReFormServerce = (fromStata) => {
  return instance.post('/api/contain/getform', fromStata)
}
