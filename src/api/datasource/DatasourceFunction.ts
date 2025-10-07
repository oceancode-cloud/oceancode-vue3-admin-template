/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { UpdateDatasource } from '@/models/datasource/UpdateDatasource';
import { datasources } from '@/api/method';
import { AddDatasource } from '@/models/datasource/AddDatasource';
import { ResultData, apiResponseWrapper, deepTree, useRouter } from '@oceancode/ocean-wui';
import { DatasourceDetail } from '@/models/datasource/DatasourceDetail';
import { queryWithDsl as queryWithDsl_, request_, API_PREFIX_ } from '@/api/config';

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
