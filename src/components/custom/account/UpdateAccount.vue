<template>
  <o-form ref="Form"></o-form>
</template>
<script lang="ts" setup>
import { useForm, } from '@oceancode/ocean-wui'
import { NDatePicker } from 'naive-ui';
import { isAppType,showAuthorization,showHostField,showPortField,showAddressField,showUsernameField,showPasswordField,isDb, isToken } from './account'
import { h,defineProps } from 'vue'
import { PropType } from 'vue';
import { AccountType } from 'ocean-admin-api/models/account/AccountType';
import { updateAccountById } from 'ocean-admin-api/api/account/AccountFunction';
const props = defineProps({
  value: {
    type: Object as PropType<any>,
  }
})

const Form = useForm({
  props:{
    labelPlacement:'top'
  },
  formValue:props.value,
  items:[
    {
      label:'名称',
      prop:'name',
      rules:{
        required:true,
        message:'名称不能为空'
      }
    },
    {
      label:'类型',
      prop:'type',
      component:{
        name:'select',
        options: AccountType.options(),
        props:{
          disabled: true
        }
      },
      rules:{
        required:true,
        message:'类型不能为空'
      }
    },
    {
      label:'登录账号',
      prop:'config.username',
      show: isToken,
      rules:{
        required:true,
        type:'string',
        message:'账号不能为空'
      },
    },
    {
      label:'令牌',
      prop:'config.authorization',
      component:{
        name: 'input',
        attrs:{
          type:'textarea'
        }
      },
      rules:{
        required:true,
        message:'Authorization不能为空'
      },
      show: showAuthorization,
    },
    {
      label:'接口地址',
      prop:'config.api',
      component:{
        name: 'input',
        attrs:{
          type:'textarea'
        }
      },
      rules:{
        required:true,
        message:'地址不能为空'
      },
      show: showAuthorization,
    },
    // {
    //   label:'集群',
    //   prop:'config.cluster',
    //   value: false,
    //   component:{
    //     name:'switch'
    //   }
    // },
    {
      label:'地址',
      prop:'config.address',
      show:showAddressField,
      rules:{
        required:true,
        message:'地址地址不能为空'
      }
    },
    {
      label:'主机地址',
      prop:'config.host',
      show:showHostField,
      rules:{
        required:true,
        message:'主机地址不能为空'
      }
    },
    {
      label:'端口号',
      prop:'config.port',
      show:showPortField,
      component:{
        name:'input-number',
        props:{
          min:0
        }
      },
      rules:{
        required:true,
        type:'number',
        message:'端口号不能为空'
      }
    },
    {
      label:'登录账号',
      prop:'config.username',
      show:showUsernameField,
    },
    {
      label:'登录密码',
      prop:'config.password',
      show:showPasswordField,
    },
    {
      label:'数据库',
      prop:'config.database',
      show:isDb,
      rules:{
        required:true,
        message:'数据库不能为空'
      }
    },
    {
      label:'是否启用',
      prop:'used',
      value: false,
      component:{
        name:'switch'
      }
    },
    {
      label:'授权地址',
      prop:'config.url',
      component:{
        name: 'input',
        attrs:{
          type:'textarea'
        }
      },
      rules:{
        required:true,
        message:'授权地址不能为空'
      },
      show: isAppType,
    },
    {
      label:'AccessTokenUrl',
      prop:'config.accessTokenUrl',
      component:{
        name: 'input',
        attrs:{
          type:'textarea'
        }
      },
      rules:{
        required:true,
        message:'Access Token Url不能为空'
      },
      show: isAppType,
    },
    {
      label:'Client ID',
      prop:'config.clientId',
      component:{
        name: 'input',
      },
      rules:{
        required:true,
        message:'Client ID不能为空'
      },
      show: isAppType,
    },
    {
      label:'回调地址',
      prop:'config.redirectUrl',
      component:{
        name: 'input',
      },
      rules:{
        required:true,
        message:'回调地址不能为空'
      },
      show: isAppType,
    },
    {
      label:'返回类型',
      prop:'config.responseType',
      value:'code',
      component:{
        name: 'input',
      },
      show: isAppType,
    },
    {
      label:'业务编码',
      prop:'config.state',
      component:{
        name: 'input',
      },
      show: isAppType,
    },
    {
      label:'授权范围',
      prop:'config.scope',
      component:{
        name: 'input',
        attrs:{
          type:'textarea'
        }
      },
      show: isAppType,
    },
    {
      label:'启用时间',
      prop:'expireStartTime',
      component:{
        render(param){
          let expireStartTime = Number(param.expireStartTime)
          if(expireStartTime<=0 || !expireStartTime){
            expireStartTime = null;
          }
          return h(NDatePicker,{
            type:"datetime",
            clearable:true,
            defaultValue:expireStartTime!=-1 ? expireStartTime : null,
            onUpdateValue(val){
              param.expireStartTime = val
            }
          })
        }
      }
    },
    {
      label:'失效时间',
      prop:'expireEndTime',
      component:{
        render(param){
          let expireEndTime = Number(param.expireEndTime)
          if(expireEndTime<=0 || !expireEndTime){
            expireEndTime = null;
          }
          return h(NDatePicker,{
            type:"datetime",
            clearable:true,
            defaultValue:expireEndTime!=-1?expireEndTime:null,
            isDateDisabled(ts){
              return ts<param.expireStartTime
            },
            onUpdateValue(val){
              param.expireEndTime = val
            }
          })
        }
      }
    },
    {
      label:'描述',
      prop:'description',
      component:{
        name:'input',
        attrs:{
          type:'textarea'
        }
      }
    }
  ],
  on:{
    submit(params){
      return updateAccountById({...params,id:props.value.id})
    }
  }
})
</script>