/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { UpdateModelGroup } from 'ocean-admin-api/models/model/UpdateModelGroup';
import { AddModel } from 'ocean-admin-api/models/model/AddModel';
import { QueryModel } from 'ocean-admin-api/models/model/QueryModel';
import { modelsGroup, model, modelGroupPath, modelGroups } from '@/api/method';
import { ModelGroupInfo } from 'ocean-admin-api/models/model/ModelGroupInfo';
import { AddModelGroup } from 'ocean-admin-api/models/model/AddModelGroup';
import { ResultData, apiResponseWrapper, deepTree, useRouter } from '@oceancode/ocean-wui';
import { UpdateModelParam } from 'ocean-admin-api/models/model/UpdateModelParam';
import { ModelInfo } from 'ocean-admin-api/models/model/ModelInfo';
import { queryWithDsl as queryWithDsl_, request_, API_PREFIX_ } from '@/api/config';
import { UpsertModelField } from 'ocean-admin-api/models/model/UpsertModelField';
import { AddCrudModelParam } from 'ocean-admin-api/models/model/AddCrudModelParam';

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
