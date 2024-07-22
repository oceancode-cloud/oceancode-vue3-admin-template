<template>
  <div>
   <div style="position:absolute;left:0;right:0;bottom:0;top:0;overflow-y:auto">
     <div style="top:0px;right:15px;bottom:0px;left:0px;position:absolute;">
      <o-data-list :x-gap="8" :y-gap="8" preset="grid" :data="statisticData" :cols="4" :item-width="304.0" :item-responsive="false">
        <template #default="{option}">
          <o-box  :absolute="false" :width="100" width-unit="%" :height="150.0" height-unit="px" >
            <o-container :border-style="{
                background: '#ffffff',
              borderTopLeftRadius: '6px',
              borderTopRightRadius: '6px',
              borderBottomLeftRadius: '6px',
              borderBottomRightRadius: '6px',
            }">
            <o-box  :left="10.0" left-unit="px" :top="11.195121951219523" top-unit="px" >
              <o-text 
                :text="option.label"
                :lines="1"
                
                :font-weight= "400"
                color= "#000"
                text-align= "left"
                type= "text"
                :text-style="{
                fontSize: '12px',
              }"></o-text>
            </o-box>
            <o-box  :left="62.292682926829244" left-unit="px" :top="6.53658536585365" top-unit="px" >
              <o-text 
                :text="option.count"
                :lines="1"
                
                :font-weight= "700"
                color= "#000"
                text-align= "left"
                type= "text"
                :text-style="{
                fontSize: '18px',
              }"></o-text>
            </o-box>
            <o-box  :left="10.0" left-unit="px" :top="37.47" top-unit="px" :height="75.26" height-unit="px" >
              <component :is="UserCard" v-if="option.type==='user-total'" :total="option.total"></component>
              <component :is="VisitCard" v-else-if="option.type==='visit-count'"></component>
            </o-box>
            <o-box  :left="10.0" left-unit="px" :top="122.0" top-unit="px" >
              <o-text 
                text="日增用户数"
                :lines="1"
                
                :font-weight= "400"
                color= "#252b3a"
                text-align= "left"
                type= "text"
                :text-style="{
                fontSize: '12px',
              }"></o-text>
            </o-box>
            <o-box  :left="77.47826086956522" left-unit="px" :top="122.0" top-unit="px" >
              <o-text 
                text="69"
                :lines="1"
                
                :font-weight= "400"
                color= "#000"
                text-align= "left"
                type= "text"
                :text-style="{
                fontSize: '12px',
              }"></o-text>
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
import { statisticData, } from '@/services'
import UserCard from './dashoard/UserCard.vue'
import VisitCard from './dashoard/VisitCard.vue'

</script>
