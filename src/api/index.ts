import { ResultData, useRequest,apiResponseWrapper,DataHandle } from '@oceancode/ocean-ui'
import { request_, API_PREFIX_ } from '@/api/config'

export function userLogin(param: any): Promise<ResultData<any>> {
  return apiResponseWrapper(request_.post(API_PREFIX_ + '/user/login', param));
}

export function userLogout(): Promise<ResultData<void>> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/user/logout', ));
}

