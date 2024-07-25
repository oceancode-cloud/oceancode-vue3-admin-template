export function listDict(params){
  console.log('listDict',params)
  return [
    {
      id:1,
      value:'http://www.a.com',
      remark:'',
      created:new Date().getTime(),
      updated:new Date().getTime(),
      sort:1
    }
  ]
}
export function loadDictGroup(){
  return [
    {
      "label":"品牌 - branche",
      "key":"branche",
      "value":{
        "id":1
      }
    },
    {
      "label":"职业 - occupation",
      "key":"occupation",
      "value":{
        "id":2
      }
    }
  ]
}

export function addDictGroup(params){
  console.log('addDictGroup',params)
  return Promise.resolve()
}
export function deleteDictById(row){
  console.log('deleteDictById',row)
  return Promise.resolve()
}