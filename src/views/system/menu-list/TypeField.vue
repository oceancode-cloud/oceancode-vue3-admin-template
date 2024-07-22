<template>
  <div style="position:relative">
   <div style="position:relative">
     <div style="top:0px;right:0px;bottom:0px;left:0px;width:92.0px;height:23.0px;position:absolute;">

          <o-box  :left="0.0" left-unit="px" :top="0.0" top-unit="px" :right="0.0" right-unit="px" :bottom="0.0" bottom-unit="px" >
            <o-tag :closable="false" :strong="false" :bordered="false" :round="false" size="medium"  :color="{color:'#e6a23c',textColor:'#fff',}">
              标签
            </o-tag>
          </o-box>
     </div>
    </div>
  </div>
</template>
<script setup>

const props = defineProps({
  type: {
    type: String,
    required: true
  },
  value:Object
})

</script>
