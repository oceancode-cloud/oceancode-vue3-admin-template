import { buildDsl } from '@oceancode/ocean-wui'

import { QueryFunctionPackage } from '@/models/function/QueryFunctionPackage'
import { QueryModel } from '@/models/model/QueryModel'

export function userSessionInfo(fields?: Array<string | object>): string {
    return buildDsl('user_session_info', [], fields || ['username', 'nickname', 'userId'])
}

export function getUsernameById(id:string, fields?: Array<string | object>): string {
    return buildDsl('getUsernameById', [{ key: 'id', value: id }], fields || ['username'])
}

export function workspace(id:string, fields?: Array<string | object>): string {
    return buildDsl('workspace', [{ key: 'id', value: id }], fields || ['id', 'name', 'username', 'createdAt', 'updatedAt'])
}

export function workspacesUser(fields?: Array<string | object>): string {
    return buildDsl('user_workspace', [], fields || ['id', 'name', 'username', 'createdAt', 'updatedAt'])
}

export function appPackages(fields?: Array<string | object>): string {
    return buildDsl('app_packages', [], fields || ['id', 'name', 'packageName', 'status', 'createdAt', 'updatedAt','description'])
}

export function appTemplates(fields?: Array<string | object>): string {
    return buildDsl('app_templates', [], fields || ['id', 'name', 'templateId', 'groupType'])
}

export function accounts(fields?: Array<string | object>): string {
    return buildDsl('accounts', [], fields || ['id', 'name', 'used', 'expireStartTime', 'expireEndTime', 'type','config'])
}

export function appMenuGroups(fields?: Array<string | object>): string {
    return buildDsl('app_menu_groups', [], fields || ['id', 'name'])
}

export function appMenus(id:string, fields?: Array<string | object>): string {
    return buildDsl('app_menus', [{ key: 'id', value: id }], fields || ['id', 'name', 'type', 'visible', 'createdAt', 'updatedAt'])
}

export function menusGroup(){
  
}
export function datasources(fields?: Array<string | object>): string {
    return buildDsl('datasources', [], fields || ['id', 'name', 'datasourceId', 'type','accountId','description'])
}

export function modelGroups(id?:any,fields?: Array<string | object>): string {
    return buildDsl('model_groups', [{ key:"id", value: id}], fields || ['id', 'name', 'code', 'parentId'])
}

export function modelsGroup(param?: QueryModel, fields?: Array<string | object>): string {
    return buildDsl('models_group', [{ key:"param", value: param || {}}], fields || ['id', 'name', 'type', 'modelId','description','datasourceId','traits','groupId','parentId'])
}

export function model(id:string, allField:boolean,fields?: Array<string | object>): string {
    return buildDsl('model', [{ key: 'id', value: id },{key:'allField',value:allField}], fields || ['id', 'name', 'type', 'modelId', 'datasourceId'])
}

export function modelGroupPath(id:string, fields?: Array<string | object>): string {
    return buildDsl('model_group_path', [{ key: 'id', value: id }], fields || ['id', 'name', 'code', 'parentId'])
}

export function modelTypes(param?: any, fields?: Array<string | object>): string {
    return buildDsl('model_types', [{ key:"param", value: param || {}}], fields || ['id', 'name', 'type', 'modelId', 'datasourceId', 'parentId'])
}


export function functionGroups(fields?: Array<string | object>): string {
    return buildDsl('function_groups', [], fields || ['id', 'name', 'code','parentId'])
}

export function functionPackages(param?: QueryFunctionPackage, fields?: Array<string | object>): string {
    return buildDsl('function_packages', [{ key:"param", value: param || {}}], fields || ['id', 'name', 'packageName', 'createdAt', 'updatedAt','description'])
}

export function methodFunctionPackage(param?: string, fields?: Array<string | object>): string {
    return buildDsl('method_function_package', [{ key:"id", value: param}], fields || ['id', 'name', 'packageName', 'createdAt', 'updatedAt','description'])
}

export function pageGroups(id?:string,fields?: Array<string | object>): string {
    return buildDsl('page_groups', [{ key:"id", value: id}], fields || ['id', 'name', 'code', 'type', 'parentId'])
}

export function pagePageGroups(id?:string,fields?: Array<string | object>): string {
    return buildDsl('page_group_paths', [{ key:"id", value: id}], fields || ['id', 'name', 'code', 'type', 'parentId'])
}


export function pages(id:string, fields?: Array<string | object>): string {
    return buildDsl('pages', [{ key: 'id', value: id }], fields || ['title', 'id', 'pageId', 'type', 'implType', 'parentId','traits'])
}

export function functionMethods(id:string, fields?: Array<string | object>): string {
    return buildDsl('function_methods', [{ key: 'id', value: id }], fields || ['id', 'name', 'external', 'inputModelId', 'returnModelId', 'traits', 'resultCount', 'path', 'inputRequired', 'packageId', 'type', 'implType', 'aggConfigs', 'callType','method'])
}

export function functionMethod(id:string, fields?: Array<string | object>): string {
    return buildDsl('function_method', [{ key: 'id', value: id }], fields || ['id','permissions', 'name', 'external', 'inputModelId', 'returnModelId', 'traits', 'resultCount', 'path', 'inputRequired', 'packageId', 'type', 'implType', 'aggConfigs', 'callType','method'])
}

export function page(id:string, fields?: Array<string | object>): string {
    return buildDsl('page', [{ key: 'id', value: id }], fields || ['name', 'id', 'pageId', 'type', 'implType', 'parentId','updatedAt'])
}


export function pageChildren(id:string, fields?: Array<string | object>): string {
    return buildDsl('page_children', [{ key: 'id', value: id }], fields || ['title', 'pageId', 'type', 'implType', 'parentId', 'groupId', 'id'])
}

export function appPackage(id: string, fields?: Array<string | object>): string {
    return buildDsl('app_package', [{ key: 'id', value: id }], fields || ['id', 'name', 'packageName', 'status', 'createdAt', 'updatedAt'])
}

export function pageTemplates(fields?: Array<string | object>): string {
    return buildDsl('page_templates', [], fields || ['componentGroup', 'platform', 'createdAt', 'updatedAt', 'id', 'images', 'published', 'type', 'group', 'templateId', 'userId', 'title', 'keywords','shortcutImg','config'])
}
  

export function pageTemplate(id:string, fields?: Array<string | object>): string {
    return buildDsl('page_template', [{ key: 'id', value: id }], fields || ['componentGroup', 'platform', 'createdAt', 'updatedAt', 'id', 'images', 'published', 'type', 'group', 'templateId', 'userId', 'title', 'keywords'])
  }

  export function menuGroups(fields?: Array<string | object>): string {
    return buildDsl('menu_groups', [], fields || ['id', 'name'])
  }
  
  export function groupMenus(id: string, fields?: Array<string | object>): string {
    return buildDsl('group_menus', [{ key: 'id', value: id }], fields || ['name', 'id', 'type', 'visible', 'createdAt', 'updatedAt','parentId','description','componentId','icon','orderNum','traits'])
  }

export function code(param, fields?: Array<string | object>): string {
  return buildDsl('code', [{ key:"param", value: param || {}}], fields || ['code'])
}

export function functionCode(param, fields?: Array<string | object>): string {
    return buildDsl('function_code', [{ key:"param", value: param || {}}], fields || ['code', 'updatedAt', 'language'])
  }
  

  export function codeParse(param, fields?: Array<string | object>): string {
    return buildDsl('code_parse', [{ key:"param", value: param || {}}], fields || ['code'])
  }


  export function flow(param, fields?: Array<string | object>): string {
    return buildDsl('flow', [{ key:"param", value: param || {}}], fields || ['config'])
  }
  
  export function log(param, fields?: Array<string | object>): string {
    return buildDsl('log', [{ key:"param", value: param || {}}], fields || ['success','startTime','endTime','timeout','content'])
  }

