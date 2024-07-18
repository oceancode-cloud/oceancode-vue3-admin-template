<template>
  <div>
     <div >
       <div style="top:0px;right:15px;bottom:0px;left:0px;width:384.0px;height:122.0px;position:absolute;">
          <o-box :left="0.0" left-unit="px" :top="0.0" top-unit="px" :right="0.0" right-unit="px" :bottom="0.0" bottom-unit="px" >
            <o-form ref="Form1721136414691"></o-form>
          </o-box>
     </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { UserLoginRequest, } from '@/models/request'
import { useForm, } from '@oceancode/ocean-wui'
import { addDictGroup, } from '@/services'

const props = defineProps({
  param: {
    type: Object as PropType<UserLoginRequest>,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  value:Object
})

const Form1721136414691 = useForm({
  props:{
    labelPlacement: 'left',
    size: 'medium',
  },
  formValue:props.value,
  items:[
    {
      label:'名称',
      prop:'name',
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
        addDictGroup(params)
        .then(async(data)=>{
          resolve(data)
       }).catch(()=>reject())
     })
    }
  }
});
</script>
