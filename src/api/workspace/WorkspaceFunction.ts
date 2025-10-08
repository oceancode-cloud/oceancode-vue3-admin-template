/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { AddProject } from '@/models/project/AddProject';
import { workspace, userWorkspace } from '@/api/method';
import { ResultData, apiResponseWrapper, deepTree, useRouter } from '@oceancode/ocean-wui';
import { ProjectInfo } from '@/models/project/ProjectInfo';
import { queryWithDsl as queryWithDsl_, request_, API_PREFIX_ } from '@/api/config';
import { UpdateProject } from '@/models/project/UpdateProject';

export function addWorkspace(AddProject): Promise<void> {
  return apiResponseWrapper(request_.post(API_PREFIX_ + '/workspace', param))
}

export function updateWorkspaceById(UpdateProject): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/workspace', param));
}

export function deleteWorkspaceById(id: string): Promise<void> {
  return apiResponseWrapper(request_.delete(API_PREFIX_ + `/workspace?id=${id}`, {}));
}

export function getWorkspaceById(id: string): Promise<ResultData<ProjectInfo>> {
  return queryWithDsl_<any>({
    data: workspace(id)
  }, (data: any) => data.data)
}

export function listUserWorkspace(): Promise<ResultData<ProjectInfo[]>> {
  return queryWithDsl_<any>({
    data: userWorkspace()
  }, (data: any) => data.data)
}
