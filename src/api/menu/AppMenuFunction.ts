/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { AddMenu } from 'ocean-admin-api/models/menu/AddMenu';
import { AddAppMenuGroup } from 'ocean-admin-api/models/menu/AddAppMenuGroup';
import { UpdateAppMenuGroup } from 'ocean-admin-api/models/menu/UpdateAppMenuGroup';
import { UpdateMenuVisible } from 'ocean-admin-api/models/menu/UpdateMenuVisible';
import { menuGroups, menusGroup, groupMenus } from '@/api/method';
import { MenuInfo } from 'ocean-admin-api/models/menu/MenuInfo';
import { UpdateAppMenu } from 'ocean-admin-api/models/menu/UpdateAppMenu';
import { ResultData, apiResponseWrapper, deepTree, useRouter } from '@oceancode/ocean-wui';
import { AppMenuGroupInfo } from 'ocean-admin-api/models/menu/AppMenuGroupInfo';
import { queryWithDsl as queryWithDsl_, request_, API_PREFIX_ } from '@/api/config';

export function addMenuGroup(AddAppMenuGroup): Promise<void> {
  return apiResponseWrapper(request_.post(API_PREFIX_ + '/menu/group', param))
}

export function updateMenuGroupById(UpdateAppMenuGroup): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/menu/group', param));
}

export function listMenuGroups(): Promise<ResultData<AppMenuGroupInfo[]>> {
  return queryWithDsl_<any>({
    data: menuGroups()
  }, (data: any) => data.data)
}

export function listMenusGroupById(id: string): Promise<ResultData<MenuInfo[]>> {
  return queryWithDsl_<any>({
    data: menusGroup(id)
  }, (data: any) => data.data)
}

export function deleteMenuById(id: string): Promise<void> {
  return apiResponseWrapper(request_.delete(API_PREFIX_ + `/menu?id=${id}`, {}));
}

export function deleteMenuGroupById(id: string): Promise<void> {
  return apiResponseWrapper(request_.delete(API_PREFIX_ + `/menu/group?id=${id}`, {}));
}

export function listGroupMenusById(id: string): Promise<ResultData<MenuInfo[]>> {
  return queryWithDsl_<any>({
    data: groupMenus(id)
  }, (data: any) => data.data)
}

export function updateMenuVisibleById(UpdateMenuVisible): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/menu/visible', param));
}

export function addMenu(AddMenu): Promise<void> {
  return apiResponseWrapper(request_.post(API_PREFIX_ + '/menu', param))
}

export function updateMenuById(UpdateAppMenu): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/menu', param));
}
