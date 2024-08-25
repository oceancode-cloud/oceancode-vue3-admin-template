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