/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { flow } from '@/api/method';
import { UpsertFlowConfig } from '@/models/flow/UpsertFlowConfig';
import { ResultData, apiResponseWrapper, deepTree, useRouter } from '@oceancode/ocean-wui';
import { FlowConfig } from '@/models/flow/FlowConfig';
import { queryWithDsl as queryWithDsl_, request_, API_PREFIX_ } from '@/api/config';
import { FlowDesignRunResult } from '@/models/flow/FlowDesignRunResult';
import { QueryFlowConfig } from '@/models/flow/QueryFlowConfig';

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
