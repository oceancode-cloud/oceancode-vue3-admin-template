export function validatorWithArtifactId(required:boolean,message: string,value:any){
  if(required){
    if(!value && value!=0 && value!=false){
      return new Error(message)
    }
  }
  if (!/^[a-z]{1}[a-zA-Z0-9-]{2,30}$/.test(value)) {
      return new Error("只能包含小写字母，数字，中划线，且以字母开头");
  }
}


export function validatorWithIp(required:boolean,message: string,value:any) {
  const pattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(?!$)|$)){4}$/
  if(required){
    if(!value && value!=0 && value!=false){
      return new Error(message)
    }
  }
  if(!pattern.test(value)){
    return new Error('IP地址非法')
  }
}