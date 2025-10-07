/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { AccountInfo } from '@/models/account/AccountInfo';
import { UpdateAccount } from '@/models/account/UpdateAccount';
import { accounts } from '@/api/method';
import { ResultData, apiResponseWrapper, deepTree, useRouter } from '@oceancode/ocean-wui';
import { AccountType } from '@/models/account/AccountType';
import { queryWithDsl as queryWithDsl_, request_, API_PREFIX_ } from '@/api/config';
import { UpdateAccountUsed } from '@/models/account/UpdateAccountUsed';
import { AddAccount } from '@/models/account/AddAccount';

export function listAccounts(AccountType): Promise<ResultData<AccountInfo[]>> {
  return queryWithDsl_<any>({
    data: accounts(param)
  }, (data: any) => data.data)
}

export function addAccount(AddAccount): Promise<void> {
  return apiResponseWrapper(request_.post(API_PREFIX_ + '/account', param))
}

export function updateAccountById(UpdateAccount): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/account', param));
}

export function deleteAccountById(id: string): Promise<void> {
  return apiResponseWrapper(request_.delete(API_PREFIX_ + `/account?id=${id}`, {}));
}

export function updateAccountUsedById(UpdateAccountUsed): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/account/used', param));
}

export function updateAccountTokenById(id: string): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/account/token', { id: id }));
}

export function listAccountOption(): Promise<ResultData<AccountInfo[]>> {
}
