/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { QueryModel } from 'ocean-admin-api/models/model/QueryModel';
import { QueryFunctionCode } from 'ocean-admin-api/models/function/QueryFunctionCode';
import { AccountType } from 'ocean-admin-api/models/account/AccountType';
import { QueryFlowConfig } from 'ocean-admin-api/models/flow/QueryFlowConfig';
import { buildDsl } from '@oceancode/ocean-wui';
import { QueryFunctionPackage } from 'ocean-admin-api/models/function/QueryFunctionPackage';
import { QueryLog } from 'ocean-admin-api/models/flow/QueryLog';
import { QueryCode } from 'ocean-admin-api/models/app/QueryCode';
import { ParseCode } from 'ocean-admin-api/models/function/ParseCode';

export interface InnerQueryParam_<T> {
  fields?: Array<string | { key: string, fields: string[]}>;
  params: T;
}

export function userSessionInfo(param: InnerQueryParam_<void>): string {
  return buildDsl('user_session_info', [], param.fields || ['username', 'nickname', 'userId'])
}

export function username(param: InnerQueryParam_<{id: string}>): string {
  return buildDsl('username', [{ key: 'id', value: param.params.id }], param.fields || ['username'])
}

export function accounts(param: InnerQueryParam_<AccountType.AccountType>): string {
  return buildDsl('accounts', [{ key:"param", value: param.params || {}}], param.fields || ['id', 'name', 'used', 'type', 'expireStartTime', 'expireEndTime', 'config'])
}

export function appPackages(param: InnerQueryParam_<void>): string {
  return buildDsl('app_packages', [], param.fields || ['id', 'name', 'packageName', 'status', 'createdAt', 'updatedAt', 'templateId'])
}

export function appPackage(param: InnerQueryParam_<{id: string}>): string {
  return buildDsl('app_package', [{ key: 'id', value: param.params.id }], param.fields || ['id', 'name', 'packageName', 'status', 'createdAt', 'updatedAt', 'templateId'])
}

export function code(param: InnerQueryParam_<QueryCode>): string {
  return buildDsl('code', [{ key:"param", value: param.params || {}}], param.fields || ['versionId', 'code', 'updatedAt', 'language'])
}

export function menuGroups(param: InnerQueryParam_<void>): string {
  return buildDsl('menu_groups', [], param.fields || ['id', 'name'])
}

export function menusGroup(param: InnerQueryParam_<{id: string}>): string {
  return buildDsl('menus_group', [{ key: 'id', value: param.params.id }], param.fields || ['name', 'parentId', 'id', 'type', 'visible', 'componentId', 'icon', 'orderNum', 'createdAt', 'updatedAt', 'traits'])
}

export function groupMenus(param: InnerQueryParam_<{id: string}>): string {
  return buildDsl('group_menus', [{ key: 'id', value: param.params.id }], param.fields || ['name', 'parentId', 'id', 'type', 'visible', 'componentId', 'icon', 'orderNum', 'createdAt', 'updatedAt', 'traits'])
}

export function page(param: InnerQueryParam_<{id: string}>): string {
  return buildDsl('page', [{ key: 'id', value: param.params.id }], param.fields || ['title', 'pageId', 'type', 'implType', 'updatedAt', 'parentId', 'groupId', 'variables', 'traits', 'id'])
}

export function pageGroupPaths(param: InnerQueryParam_<{id: string}>): string {
  return buildDsl('page_group_paths', [{ key: 'id', value: param.params.id }], param.fields || ['id', 'name', 'code', 'type', 'parentId'])
}

export function pages(param: InnerQueryParam_<{id: string}>): string {
  return buildDsl('pages', [{ key: 'id', value: param.params.id }], param.fields || ['title', 'pageId', 'type', 'implType', 'updatedAt', 'parentId', 'groupId', 'variables', 'traits', 'id'])
}

export function pageGroups(param: InnerQueryParam_<{id: string}>): string {
  return buildDsl('page_groups', [{ key: 'id', value: param.params.id }], param.fields || ['id', 'name', 'code', 'type', 'parentId'])
}

export function pageChildren(param: InnerQueryParam_<{id: string}>): string {
  return buildDsl('page_children', [{ key: 'id', value: param.params.id }], param.fields || ['title', 'pageId', 'type', 'implType', 'updatedAt', 'parentId', 'groupId', 'variables', 'traits', 'id'])
}

export function pageTemplates(param: InnerQueryParam_<void>): string {
  return buildDsl('page_templates', [], param.fields || ['componentGroup', 'platform', 'createdAt', 'updatedAt', 'id', 'images', 'published', 'type', 'group', 'templateId', 'userId', 'title', 'keywords'])
}

export function pageTemplate(param: InnerQueryParam_<{id: string}>): string {
  return buildDsl('page_template', [{ key: 'id', value: param.params.id }], param.fields || ['componentGroup', 'platform', 'createdAt', 'updatedAt', 'id', 'images', 'published', 'type', 'group', 'templateId', 'userId', 'title', 'keywords'])
}

export function workspace(param: InnerQueryParam_<{id: string}>): string {
  return buildDsl('workspace', [{ key: 'id', value: param.params.id }], param.fields || ['updatedAt', 'id', 'name', 'username', 'createdAt'])
}

export function userWorkspace(param: InnerQueryParam_<void>): string {
  return buildDsl('user_workspace', [], param.fields || ['updatedAt', 'id', 'name', 'username', 'createdAt'])
}

export function datasources(param: InnerQueryParam_<void>): string {
  return buildDsl('datasources', [], param.fields || ['id', 'name', 'datasourceId', 'type', 'accountId'])
}

export function modelsGroup(param: InnerQueryParam_<QueryModel>): string {
  return buildDsl('models_group', [{ key:"param", value: param.params || {}}], param.fields || ['parentId', 'fields', 'groupId', 'traits', 'id', 'name', 'primaryField', 'enumType', 'type', 'modelId', 'datasourceId', 'parentIds', 'referenceIds'])
}

export function model(param: InnerQueryParam_<{id: string, allField: boolean}>): string {
  return buildDsl('model', [{ key: 'id', value: param.params.id },{ key: 'allField', value: param.params.allField }], param.fields || ['parentId', 'fields', 'groupId', 'traits', 'id', 'name', 'primaryField', 'enumType', 'type', 'modelId', 'datasourceId', 'parentIds', 'referenceIds'])
}

export function modelGroupPath(param: InnerQueryParam_<{id: string}>): string {
  return buildDsl('model_group_path', [{ key: 'id', value: param.params.id }], param.fields || ['code', 'parentId', 'id', 'name'])
}

export function modelGroups(param: InnerQueryParam_<{id: string}>): string {
  return buildDsl('model_groups', [{ key: 'id', value: param.params.id }], param.fields || ['code', 'parentId', 'id', 'name'])
}

export function functionGroups(param: InnerQueryParam_<void>): string {
  return buildDsl('function_groups', [], param.fields || ['id', 'name', 'code', 'parentId'])
}

export function functionPackages(param: InnerQueryParam_<QueryFunctionPackage>): string {
  return buildDsl('function_packages', [{ key:"param", value: param.params || {}}], param.fields || ['id', 'name', 'createdAt', 'updatedAt', 'packageName', 'groupId'])
}

export function functionMethod(param: InnerQueryParam_<{id: string}>): string {
  return buildDsl('function_method', [{ key: 'id', value: param.params.id }], param.fields || ['type', 'name', 'implType', 'aggConfigs', 'external', 'callType', 'inputModelId', 'traits', 'permissions', 'resultCount', 'path', 'returnModelId', 'inputRequired', 'packageId', 'id', 'method'])
}

export function functionMethods(param: InnerQueryParam_<{id: string}>): string {
  return buildDsl('function_methods', [{ key: 'id', value: param.params.id }], param.fields || ['type', 'name', 'implType', 'aggConfigs', 'external', 'callType', 'inputModelId', 'traits', 'permissions', 'resultCount', 'path', 'returnModelId', 'inputRequired', 'packageId', 'id', 'method'])
}

export function methodFunctionPackage(param: InnerQueryParam_<{id: string}>): string {
  return buildDsl('method_function_package', [{ key: 'id', value: param.params.id }], param.fields || ['id', 'name', 'createdAt', 'updatedAt', 'packageName', 'groupId'])
}

export function functionCode(param: InnerQueryParam_<QueryFunctionCode>): string {
  return buildDsl('function_code', [{ key:"param", value: param.params || {}}], param.fields || ['versionId', 'code', 'updatedAt', 'language'])
}

export function codeParse(param: InnerQueryParam_<ParseCode>): string {
  return buildDsl('code_parse', [{ key:"param", value: param.params || {}}], param.fields || [])
}

export function flow(param: InnerQueryParam_<QueryFlowConfig>): string {
  return buildDsl('flow', [{ key:"param", value: param.params || {}}], param.fields || [])
}

export function userOpenCommit(param: InnerQueryParam_<void>): string {
  return buildDsl('user_open_commit', [], param.fields || [])
}

export function log(param: InnerQueryParam_<QueryLog>): string {
  return buildDsl('log', [{ key:"param", value: param.params || {}}], param.fields || ['success', 'updatedAt', 'createdAt', 'timeout', 'endTime', 'startTime'])
}
