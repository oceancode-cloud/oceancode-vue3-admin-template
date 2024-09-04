import { ResultData, useRequest, apiResponseWrapper, DataHandle, resolveQueryResult } from '@oceancode/ocean-wui'
export const request_ = useRequest()
export const API_PREFIX_ = import.meta.env.VITE_GLOB_API_URL || ''
const QUERY_API_PREFIX_ = API_PREFIX_ + (import.meta.env.VITE_GLOB_API_PATH || '/graphql/query')

export function queryWithDsl<T, R = T>(querys: object, cb?: DataHandle<T, R>): ResultData<R> {
  return apiResponseWrapper(request_.dsl(QUERY_API_PREFIX_, querys), (res: any) => resolveQueryResult(res, cb))
}