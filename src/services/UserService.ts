export function userLogin(params){
  console.log(params)
  const data = {
    token:'123',
    userInfo:{
      username:'测试账号',
      nickname:'三月三',
      avatar:'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.sv'
    }
  }
  return Promise.resolve(data)
}

export function listUserGroup(){
  return Promise.resolve([
    {
      "label":"全部",
      "key":"all",
      "typeKey":"all",
      "children":[
        {
          "label":"测试",
          "key":"tester",
          "typeKey":"group",
          "children":[
            {
              "label":"管理",
              "key":"manager",
              "typeKey":"group"
            },
            {
              "label":"开发",
              "key":"develop",
              "typeKey":"group"
            }
          ]
        },
        {
          "label":"游客",
          "key":"geust",
          "typeKey":"group"
        }
      ]
    }
  ])
}

export function loadUserGroupContextmenu(){
  return Promise.resolve([
    {
      "label":"新增分组",
      "key":"add-group-form",
      "eventType":"open",
      "groups":["all","group"]
    },
    {
      "label":"新增成员",
      "key":"add-user-form",
      "eventType":"open",
      "groups":["group"]
    }
  ])
}

export function listUser(){
  return Promise.resolve([
    {
      "avatar":"https://show.cool-admin.com/api/public/uploads/20240125/57d6a9ebae7e4d7485a4129a2aa0beb8_a.webp",
      "username":"张三",
      "name":"张三",
      "nickname":"小张",
      "partName":"游客",
      "roles":"游客",
      "status":true,
      "tel":"13541741901",
      "remark":"游客",
      "created":1720938303857,
      "id":1
    }
  ])
}

export function updateUserStatusById(row){
  console.log(row)
  return Promise.resolve()
}

export function addUserGroup(params){
  return Promise.resolve()
}