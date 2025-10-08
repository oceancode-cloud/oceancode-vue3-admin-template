/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { log } from '@/api/method';
import { ResultData, apiResponseWrapper, deepTree, useRouter } from '@oceancode/ocean-wui';
import { QueryLog } from 'ocean-admin-api/models/flow/QueryLog';
import { queryWithDsl as queryWithDsl_, request_, API_PREFIX_ } from '@/api/config';
import { LogDetailInfo } from 'ocean-admin-api/models/flow/LogDetailInfo';

export function listLog(QueryLog): Promise<ResultData<LogDetailInfo[]>> {
  return queryWithDsl_<any>({
    data: log(param)
  }, (data: any) => data.data)
}
