<template>
  <div>
   <div style="position:absolute;left:0;right:0;bottom:0;top:0;overflow-y:auto">
     <div style="top:0px;right:15px;bottom:0px;left:0px;position:absolute;">

          <o-box  :left="155.0" left-unit="px" :top="9.0" top-unit="px" :width="306.0" width-unit="px" :height="45.0" height-unit="px" >
            <o-query>
              <template #default="{option}">
                <o-box :top="7.0" top-unit="px" :right="51.0" right-unit="px" :width="157.0" width-unit="px" >
                  <o-input-number v-model="option.username" size="medium" :clearable="true" :show-button="true" :min="0" :setp="1"  placeholder="请输入" >
                  </o-input-number>
                </o-box>
              <o-box :left="4.0" left-unit="px" :top="12.0" top-unit="px" :width="93.0" width-unit="px" >
                  <o-text 
                    text="日志保存天数"
                    :lines="1"
                    
                    :font-weight= "400"
                    color= "#000"
                    text-align= "center"
                    type= "text"
                    :text-style="{
                    fontSize: '14px',
                  }"></o-text>
                </o-box>
              </template>
            </o-query>
          </o-box>

          <o-box  :top="16.0" top-unit="px" :right="0.0" right-unit="px" :width="300.0" width-unit="px" >
            <o-search-input size="medium" search-text="搜索" value-field="name" :on-click-search="true" placeholder="搜索请求地址、ip、ip地址" ></o-search-input>
          </o-box>

          <o-box  :left="77.0" left-unit="px" :top="16.0" top-unit="px" :width="69.0" width-unit="px" >
            <o-button color="rgb(245, 108, 108)" size="medium" :block="true"   :on-click="()=>clearLog()">
              清空
            </o-button>
          </o-box>

          <o-box  :left="0.0" left-unit="px" :top="17.0" top-unit="px" :width="67.0" width-unit="px" >
            <o-refresh-button type="default" size="medium" :block="true"   >
              刷新
            </o-refresh-button>
          </o-box>

          <o-box  :left="0.0" left-unit="px" :top="63.0" top-unit="px" :right="0.0" right-unit="px" :height="276.0" height-unit="px" >
            <o-data-table ref="Table1721918953125"></o-data-table>
          </o-box>
     </div>
    </div>
  </div>
</template>
<script setup>
import { useDataTable, } from '@oceancode/ocean-wui'
import { listLog,clearLog, } from '@/services'
const Table1721918953125 = useDataTable({  columns:[
    {
      title:'用户ID',
      key:'userId',

      width: 100,
    },
    {
      title:'用户昵称',
      key:'nickname',

      width: 100,      ellipsis: true,
    },
    {
      title:'请求地址',
      key:'url',

    },
    {
      title:'参数',
      key:'params',

    },
    {
      title:'IP',
      key:'ip',

      width: 100,      ellipsis: true,
    },
    {
      title:'IP地址',
      key:'ipAddress',

      width: 100,      ellipsis: true,
    },
    {
      title:'请求时间',
      key:'created',

      traits:['timestamp',],
    },

  ],
  on:{
    load(params){            
      return listLog(params)
    }
  }
});
</script>
