import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

// pinia 持久化
const pinia = createPinia()
pinia.use(persist)

export default pinia
