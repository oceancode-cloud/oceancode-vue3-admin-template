import { ResourcePermission } from '@oceancode/ocean-wui'

export function listUserPermission():ResourcePermission{
  return Promise.resolve([])
}

export function loadSystem(){
  return Promise.resolve([
    {
      "label":"权限管理",
      "key":"sys_mgr",
      "layoutVisible":{
        "menu":true
      },
      "children":[
        {
          "label":"用户列表",
          "key":"user_list"
        },
        {
          "label":"菜单列表",
          "key":"menu_list",
          "router":{
            "name":"userList"
          }
        }
      ]
    }
  ])
}