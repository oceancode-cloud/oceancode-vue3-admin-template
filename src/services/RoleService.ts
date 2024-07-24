export function deleteRoleById(row){
  return Promise.resolve()
}

export function listRole(){
  return [
    {
      name:'游客',
      code:'text',
      remark:null,
      created: new Date().getTime(),
      updated: new Date().getTime()
    }
  ]
}