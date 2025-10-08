/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export function userSessionInfo(fields?: Array<string | object>): string {
  return buildDsl('user_session_info', [], fields || ['username', 'nickname', 'userId'])
}

export function username(id: string, fields?: Array<string | object>): string {
  return buildDsl('username', [{ key: 'id', value: id }], fields || ['username'])
}

export function accounts(param, fields?: Array<string | object>): string {
  return buildDsl('accounts', [{ key:"param", value: param || {}}], fields || ['id', 'name', 'used', 'type', 'expireStartTime', 'expireEndTime', 'config'])
}

export function appPackages(fields?: Array<string | object>): string {
  return buildDsl('app_packages', [], fields || ['id', 'name', 'packageName', 'status', 'createdAt', 'updatedAt', 'templateId'])
}

export function appPackage(id: string, fields?: Array<string | object>): string {
  return buildDsl('app_package', [{ key: 'id', value: id }], fields || ['id', 'name', 'packageName', 'status', 'createdAt', 'updatedAt', 'templateId'])
}

export function code(param, fields?: Array<string | object>): string {
  return buildDsl('code', [{ key:"param", value: param || {}}], fields || ['versionId', 'code', 'updatedAt', 'language'])
}

export function menuGroups(fields?: Array<string | object>): string {
  return buildDsl('menu_groups', [], fields || ['id', 'name'])
}

export function menusGroup(id: string, fields?: Array<string | object>): string {
  return buildDsl('menus_group', [{ key: 'id', value: id }], fields || ['name', 'parentId', 'id', 'type', 'visible', 'componentId', 'icon', 'orderNum', 'createdAt', 'updatedAt', 'traits'])
}

export function groupMenus(id: string, fields?: Array<string | object>): string {
  return buildDsl('group_menus', [{ key: 'id', value: id }], fields || ['name', 'parentId', 'id', 'type', 'visible', 'componentId', 'icon', 'orderNum', 'createdAt', 'updatedAt', 'traits'])
}

export function page(id: string, fields?: Array<string | object>): string {
  return buildDsl('page', [{ key: 'id', value: id }], fields || ['title', 'pageId', 'type', 'implType', 'updatedAt', 'parentId', 'groupId', 'variables', 'traits', 'id'])
}

export function pageGroupPaths(id: string, fields?: Array<string | object>): string {
  return buildDsl('page_group_paths', [{ key: 'id', value: id }], fields || ['id', 'name', 'code', 'type', 'parentId'])
}

export function pages(id: string, fields?: Array<string | object>): string {
  return buildDsl('pages', [{ key: 'id', value: id }], fields || ['title', 'pageId', 'type', 'implType', 'updatedAt', 'parentId', 'groupId', 'variables', 'traits', 'id'])
}

export function pageGroups(id: string, fields?: Array<string | object>): string {
  return buildDsl('page_groups', [{ key: 'id', value: id }], fields || ['id', 'name', 'code', 'type', 'parentId'])
}

export function pageChildren(id: string, fields?: Array<string | object>): string {
  return buildDsl('page_children', [{ key: 'id', value: id }], fields || ['title', 'pageId', 'type', 'implType', 'updatedAt', 'parentId', 'groupId', 'variables', 'traits', 'id'])
}

export function pageTemplates(fields?: Array<string | object>): string {
  return buildDsl('page_templates', [], fields || ['componentGroup', 'platform', 'createdAt', 'updatedAt', 'id', 'images', 'published', 'type', 'group', 'templateId', 'userId', 'title', 'keywords'])
}

export function pageTemplate(id: string, fields?: Array<string | object>): string {
  return buildDsl('page_template', [{ key: 'id', value: id }], fields || ['componentGroup', 'platform', 'createdAt', 'updatedAt', 'id', 'images', 'published', 'type', 'group', 'templateId', 'userId', 'title', 'keywords'])
}

export function workspace(id: string, fields?: Array<string | object>): string {
  return buildDsl('workspace', [{ key: 'id', value: id }], fields || ['updatedAt', 'id', 'name', 'username', 'createdAt'])
}

export function userWorkspace(fields?: Array<string | object>): string {
  return buildDsl('user_workspace', [], fields || ['updatedAt', 'id', 'name', 'username', 'createdAt'])
}

export function datasources(fields?: Array<string | object>): string {
  return buildDsl('datasources', [], fields || ['id', 'name', 'datasourceId', 'type', 'accountId'])
}

export function modelsGroup(param, fields?: Array<string | object>): string {
  return buildDsl('models_group', [{ key:"param", value: param || {}}], fields || ['parentId', 'fields', 'groupId', 'traits', 'id', 'name', 'primaryField', 'enumType', 'type', 'modelId', 'datasourceId', 'parentIds', 'referenceIds'])
}

export function model(id: string, allField: boolean, fields?: Array<string | object>): string {
  return buildDsl('model', [{ key: 'id', value: id },{ key: 'allField', value: allField }], fields || ['parentId', 'fields', 'groupId', 'traits', 'id', 'name', 'primaryField', 'enumType', 'type', 'modelId', 'datasourceId', 'parentIds', 'referenceIds'])
}

export function modelGroupPath(id: string, fields?: Array<string | object>): string {
  return buildDsl('model_group_path', [{ key: 'id', value: id }], fields || ['code', 'parentId', 'id', 'name'])
}

export function modelGroups(id: string, fields?: Array<string | object>): string {
  return buildDsl('model_groups', [{ key: 'id', value: id }], fields || ['code', 'parentId', 'id', 'name'])
}

export function functionGroups(fields?: Array<string | object>): string {
  return buildDsl('function_groups', [], fields || ['id', 'name', 'code', 'parentId'])
}

export function functionPackages(param, fields?: Array<string | object>): string {
  return buildDsl('function_packages', [{ key:"param", value: param || {}}], fields || ['id', 'name', 'createdAt', 'updatedAt', 'packageName', 'groupId'])
}

export function functionMethod(id: string, fields?: Array<string | object>): string {
  return buildDsl('function_method', [{ key: 'id', value: id }], fields || ['type', 'name', 'implType', 'aggConfigs', 'external', 'callType', 'inputModelId', 'traits', 'permissions', 'resultCount', 'path', 'returnModelId', 'inputRequired', 'packageId', 'id', 'method'])
}

export function functionMethods(id: string, fields?: Array<string | object>): string {
  return buildDsl('function_methods', [{ key: 'id', value: id }], fields || ['type', 'name', 'implType', 'aggConfigs', 'external', 'callType', 'inputModelId', 'traits', 'permissions', 'resultCount', 'path', 'returnModelId', 'inputRequired', 'packageId', 'id', 'method'])
}

export function methodFunctionPackage(id: string, fields?: Array<string | object>): string {
  return buildDsl('method_function_package', [{ key: 'id', value: id }], fields || ['id', 'name', 'createdAt', 'updatedAt', 'packageName', 'groupId'])
}

export function functionCode(param, fields?: Array<string | object>): string {
  return buildDsl('function_code', [{ key:"param", value: param || {}}], fields || ['versionId', 'code', 'updatedAt', 'language'])
}

export function codeParse(param, fields?: Array<string | object>): string {
  return buildDsl('code_parse', [{ key:"param", value: param || {}}], fields || [])
}

export function flow(param, fields?: Array<string | object>): string {
  return buildDsl('flow', [{ key:"param", value: param || {}}], fields || [])
}

export function userOpenCommit(fields?: Array<string | object>): string {
  return buildDsl('user_open_commit', [], fields || [])
}

export function log(param, fields?: Array<string | object>): string {
  return buildDsl('log', [{ key:"param", value: param || {}}], fields || ['success', 'updatedAt', 'createdAt', 'timeout', 'endTime', 'startTime'])
}
