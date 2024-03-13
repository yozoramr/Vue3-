import { useCounterStore } from '@/stores/modules/user'
import axios from 'axios'

const baseURL = 'http://127.0.0.1:2010'

const dataRequest = axios.create({
  baseURL,
  timeout: 100000
})




export default dataRequest
export { baseURL }
