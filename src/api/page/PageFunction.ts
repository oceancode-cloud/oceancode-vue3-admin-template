/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { UpdatePageGroup } from '@/models/page/UpdatePageGroup';
import { UpdatePage } from '@/models/page/UpdatePage';
import { AddPageGroup } from '@/models/page/AddPageGroup';
import { PageTemplateInfo } from '@/models/page/PageTemplateInfo';
import { page,
pageGroupPaths,
pages,
pageGroups,
pageChildren,
pageTemplates,
pageTemplate } from '@/api/method';
import { PageInfo } from '@/models/page/PageInfo';
import { ResultData, apiResponseWrapper, deepTree, useRouter } from '@oceancode/ocean-wui';
import { AddPage } from '@/models/page/AddPage';
import { PageGroupInfo } from '@/models/page/PageGroupInfo';
import { queryWithDsl as queryWithDsl_, request_, API_PREFIX_ } from '@/api/config';
import { UpdatePageConfig } from '@/models/page/UpdatePageConfig';

export function addPageGroup(AddPageGroup): Promise<void> {
  return apiResponseWrapper(request_.post(API_PREFIX_ + '/page/group', param))
}

export function updatePageGroupById(UpdatePageGroup): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/page/group', param));
}

export function deletePageGroupById(id: string): Promise<void> {
  return apiResponseWrapper(request_.delete(API_PREFIX_ + `/page/group?id=${id}`, {}));
}

export function addPage(AddPage): Promise<void> {
  return apiResponseWrapper(request_.post(API_PREFIX_ + '/page', param))
}

export function updatePageById(UpdatePage): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/page', param));
}

export function deletePageById(id: string): Promise<void> {
  return apiResponseWrapper(request_.delete(API_PREFIX_ + `/page?id=${id}`, {}));
}

export function getPageById(id: string): Promise<ResultData<PageInfo>> {
  return queryWithDsl_<any>({
    data: page(id)
  }, (data: any) => data.data)
}

export function updatePageConfigById(UpdatePageConfig): Promise<void> {
  return apiResponseWrapper(request_.put(API_PREFIX_ + '/page/config', param));
}

export function listPageGroupPathsById(id: string): Promise<ResultData<PageGroupInfo[]>> {
  return queryWithDsl_<any>({
    data: pageGroupPaths(id)
  }, (data: any) => data.data)
}

export function listPagesById(id: string): Promise<ResultData<PageInfo[]>> {
  return queryWithDsl_<any>({
    data: pages(id)
  }, (data: any) => data.data)
}

export function listPageGroupsById(id: string): Promise<ResultData<PageGroupInfo[]>> {
  return queryWithDsl_<any>({
    data: pageGroups(id)
  }, (data: any) => data.data)
}

export function listPageChildrenById(id: string): Promise<ResultData<PageInfo[]>> {
  return queryWithDsl_<any>({
    data: pageChildren(id)
  }, (data: any) => data.data)
}

export function listPageTemplates(): Promise<ResultData<PageTemplateInfo[]>> {
  return queryWithDsl_<any>({
    data: pageTemplates()
  }, (data: any) => data.data)
}

export function getPageTemplateById(id: string): Promise<ResultData<PageTemplateInfo>> {
  return queryWithDsl_<any>({
    data: pageTemplate(id)
  }, (data: any) => data.data)
}
