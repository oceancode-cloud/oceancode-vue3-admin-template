<template>
  <div>
   <div style="position:absolute;left:0;right:0;bottom:0;top:0;overflow-y:auto">
     <div style="width:100vw;height:100vh;position:absolute;">

          <o-box  :top="66.0" top-unit="px" :right="0.0" right-unit="px" :width="300.0" width-unit="px" >
            <o-search-input size="medium" search-text="搜索" value-field="name" :on-click-search="true" placeholder="请输入名称" ></o-search-input>
          </o-box>

          <o-box  :left="75.0" left-unit="px" :top="66.0" top-unit="px" :width="65.0" width-unit="px" >
            <o-add-button type="primary" size="medium" :block="true"  action="add-role-form" >
              新增
            </o-add-button>
          </o-box>

          <o-box  :left="0.0" left-unit="px" :top="66.0" top-unit="px" :width="60.0" width-unit="px" >
            <o-refresh-button type="default" size="medium" :block="true"   >
              刷新
            </o-refresh-button>
          </o-box>

          <o-box  :left="0.0" left-unit="px" :top="118.0" top-unit="px" :right="0.0" right-unit="px" :height="276.0" height-unit="px" >
            <o-data-table ref="Table1721778022473"></o-data-table>
          </o-box>
        <o-dialog title="编辑角色" action="edit-role-form" :width="444" :height="202" :overflow="false">
          <template #default="{options}">
            <EditRoleForm :value="options"></EditRoleForm>
          </template>
        </o-dialog>
        <o-dialog title="新增角色" action="add-role-form" :width="444" :height="202" :overflow="false">
          <template #default="{options}">
            <AddRoleForm :value="options"></AddRoleForm>
          </template>
        </o-dialog>
     </div>
    </div>
  </div>
</template>
<script setup>
import { useDataTable,useForm, } from '@oceancode/ocean-wui'
import { deleteRoleById,listRole, } from '@/services'
import EditRoleForm from './role-list/EditRoleForm.vue'
import AddRoleForm from './role-list/AddRoleForm.vue'

const Table1721778022473 = useDataTable({  columns:[
    {
      title:'名称',
      key:'name',

    },
    {
      title:'标识',
      key:'code',

    },
    {
      title:'备注',
      key:'remark',

    },
    {
      title:'创建时间',
      key:'created',

      traits:['timestamp',],
    },
    {
      title:'更新时间',
      key:'updated',

      traits:['timestamp',],
    },
    {
      title:'操作',
      type:'action',
       actions:[
         {
           type:'edit',
           action:'edit-role-form',
           text:'编辑',
         },
         {
           type:'delete',
           text:'删除',
           onClick(row){
             return deleteRoleById(row)
           },
         },
       ]
    }
  ],
  on:{
    load(params){            
      return listRole(params)
    }
  }
});
</script>
