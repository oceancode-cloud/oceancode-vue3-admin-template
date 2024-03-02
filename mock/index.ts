import { MockMethod } from 'vite-plugin-mock'
import { RequestHttpEnum } from '@/models/common'
import test from './test.mock'

const mockObject: MockMethod[] = [
  {
    // 正则
    // url: /\/mock\/mockData(|\?\S*)$/,
    url: '/ping',
    method: RequestHttpEnum.GET,
    response: () => test.fetchPingData
  }
]

export default mockObject