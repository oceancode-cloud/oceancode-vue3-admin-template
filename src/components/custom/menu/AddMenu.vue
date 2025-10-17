<template>
  <o-form ref="Form"></o-form>
</template>
<script setup>
import { defineProps,ref,h } from 'vue'
import { useForm, } from '@oceancode/ocean-wui'
import { MenuType } from 'ocean-admin-api/models/menu/MenuType'
import { addMenu } from 'ocean-admin-api/api/menu/AppMenuFunction'
import { PageSelect } from '@/components'
import { PageType } from 'ocean-admin-api/models/page/PageType'
import VisibleCom from './visible-config.vue'
// import { validatorWithRouterName } from '@/utils'
const props = defineProps({
  value: Object
})
const excludePages = ref([])
const Form = useForm({
 props:{
   labelPlacement: 'top',
   size: 'medium',
 },
 items:[
   {
     label:'名称',
     prop:'name',
     rules:{
       required:true,
       message:"名称不能为空",
     },
     component:{
       name: 'input',
       attrs:{
         placeholder:"请输入名称"
       },
     }
  },
  {
    label:'类型',
    prop:'type',
    value: MenuType.MenuType.MENU,
    component:{
      name:'select',
      options:MenuType.options()
    }
  },
  {
    label:'是否显示',
    prop:'visible',
    value:true,
    component:{
      render(param){
        return h(VisibleCom,{
          value: param,
          form:Form.value,
          onUpdateValue(val){
            param.visible = val
          },
          onPages(val){
            excludePages.value = val
          }
        })
      }
    }
  },
  // {
  //   label:'访问地址',
  //   prop:'path',
  //   show:(param)=>param.type===MenuType.MenuType.MENU,
  //   rules:{
  //     validator(value){
  //       const res = validatorWithRouterName(false,'访问地址不能为空',value)
  //       if(res){
  //         return new Error(res[0])
  //       }
  //     }
  //   }
  // },
  {
    label:'组件',
    prop:'componentId',
    show:(param)=>  param.type===MenuType.MenuType.MENU,
    component:{
      render(param){
        return h(PageSelect,{
          modelValue: param.componentId,
          types:[PageType.PageType.PAGE],
          onUpdateValue(val){
            param.componentId = val
          }
        })
      }
    }
    // component:{
    //   render(params){
    //     return h(DesignDialogPageTreeSelect,{
    //       modelValue:params.pageId,
    //       onUpdateValue(v){
    //         params.pageId = v
    //       }
    //     })
    //   }
    // }
  },
  {
    label:'排序',
    prop:'orderNum',
    value:0,
    component:{
      name:'input-number',
      props:{
        min:0
      }
    }
  },
  {
     label:'描述',
     prop:'description',
     component:{
       name: 'input',
       attrs:{
         type:"textarea"
       },
     }
  },
 ],
 on:{
   submit(params,option){
    if(props.value && props.value.id){
      params.parentId = props.value.id
    }else{
      params.groupId = props.value.groupId
    }
    params.excludePages = excludePages.value
    
     return addMenu(params)
   }
 }
});
</script>