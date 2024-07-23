<template>
  <div>
   <div >
     <div style="height:137.60000000000002px;width:100%;height:100%;position:absolute;">

          <o-box  :left="1.0" left-unit="px" :top="0.0" top-unit="px" :width="282.0" :height="80.0" height-unit="px" >
            <o-container :border-style="{
              }">
            <o-box  :left="13.347826086956502" left-unit="px" :top="11.65217391304347" top-unit="px" :width="75.0" >
              <o-text 
                text="总用户数"
                :lines="1"
                
                :font-weight= "400"
                color= "#000"
                text-align= "center"
                type= "text"
                :text-style="{
                fontSize: '14px',
              }"></o-text>
            </o-box>
            <o-box  :top="11.0" top-unit="px" :right="9.0" right-unit="px" :width="75.0" >
              <o-text 
                text="日同比"
                :lines="1"
                
                :font-weight= "400"
                color= "#000"
                text-align= "center"
                type= "text"
                :text-style="{
                fontSize: '14px',
              }"></o-text>
            </o-box>
            </o-container>
          </o-box>

          <o-box  :left="0.0" left-unit="px" :top="64.0" top-unit="px" :right="3.0" right-unit="px" :bottom="2.8421709430404007E-14" bottom-unit="px" :width="280.0" >
            <o-divider :dashed="false" title-placement="center" title-color="#999" >
              
            </o-divider>
          </o-box>
     </div>
    </div>
  </div>
</template>
<script setup>

const props = defineProps({
  total: {
    type: String,
    required: true
  },
  value:Object
})

</script>
