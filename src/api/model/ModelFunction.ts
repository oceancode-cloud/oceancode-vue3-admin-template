/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { ModelInfo } from '@/models/model/ModelInfo';
import { AddModel } from '@/models/model/AddModel';
import { modelsGroup, model, modelGroupPath, modelGroups } from '@/api/method';
import { UpdateModelParam } from '@/models/model/UpdateModelParam';
import { ResultData, apiResponseWrapper, deepTree, useRouter } from '@oceancode/ocean-wui';
import { QueryModel } from '@/models/model/QueryModel';
import { queryWithDsl as queryWithDsl_, request_, API_PREFIX_ } from '@/api/config';
import { UpdateModelGroup } from '@/models/model/UpdateModelGroup';
import { AddCrudModelParam } from '@/models/model/AddCrudModelParam';
import { ModelGroupInfo } from '@/models/model/ModelGroupInfo';
import { AddModelGroup } from '@/models/model/AddModelGroup';
import { UpsertModelField } from '@/models/model/UpsertModelField';

export function addModelGroup(AddModelGroup): Promise<void> {
  return apiResponseWrapper(request_.post(API_PREFIX_ + '/model/group', param))
}

export function deleteModelGroupById(id: string): Promise<void> {
  return apiResponseWrapper(request_.delete(API_PREFIX_ + `/model/group?id=${id}`, {}));
}

export function updateModelGroupById(UpdateModelGroup): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/model/group', param));
}

export function addModel(AddModel): Promise<void> {
  return apiResponseWrapper(request_.post(API_PREFIX_ + '/model', param))
}

export function updateModelById(UpdateModelParam): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/model', param));
}

export function deleteModelById(id: string): Promise<void> {
  return apiResponseWrapper(request_.delete(API_PREFIX_ + `/model?id=${id}`, {}));
}

export function updateModelFieldById(UpsertModelField): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/model/field', param));
}

export function deleteModelFieldById(id: string): Promise<void> {
  return apiResponseWrapper(request_.delete(API_PREFIX_ + `/model/field?id=${id}`, {}));
}

export function addCrudModel(AddCrudModelParam): Promise<void> {
  return apiResponseWrapper(request_.post(API_PREFIX_ + '/crud/model', param))
}

export function listModelsGroup(QueryModel): Promise<ResultData<ModelInfo[]>> {
  return queryWithDsl_<any>({
    data: modelsGroup(param)
  }, (data: any) => data.data)
}

export function getModel(id: string, allField: boolean): Promise<ResultData<ModelInfo>> {
  return queryWithDsl_<any>({
    data: model(id, allField)
  }, (data: any) => data.data)
}

export function listModelGroupPathById(id: string): Promise<ResultData<ModelGroupInfo[]>> {
  return queryWithDsl_<any>({
    data: modelGroupPath(id)
  }, (data: any) => data.data)
}

export function listModelGroupsById(id: string): Promise<ResultData<ModelGroupInfo[]>> {
  return queryWithDsl_<any>({
    data: modelGroups(id)
  }, (data: any) => data.data)
}
