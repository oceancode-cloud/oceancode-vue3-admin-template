/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { AddCommit } from '@/models/commit/AddCommit';
import { ResultData, apiResponseWrapper, deepTree, useRouter } from '@oceancode/ocean-wui';
import { queryWithDsl as queryWithDsl_, request_, API_PREFIX_ } from '@/api/config';

export function addCommit(AddCommit): Promise<void> {
  return apiResponseWrapper(request_.post(API_PREFIX_ + '/commit', param))
}

export function rebuildCommitTask(id: string): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/rebuild/commit/task', { id: id }));
}
