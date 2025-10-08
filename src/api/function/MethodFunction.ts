/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { AddFunctionMethod } from 'ocean-admin-api/models/function/AddFunctionMethod';
import { AddFunctionPackage } from 'ocean-admin-api/models/function/AddFunctionPackage';
import { AddFunctionGroup } from 'ocean-admin-api/models/function/AddFunctionGroup';
import { UpsertFunctionCode } from 'ocean-admin-api/models/function/UpsertFunctionCode';
import { queryWithDsl as queryWithDsl_, request_, API_PREFIX_ } from '@/api/config';
import { CodeInfo } from 'ocean-admin-api/models/app/CodeInfo';
import { ParseCodeResponse } from 'ocean-admin-api/models/function/ParseCodeResponse';
import { FunctionPackageInfo } from 'ocean-admin-api/models/function/FunctionPackageInfo';
import { UpdateFunctionMethodConfig } from 'ocean-admin-api/models/function/UpdateFunctionMethodConfig';
import { functionGroups,
functionPackages,
functionMethod,
functionMethods,
methodFunctionPackage,
functionCode,
codeParse } from '@/api/method';
import { UpdateFunctionGroup } from 'ocean-admin-api/models/function/UpdateFunctionGroup';
import { QueryFunctionCode } from 'ocean-admin-api/models/function/QueryFunctionCode';
import { UpdateFunctionMethod } from 'ocean-admin-api/models/function/UpdateFunctionMethod';
import { ResultData, apiResponseWrapper, deepTree, useRouter } from '@oceancode/ocean-wui';
import { QueryFunctionPackage } from 'ocean-admin-api/models/function/QueryFunctionPackage';
import { ParseCode } from 'ocean-admin-api/models/function/ParseCode';
import { FunctionGroupInfo } from 'ocean-admin-api/models/function/FunctionGroupInfo';
import { UpdateFunctionPackage } from 'ocean-admin-api/models/function/UpdateFunctionPackage';
import { FunctionMethodInfo } from 'ocean-admin-api/models/function/FunctionMethodInfo';

export function addFunctionGroup(AddFunctionGroup): Promise<void> {
  return apiResponseWrapper(request_.post(API_PREFIX_ + '/function/group', param))
}

export function updateFunctionGroupById(UpdateFunctionGroup): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/function/group', param));
}

export function deleteFunctionGroupById(id: string): Promise<void> {
  return apiResponseWrapper(request_.delete(API_PREFIX_ + `/function/group?id=${id}`, {}));
}

export function addFunctionPackage(AddFunctionPackage): Promise<void> {
  return apiResponseWrapper(request_.post(API_PREFIX_ + '/function/package', param))
}

export function updateFunctionPackageById(UpdateFunctionPackage): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/function/package', param));
}

export function deleteFunctionPackageById(id: string): Promise<void> {
  return apiResponseWrapper(request_.delete(API_PREFIX_ + `/function/package?id=${id}`, {}));
}

export function addFunctionMethod(AddFunctionMethod): Promise<void> {
  return apiResponseWrapper(request_.post(API_PREFIX_ + '/function/method', param))
}

export function updateFunctionMethodById(UpdateFunctionMethod): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/function/method', param));
}

export function deleteFunctionMethodById(id: string): Promise<void> {
  return apiResponseWrapper(request_.delete(API_PREFIX_ + `/function/method?id=${id}`, {}));
}

export function listFunctionGroups(): Promise<ResultData<FunctionGroupInfo[]>> {
  return queryWithDsl_<any>({
    data: functionGroups()
  }, (data: any) => data.data)
}

export function listFunctionPackages(QueryFunctionPackage): Promise<ResultData<FunctionPackageInfo[]>> {
  return queryWithDsl_<any>({
    data: functionPackages(param)
  }, (data: any) => data.data)
}

export function getFunctionMethodById(id: string): Promise<ResultData<FunctionMethodInfo>> {
  return queryWithDsl_<any>({
    data: functionMethod(id)
  }, (data: any) => data.data)
}

export function listFunctionMethodsById(id: string): Promise<ResultData<FunctionMethodInfo[]>> {
  return queryWithDsl_<any>({
    data: functionMethods(id)
  }, (data: any) => data.data)
}

export function getMethodFunctionPackageById(id: string): Promise<ResultData<FunctionPackageInfo>> {
  return queryWithDsl_<any>({
    data: methodFunctionPackage(id)
  }, (data: any) => data.data)
}

export function updateMethodConfigById(UpdateFunctionMethodConfig): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/method/config', param));
}

export function updateFunctionCodeById(UpsertFunctionCode): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/function/code', param));
}

export function getFunctionCode(QueryFunctionCode): Promise<ResultData<CodeInfo>> {
  return queryWithDsl_<any>({
    data: functionCode(param)
  }, (data: any) => data.data)
}

export function getCodeParse(ParseCode): Promise<ResultData<ParseCodeResponse>> {
  return queryWithDsl_<any>({
    data: codeParse(param)
  }, (data: any) => data.data)
}
