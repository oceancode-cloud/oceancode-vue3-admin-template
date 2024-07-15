<template>
  <div>
     <div >
       <div style="top:0px;right:15px;bottom:0px;left:0px;width:384.0px;height:122.0px;position:absolute;">
          <o-box :left="0.0" left-unit="px" :top="0.0" top-unit="px" :right="0.0" right-unit="px" :bottom="0.0" bottom-unit="px" >
            <o-form ref="Form1721051423453"></o-form>
          </o-box>
     </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useForm, } from '@oceancode/ocean-wui'

const props = defineProps({
  value:Object
})

const Form1721051423453 = useForm({
  props:{
    labelPlacement: 'left',
    size: 'medium',
  },
  formValue:props.value,
  items:[
    {
      label:'姓名',
      prop:'name',
      rules:{
        required:true,
        message:"姓名不能为空",
      },
      component:{
        name: 'input',
        attrs:{
          placeholder:"请输入姓名"
        },
      }
   },
    {
      label:'昵称',
      prop:'nickname',
      rules:{
        required:true,
        message:"昵称不能为空",
      },
      component:{
        name: 'input',
        attrs:{
          placeholder:"请输入昵称"
        },
      }
   },
    {
      label:'角色',
      prop:'roles',
      rules:{
        required:false,
        message:"",
      },
      component:{
        name: 'select',
      }
   },
    {
      label:'手机号',
      prop:'tel',
      rules:{
        required:false,
        message:"",
      },
      component:{
        name: 'input',
        attrs:{
          placeholder:"请输入手机号"
        },
      }
   },
    {
      label:'邮箱',
      prop:'email',
      rules:{
        required:false,
        message:"",
      },
      component:{
        name: 'input',
        attrs:{
          placeholder:"请输入邮箱"
        },
      }
   },
  ],
  on:{
    submit(params){
       console.log(params)
    }
  }
});
</script>
