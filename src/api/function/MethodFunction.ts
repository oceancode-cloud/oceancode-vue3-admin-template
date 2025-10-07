/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { UpsertFunctionCode } from '@/models/function/UpsertFunctionCode';
import { ParseCodeResponse } from '@/models/function/ParseCodeResponse';
import { AddFunctionGroup } from '@/models/function/AddFunctionGroup';
import { UpdateFunctionPackage } from '@/models/function/UpdateFunctionPackage';
import { queryWithDsl as queryWithDsl_, request_, API_PREFIX_ } from '@/api/config';
import { CodeInfo } from '@/models/app/CodeInfo';
import { QueryFunctionPackage } from '@/models/function/QueryFunctionPackage';
import { FunctionGroupInfo } from '@/models/function/FunctionGroupInfo';
import { AddFunctionMethod } from '@/models/function/AddFunctionMethod';
import { functionGroups,
functionPackages,
functionMethod,
functionMethods,
methodFunctionPackage,
functionCode,
codeParse } from '@/api/method';
import { ResultData, apiResponseWrapper, deepTree, useRouter } from '@oceancode/ocean-wui';
import { FunctionPackageInfo } from '@/models/function/FunctionPackageInfo';
import { FunctionMethodInfo } from '@/models/function/FunctionMethodInfo';
import { UpdateFunctionMethodConfig } from '@/models/function/UpdateFunctionMethodConfig';
import { ParseCode } from '@/models/function/ParseCode';
import { UpdateFunctionMethod } from '@/models/function/UpdateFunctionMethod';
import { AddFunctionPackage } from '@/models/function/AddFunctionPackage';
import { UpdateFunctionGroup } from '@/models/function/UpdateFunctionGroup';
import { QueryFunctionCode } from '@/models/function/QueryFunctionCode';

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
