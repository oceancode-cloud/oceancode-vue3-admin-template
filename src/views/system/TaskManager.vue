<template>
  <div>
   <div style="position:absolute;left:0;right:0;bottom:0;top:0;overflow-y:auto">
     <div style="top:0px;right:0px;bottom:0px;left:0px;position:absolute;">
      <o-data-list :x-gap="8" :y-gap="8" preset="grid" :data="listTask" :cols="4" :item-width="350.0" :item-responsive="false">
        <template #default="{option}">
          <o-box  :absolute="false" :width="100" width-unit="%" :height="200.0" height-unit="px" >
            <o-container :border-style="{
                background: 'rgba(255,255,255,1)',
              borderTopLeftRadius: '0px',
              borderTopRightRadius: '0px',
              borderBottomLeftRadius: '0px',
              borderBottomRightRadius: '0px',
            }">
            <o-box  :left="18.0" left-unit="px" :top="15.59999942779541" top-unit="px" :right="17.0" right-unit="px" >
              <o-text 
                :text="option.name"
                :lines="1"
                
                :font-weight= "700"
                color= "#000"
                text-align= "left"
                type= "text"
                :text-style="{
                fontSize: '17px',
              }"></o-text>
            </o-box>
            <o-box  :left="18.0" left-unit="px" :top="51.59999942779541" top-unit="px" >
              <o-text 
                text="执行服务"
                :lines="1"
                
                :font-weight= "400"
                color= "rgba(144,147,153,1)"
                text-align= "left"
                type= "text"
                :text-style="{
                fontSize: '12px',
              }"></o-text>
            </o-box>
            <o-box  :left="17.0" left-unit="px" :top="105.59999942779541" top-unit="px" >
              <o-text 
                text="文本"
                :lines="1"
                
                :font-weight= "400"
                color= "#71757f"
                text-align= "left"
                type= "text"
                :text-style="{
                fontSize: '12px',
              }"></o-text>
            </o-box>
            <o-box  :left="18.0" left-unit="px" :top="75.59999942779541" top-unit="px" >
              <o-text 
                :text="option.method"
                :lines="1"
                
                :font-weight= "400"
                color= "#000"
                text-align= "left"
                type= "text"
                :text-style="{
                fontSize: '14px',
              }"></o-text>
            </o-box>
            <o-box  :left="18.0" left-unit="px" :top="126.59999942779541" top-unit="px" >
              <o-text 
                :text="option.corn"
                :lines="1"
                
                :font-weight= "400"
                color= "#000"
                text-align= "left"
                type= "text"
                :text-style="{
                fontSize: '14px',
              }"></o-text>
            </o-box>
            <o-box  :left="13.0" left-unit="px" :top="165.5999994277954" top-unit="px" >
              <o-button color="rgb(245, 108, 108)" size="small" :block="true"   :on-click="()=>startOrStopTask(option)">
                已停止
              </o-button>
            </o-box>
            <o-box  :left="85.0" left-unit="px" :top="168.5999994277954" top-unit="px" :height="18.0" height-unit="px" >
              <o-run-icon @click="()=>startOrStopTask(option)" :size="18" :center="true" color="rgba(65,101,215,1)" ></o-run-icon>
            </o-box>
            <o-box  :top="166.5999994277954" top-unit="px" :right="29.0" right-unit="px" :height="18.0" height-unit="px" >
              <o-delete-icon :on-delete="()=>deleteTaskById(option)" :size="18" :center="true" color="rgba(245,108,108,1)" ></o-delete-icon>
            </o-box>
            </o-container>
          </o-box>
        </template>
      </o-data-list>
     </div>
    </div>
  </div>
</template>
<script setup>
import { listTask,deleteTaskById,startOrStopTask, } from '@/services'
</script>
