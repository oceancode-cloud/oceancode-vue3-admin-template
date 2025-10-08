/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { FlowConfig } from 'ocean-admin-api/models/flow/FlowConfig';
import { flow } from '@/api/method';
import { QueryFlowConfig } from 'ocean-admin-api/models/flow/QueryFlowConfig';
import { ResultData, apiResponseWrapper, deepTree, useRouter } from '@oceancode/ocean-wui';
import { FlowDesignRunResult } from 'ocean-admin-api/models/flow/FlowDesignRunResult';
import { queryWithDsl as queryWithDsl_, request_, API_PREFIX_ } from '@/api/config';
import { UpsertFlowConfig } from 'ocean-admin-api/models/flow/UpsertFlowConfig';

export function updateFlow(UpsertFlowConfig): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/flow', param));
}

export function getFlow(QueryFlowConfig): Promise<ResultData<FlowConfig>> {
  return queryWithDsl_<any>({
    data: flow(param)
  }, (data: any) => data.data)
}

export function updateFlowRun(QueryFlowConfig): Promise<ResultData<FlowDesignRunResult>> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/flow/run', param));
}
