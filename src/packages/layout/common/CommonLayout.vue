<template>
  <o-context>
     <div style="position:absolute;left:0;right:0;bottom:0;top:0;overflow-y:auto">
       <div style="top:0px;right:15px;bottom:0px;left:0px;position:absolute;">
          <o-box :left="0.0" left-unit="px" :top="0.0" top-unit="px" :right="0.0" right-unit="px" :bottom="0.0" bottom-unit="px" >
            <o-custom-sider-layout :menus="loadSystem">
              <template #header>
              </template>
              <app-router-context></app-router-context>
            </o-custom-sider-layout>
          </o-box>
     </div>
    </div>
  </o-context>
</template>
<script lang="ts" setup>
import { loadSystem, } from '@/services'


</script>
