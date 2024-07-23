<template>
  <div>
   <div style="position:absolute;left:0;right:0;bottom:0;top:0;overflow-y:auto">
     <div style="width:100vw;height:100vh;position:absolute;">

          <o-box  :left="0.0" left-unit="px" :top="0.0" top-unit="px" :right="0.0" right-unit="px" :bottom="0.0" bottom-unit="px" >
            <o-custom-sider-layout :menus="loadSystem">
              <template #header>
                <o-box :top="7.0" top-unit="px" :right="-12.4000244140625" right-unit="px" :width="60.0" width-unit="px" >
                  <o-user-dropdown :options="loadUserAvatarOptions"></o-user-dropdown>
                </o-box>
                <o-box :top="10.518518518518519" top-unit="px" :right="68.4666666666667" right-unit="px" :width="24.0" width-unit="px" :height="25.0" height-unit="px" >
                  <o-notice-icon  :value="123" color="#000" :dot="false" :size="24" ></o-notice-icon>
                </o-box>
              </template>
              <app-router-context></app-router-context>
            </o-custom-sider-layout>
          </o-box>
     </div>
    </div>
  </div>
</template>
<script setup>
import { loadSystem,loadUserAvatarOptions, } from '@/services'
</script>
