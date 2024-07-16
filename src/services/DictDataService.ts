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