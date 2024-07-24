<template>
  <div>
   <div style="position:absolute;left:0;right:0;bottom:0;top:0;overflow-y:auto">
     <div style="top:0px;right:15px;bottom:0px;left:0px;position:absolute;">

          <o-box  :left="79.0" left-unit="px" :top="61.0" top-unit="px" :width="62.0" width-unit="px" >
            <o-add-button type="primary" size="medium" :block="true"  action="add-menu-form" >
              新增
            </o-add-button>
          </o-box>

          <o-box  :left="0.0" left-unit="px" :top="61.0" top-unit="px" :width="65.0" width-unit="px" >
            <o-refresh-button type="default" size="medium" :block="true"   >
              刷新
            </o-refresh-button>
          </o-box>

          <o-box  :left="0.0" left-unit="px" :top="107.0" top-unit="px" :right="0.0" right-unit="px" :bottom="0.0" bottom-unit="px" :height="793.0" height-unit="px" >
            <o-data-table ref="Table1721532938794"></o-data-table>
          </o-box>
        <o-dialog title="标题" action="add-menu-form" :width="444" :height="202" :overflow="false">
          <template #default="{options}">
            <AddMenuForm :value="options"></AddMenuForm>
          </template>
        </o-dialog>
        <o-dialog title="标题" action="edit-menu-form" :width="444" :height="202" :overflow="false">
          <template #default="{options}">
            <EditMenuForm :value="options"></EditMenuForm>
          </template>
        </o-dialog>
     </div>
    </div>
  </div>
</template>
<script setup>
import { useDataTable,useForm, } from '@oceancode/ocean-wui'
import { showMenuAddField,listMenu, } from '@/services'
import TypeField from './menu-list/TypeField.vue'
import AddMenuForm from './menu-list/AddMenuForm.vue'
import EditMenuForm from './menu-list/EditMenuForm.vue'

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
    },
    {
      title:'类型',
      key:'type',

      ellipsis: true,
      render: (row) => h(TypeField, { type:row.type,style:'position:relative' }),
    },
    {
      title:'节点路由',
      key:'router',

      ellipsis: true,
    },
    {
      title:'路由缓存',
      key:'keepAlive',

      traits:['status',],
    },
    {
      title:'文件路径',
      key:'file',

      ellipsis: true,
    },
    {
      title:'权限',
      key:'auths',

      ellipsis: true,
    },
    {
      title:'更新时间',
      key:'updated',

      traits:['timestamp',],
    },
    {
      title:'排序号',
      key:'order',

    },
    {
      title:'操作',
      type:'action',
       actions:[
         {
           type:'add',
           action:'add-menu-form',
           text:'新增',
           show: (row) => showMenuAddField(row),
         },
         {
           type:'edit',
           action:'edit-menu-form',
           text:'编辑',
         },
       ]
    }
  ],
  on:{
    load(params){            
      return listMenu(params)
    }
  }
});
</script>
