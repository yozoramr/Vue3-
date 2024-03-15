import { defineStore } from 'pinia'
import { ref } from 'vue'

// 用户模块
export const useCounterStore = defineStore(
  'big-user',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }
    // 用户信息
    const user = ref({})
    const getUser = (info) => {
      user.value = info
    }
    const removeUser = () => {
      user.value = {}
      token.value = ''
    }
    return {
      token,
      setToken,
      removeToken,
      user,
      getUser,
      removeUser
    }
  },
  {
    persist: true
  }
)
