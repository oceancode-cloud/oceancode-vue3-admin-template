/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { appPackages, appPackage, code } from '@/api/method';
import { UpdateAppPackageRequest } from '@/models/app/UpdateAppPackageRequest';
import { ResultData, apiResponseWrapper, deepTree, useRouter } from '@oceancode/ocean-wui';
import { AppPackageRequest } from '@/models/app/AppPackageRequest';
import { AppPackageInfo } from '@/models/app/AppPackageInfo';
import { queryWithDsl as queryWithDsl_, request_, API_PREFIX_ } from '@/api/config';
import { AppTemplateInfo } from '@/models/app/AppTemplateInfo';
import { QueryCode } from '@/models/app/QueryCode';
import { CodeInfo } from '@/models/app/CodeInfo';

export function addAppPackage(AppPackageRequest): Promise<void> {
  return apiResponseWrapper(request_.post(API_PREFIX_ + '/app/package', param))
}

export function listAppPackages(): Promise<ResultData<AppPackageInfo[]>> {
  return queryWithDsl_<any>({
    data: appPackages()
  }, (data: any) => data.data)
}

export function updateAppPackageById(UpdateAppPackageRequest): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/app/package', param));
}

export function deleteAppPackageById(id: string): Promise<void> {
  return apiResponseWrapper(request_.delete(API_PREFIX_ + `/app/package?id=${id}`, {}));
}

export function updateAppPackageBuildById(id: string): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/app/package/build', { id: id }));
}

export function getAppPackageById(id: string): Promise<ResultData<AppPackageInfo>> {
  return queryWithDsl_<any>({
    data: appPackage(id)
  }, (data: any) => data.data)
}

export function getCode(QueryCode): Promise<ResultData<CodeInfo>> {
  return queryWithDsl_<any>({
    data: code(param)
  }, (data: any) => data.data)
}

export function updateAppProductById(id: string): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/app/product', { id: id }));
}

export function appPackageProduct(id: string): Promise<void> {
}

export function updateAppProductDeploymentById(id: string): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/app/product/deployment', { id: id }));
}

export function listAllTemplateOptions(): Promise<ResultData<AppTemplateInfo[]>> {
}
