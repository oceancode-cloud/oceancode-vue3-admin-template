<template>
  <div>
     <div >
       <div style="top:0px;right:15px;bottom:0px;left:0px;width:384.0px;height:122.0px;position:absolute;">
          <o-box :left="0.0" left-unit="px" :top="0.0" top-unit="px" :right="0.0" right-unit="px" :bottom="0.0" bottom-unit="px" >
            <o-form ref="Form1720948469189"></o-form>
          </o-box>
     </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useForm, } from '@oceancode/ocean-wui'
import { addUserGroup, } from '@/services'


const Form1720948469189 = useForm({
  props:{
    labelPlacement: 'left',
    size: 'medium',
  },
  items:[
    {
      label:'分组名称',
      prop:'name',
      rules:{
        required:true,
        message:"分组名称不能为空",
      },
      component:{
        name: 'input',
        attrs:{
          placeholder:"请输入名称"
        },
      }
   },
  ],
  on:{
    submit(params){
      return new Promise((resolve,reject)=>{
        addUserGroup(params)
        .then(async(data)=>{
          resolve(data)
       }).catch(()=>reject())
     })
    }
  }
});
</script>
