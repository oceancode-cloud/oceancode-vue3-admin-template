/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { UserSessionInfo } from '@/models/user/UserSessionInfo';
import { UserLoginRequest } from '@/models/user/UserLoginRequest';
import { UserLoginResponse } from '@/models/user/UserLoginResponse';
import { userSessionInfo } from '@/api/method';
import { UserRegisterRequest } from '@/models/user/UserRegisterRequest';
import { ResultData, apiResponseWrapper, deepTree, useRouter } from '@oceancode/ocean-wui';
import { queryWithDsl as queryWithDsl_, request_, API_PREFIX_ } from '@/api/config';
import { RestPasswordParam } from '@/models/user/RestPasswordParam';

export function userLogin(UserLoginRequest): Promise<ResultData<UserLoginResponse>> {
  return apiResponseWrapper(request_.post(API_PREFIX_ + '/user/login', param))
}

export function getUserSessionInfo(): Promise<ResultData<UserSessionInfo>> {
  return queryWithDsl_<any>({
    data: userSessionInfo()
  }, (data: any) => data.data)
}

export function userLogout(): Promise<void> {
  return apiResponseWrapper(request_.post(API_PREFIX_ + '/user/logout', param))
}

export function userRegister(UserRegisterRequest): Promise<void> {
  return apiResponseWrapper(request_.post(API_PREFIX_ + '/user/register', param))
}

export function userResetPassword(RestPasswordParam): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/user/reset/password', param));
}
