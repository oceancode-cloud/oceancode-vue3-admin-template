<template>
  <div>
   <div style="position:absolute;left:0;right:0;bottom:0;top:0;overflow-y:auto">
     <div style="top:0px;right:15px;bottom:0px;left:0px;position:absolute;">

          <o-box  :left="206.8000030517578" left-unit="px" :top="37.0" top-unit="px" :width="92.0" >
            <o-tag :closable="false" :strong="false" :bordered="false" :round="false" size="medium"  :color="{color:'#67c23a',textColor:'#fff',}">
              标签
            </o-tag>
          </o-box>

          <o-box  :left="0.0" left-unit="px" :top="107.0" top-unit="px" :right="0.0" right-unit="px" :bottom="0.0" bottom-unit="px" :height="793.0" height-unit="px" >
            <o-data-table ref="Table1721532938794"></o-data-table>
          </o-box>
     </div>
    </div>
  </div>
</template>
<script setup>
import { useDataTable, } from '@oceancode/ocean-wui'
import { listMenu, } from '@/services'
import TypeField from './menu-list/TypeField.vue'

const Table1721532938794 = useDataTable({
  props:{
    rowKey:'id',
    childrenKey:'children',
    defaultExpandAll:true,
  },
  columns:[
    {
      title:'名称',
      key:'name',

      width: 209,
      ellipsis: true,
    },
    {
      title:'是否显示',
      key:'show',

      traits:['status',],
      width: 142,
    },
    {
      title:'类型',
      key:'type',

      width: 142,
      ellipsis: true,
      render: (row) => h(TypeField, { type:row.type,style:'position:relative' }),
    },
    {
      title:'节点路由',
      key:'router',

      width: 142,
      ellipsis: true,
    },
    {
      title:'路由缓存',
      key:'keepAlive',

      traits:['status',],
      width: 142,
    },
    {
      title:'文件路径',
      key:'file',

      width: 167,
      ellipsis: true,
    },
    {
      title:'权限',
      key:'auths',

      width: 92,
      ellipsis: true,
    },
    {
      title:'更新时间',
      key:'updated',

      traits:['timestamp',],
      width: 287,
    },
    {
      title:'排序号',
      key:'order',

      width: 117,
    },

  ],
  on:{
    load(params){            
      return listMenu(params)
    }
  }
});
</script>
