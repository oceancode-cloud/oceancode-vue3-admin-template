<template>
  <div>
     <div style="position:absolute;left:0;right:0;bottom:0;top:0;overflow-y:auto">
       <div style="top:0px;right:15px;bottom:0px;left:0px;background-color:rgba(255,255,255,1);position:absolute;">
          <o-box :left="0.0" left-unit="px" :top="0.0" top-unit="px" :bottom="0.0" bottom-unit="px" :width="300.0" >
            <o-group-tree :data='listUserGroup'  :on-load-contextmenu="loadUserGroupContextmenu" title="用户分组" key-field="key" label-field="label" :default-expand-all="true" :default-expanded-keys="[]" >
            </o-group-tree>
          </o-box>
          <o-box :left="301.0" left-unit="px" :top="66.25" top-unit="px" :right="1.5" right-unit="px" :bottom="0.0" bottom-unit="px" :width="1137.5" :height="833.75" height-unit="px" >
            <o-data-table ref="Table1720936699405"></o-data-table>
          </o-box>
        <o-dialog title="新增分组" action="add-group-form" :width="444" :height="202" :overflow="false">
            <AddGroupForm></AddGroupForm>
        </o-dialog>
     </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useDataTable,useForm, } from '@oceancode/ocean-wui'
import { listUser,updateUserStatusById,listUserGroup,loadUserGroupContextmenu,addUserGroup, } from '@/services'
import AddGroupForm from './user-list/AddGroupForm.vue'


const Table1720936699405 = useDataTable({
  columns:[
    {
      title:'头像',
      key:'avatar',

      traits:['avatar',]
    },
    {
      title:'用户名',
      key:'username',

    },
    {
      title:'昵称',
      key:'nickname',

    },
    {
      title:'部门名称',
      key:'partName',

    },
    {
      title:'角色',
      key:'roles',

      traits:['tags',]
    },
    {
      title:'状态',
      key:'status',
      onClick(row){
        return updateUserStatusById(row)
      },
      traits:['status',]
    },
    {
      title:'手机号码',
      key:'tel',

    },
    {
      title:'备注',
      key:'remark',

    },
    {
      title:'创建时间',
      key:'created',

      traits:['timestamp',]
    },

  ],
  on:{
    load(params){            
      return listUser()
    }
  }
});
</script>
