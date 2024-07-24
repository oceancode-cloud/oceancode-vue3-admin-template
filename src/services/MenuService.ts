export function listMenu(){
  return [
    {
      id:1,
      name:'首页',
      children:[
        {
          id:2,
          name:'用户列表'
        }
      ]
    }
  ]
}

export function showMenuAddField(row){
  return row.children && row.children.length > 0
}