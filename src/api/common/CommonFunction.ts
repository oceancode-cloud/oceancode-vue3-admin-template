/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { ResultData, apiResponseWrapper, deepTree, useRouter } from '@oceancode/ocean-wui';
import { Email } from 'ocean-admin-api/models/user/Email';
import { queryWithDsl as queryWithDsl_, request_, API_PREFIX_ } from '@/api/config';

export function sendUserRegisterEmailCode(Email): Promise<void> {
  return apiResponseWrapper(request_.post(API_PREFIX_ + '/email/register/code', param))
}

export function updateEmailResetPassword(Email): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/email/reset/password', param));
}
