<template>
  <div>
   <div >
     <div style="top:0px;right:15px;bottom:0px;left:0px;width:384.0px;height:122.0px;position:absolute;">

          <o-box  :left="0.0" left-unit="px" :top="0.0" top-unit="px" :right="0.0" right-unit="px" :bottom="0.0" bottom-unit="px" >
            <o-form ref="Form1721472134802"></o-form>
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

const Form1721472134802 = useForm({
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
       console.log(params)
    }
  }
});
</script>
