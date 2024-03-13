import instance from '@/utils/request'
import dataRequest from '@/utils/dataRequest'
import axios from 'axios'


// 获取首页数据
export const usechartStatus = () => {
  return dataRequest.get('/api/indexStatusApi/usechartStatus')
}