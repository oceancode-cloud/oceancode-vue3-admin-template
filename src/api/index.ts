import { IResultData, useRequest } from '@oceancode/framework';
const request = useRequest()

/**
 * ping
 * @returns ping
 */
export function ping(): Promise<IResultData<string>> {
  return request.get().get('/api/ping', {});
}