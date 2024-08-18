<template>
  <div>
   <div style="position:absolute;left:0;right:0;bottom:0;top:0;overflow-y:auto">
     <div style="width:100vw;height:100vh;background-image:url();background-size:cover;background-position:center;width:100vw;height:100vh;position:absolute;">

          <o-box  :left="60.0" left-unit="px" :top="0.0" top-unit="px" :right="0.0" right-unit="px" :bottom="0.0" bottom-unit="px" :width="1380.0" width-unit="px" >
            <app-router-context></app-router-context>
          </o-box>

          <o-box  :left="0.0" left-unit="px" :top="0.0" top-unit="px" :bottom="0.0" bottom-unit="px" :width="60.0" width-unit="px" >
            <o-container :border-style="{
                background: 'linear-gradient(179deg,rgba(233,251,255,1) 0%,rgba(243,245,255,1) 100%)',
              borderTopLeftRadius: '0px',
              borderTopRightRadius: '0px',
              borderBottomLeftRadius: '0px',
              borderBottomRightRadius: '0px',
            }">
            <o-box  :left="12.0" left-unit="px" :top="14.666666666666657" top-unit="px" :width="32.0" width-unit="px" :height="32.0" height-unit="px" >
              <o-image
                src="https://devui.design/favicon.ico" 
                
                width="32" 
                height="32">
              </o-image>
            </o-box>
            <o-box  :left="3.996666666666666" left-unit="px" :top="49.33666666666667" top-unit="px" :width="51.67" width-unit="px" >
              <o-text 
                text="DevUI"
                :lines="1"
                
                font-weight= "600"
                color= "#252b3a"
                text-align= "center"
                type= "text"
                :text-style="{
                fontSize: '14px',
              }"></o-text>
            </o-box>
            <o-box  :left="8.235294117647015" left-unit="px" :top="80.00000000000003" top-unit="px" :width="36.0" width-unit="px" :height="36.0" height-unit="px" >
              <o-container :border-style="{
                  borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
              }">
              <o-box  :left="8.705875172334594" left-unit="px" :top="9.999999999999943" top-unit="px" :width="18.0" width-unit="px" :height="18.0" height-unit="px" >
                <o-app-gitee-icon  :size="18" :center="true" color="#d81e06" ></o-app-gitee-icon>
              </o-box>
              </o-container>
            </o-box>
            </o-container>
          </o-box>
     </div>
    </div>
  </div>
</template>
<script setup>
</script>
