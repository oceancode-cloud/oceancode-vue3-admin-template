/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { AccountInfo } from 'ocean-admin-api/models/account/AccountInfo';
import { accounts } from '@/api/method';
import { AccountType } from 'ocean-admin-api/models/account/AccountType';
import { ResultData, apiResponseWrapper, deepTree, useRouter } from '@oceancode/ocean-wui';
import { UpdateAccount } from 'ocean-admin-api/models/account/UpdateAccount';
import { UpdateAccountUsed } from 'ocean-admin-api/models/account/UpdateAccountUsed';
import { queryWithDsl as queryWithDsl_, request_, API_PREFIX_ } from '@/api/config';
import { AddAccount } from 'ocean-admin-api/models/account/AddAccount';

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
