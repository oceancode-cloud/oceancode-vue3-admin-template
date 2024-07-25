export function deleteConfigById(row){
  console.log('deleteConfigById',row)
  console.log(window['$t']('errorCode','biz_client_already_exists'))
  console.log(window['$checkPermission']('user',['add','delete']))
  return Promise.resolve()
}

export function listConfig(params){
  console.log('listConfig',params)
  
  return [
    {
      id:1,
      name:'文件',
      keyName:'file',
      dataType:'File',
      remark:null
    }
  ]
}

export function listConfigDataTypeDict(){
  return [
    {
      label:'文件',
      value:'file'
    },
    {
      label:'字符串',
      value:'String'
    }
  ]
}