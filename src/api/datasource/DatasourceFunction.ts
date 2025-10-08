/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { UpdateDatasource } from 'ocean-admin-api/models/datasource/UpdateDatasource';
import { AddDatasource } from 'ocean-admin-api/models/datasource/AddDatasource';
import { datasources } from '@/api/method';
import { ResultData, apiResponseWrapper, deepTree, useRouter } from '@oceancode/ocean-wui';
import { queryWithDsl as queryWithDsl_, request_, API_PREFIX_ } from '@/api/config';
import { DatasourceDetail } from 'ocean-admin-api/models/datasource/DatasourceDetail';

export function addDatasource(AddDatasource): Promise<void> {
  return apiResponseWrapper(request_.post(API_PREFIX_ + '/datasource', param))
}

export function updateDatasourceById(UpdateDatasource): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/datasource', param));
}

export function deleteDatasourceById(id: string): Promise<void> {
  return apiResponseWrapper(request_.delete(API_PREFIX_ + `/datasource?id=${id}`, {}));
}

export function listDatasources(): Promise<ResultData<DatasourceDetail[]>> {
  return queryWithDsl_<any>({
    data: datasources()
  }, (data: any) => data.data)
}
