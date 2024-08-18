import { IResultData, useRequest } from '@oceancode/ocean-wui';
const request = useRequest()
const API_PREFIX = import.meta.env.VITE_GLOB_API_URL || ''
/**
 * ping
 * @returns ping
 */
export function ping(): Promise<IResultData<string>> {
  return request.get().get(API_PREFIX + '/ping', {});
}