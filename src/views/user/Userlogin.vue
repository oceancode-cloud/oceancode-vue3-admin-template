<template>
  <div>
     <div style="position:absolute;left:0;right:0;bottom:0;top:0;overflow-y:auto">
       <div style="top:0px;right:0px;bottom:0px;left:0px;position:absolute;">
          <o-box :left="36.666666666666664" left-unit="%" :top="78.18181818181822" top-unit="px" :width="384.0" >
            <o-text 
              text="用户登录"
              color= "#252b3a"
              :font-weight= "700"
              text-align= "center"
              :text-style="{
              fontSize: '30px',
            }"></o-text>
          </o-box>
          <o-box :left="36.666666666666664" left-unit="%" :top="134.0" top-unit="px" :width="384.0" >
            <o-text 
              text="全端代码生成解决方案"
              color= "#71757f"
              :font-weight= "300"
              text-align= "center"
              :text-style="{
              fontSize: '12px',
            }"></o-text>
          </o-box>
          <o-box :left="36.666666666666664" left-unit="%" :top="168.0" top-unit="px" :width="384.0" :height="122.0" height-unit="px" >
            <o-form ref="Form1720928330467"></o-form>
          </o-box>
          <o-box :left="36.593567251461984" left-unit="%" :top="322.2105263157895" top-unit="px" :width="384.0" >
            <o-login-button type="primary" size="large" :block="true"  >
              登录
            </o-login-button>
          </o-box>
     </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useForm,useUser,useRouter, } from '@oceancode/ocean-wui'
import { userLogin, } from '@/services'
const user = useUser()
const router = useRouter()
const Form1720928330467 = useForm({
  props:{
    labelPlacement: 'left',
    size: 'medium',
  },
  items:[
    {
      label:'用户名',
      prop:'username',
      showLabel:false,
      component:{
        name: 'username-input',
      }
   },
    {
      label:'登录密码',
      prop:'password',
      showLabel:false,
      component:{
        name: 'password-input',
      }
   },
  ],
  on:{
    submit(params){
      return new Promise((resolve,reject)=>{
        userLogin(params)
        .then(async(data)=>{
           user.setLoginResponse(data)
           await user.refreshPermission()
           router.toHome()
          resolve(data)
       }).catch(()=>reject())
     })
    }
  }
});
</script>
