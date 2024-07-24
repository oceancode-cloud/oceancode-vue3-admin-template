<template>
  <div>
   <div >
     <div style="height:122.0px;width:100%;height:100%;position:absolute;">

          <o-box  :left="0.0" left-unit="px" :top="0.0" top-unit="px" :right="0.0" right-unit="px" :bottom="0.0" bottom-unit="px" >
            <o-form ref="Form1721777923219"></o-form>
          </o-box>
     </div>
    </div>
  </div>
</template>
<script setup>
import { useForm, } from '@oceancode/ocean-wui'

const props = defineProps({
  value:Object
})

const Form1721777923219 = useForm({
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
