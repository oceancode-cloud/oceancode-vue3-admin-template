<template>
  <div>
     <div style="position:absolute;left:0;right:0;bottom:0;top:0;overflow-y:auto">
       <div style="top:0px;right:15px;bottom:0px;left:0px;background-color:rgba(255,255,255,1);position:absolute;">
          <o-box :left="0.0" left-unit="px" :top="0.0" top-unit="px" :bottom="0.0" bottom-unit="px" :width="300.0" >
            <o-group-tree :data='listUserGroup'  :on-load-contextmenu="loadUserGroupContextmenu" action="add-group-form" title="分组名称" key-field="key" label-field="label" :default-expand-all="true" :default-expanded-keys="[]" >
            </o-group-tree>
          </o-box>
          <o-box :left="309.0" left-unit="px" :top="21.0" top-unit="px" :width="99.0" >
            <o-add-button type="primary" size="medium" :block="true"  action="add-group-form">
              新增
            </o-add-button>
          </o-box>
          <o-box :left="423.0" left-unit="px" :top="22.0" top-unit="px" :width="99.0" >
            <o-refresh-button type="default" size="medium" :block="true"  >
              刷新
            </o-refresh-button>
          </o-box>
          <o-box :left="301.0" left-unit="px" :top="66.25" top-unit="px" :right="1.5" right-unit="px" :bottom="93.0" bottom-unit="px" :width="1137.5" :height="740.75" height-unit="px" >
            <o-data-table ref="Table1720936699405"></o-data-table>
          </o-box>
          <o-box :right="0.0" right-unit="px" :bottom="52.79998779296875" bottom-unit="px" :width="617.0" >
            <o-pagination :show-quick-jumper="true" size="medium" ></o-pagination>
          </o-box>
        <o-dialog title="新增分组" action="add-group-form" :width="444" :height="202" :overflow="false">
          <template #default="{options}">
            <AddGroupForm :value="options"></AddGroupForm>
          </template>
        </o-dialog>
        <o-dialog title="编辑分组" action="edit-group-form" :width="444" :height="202" :overflow="false">
          <template #default="{options}">
            <EditGroupForm :value="options"></EditGroupForm>
          </template>
        </o-dialog>
        <o-drawer title="编辑用户信息" action="edit-user-info" :width="444" :height="202" :overflow="false">
          <template #default="{options}">
            <EditUserInfo :value="options"></EditUserInfo>
          </template>
        </o-drawer>
     </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useDataTable,useRouter,useForm, } from '@oceancode/ocean-wui'
import { listUser,orderUserTableCreatedField,filterUserTableStatusField,updateUserStatusById,showUserTableUsernameField,deleteUserById,loadUserTableMoreDropdowns,listUserGroup,loadUserGroupContextmenu,addUserGroup,updateUserGroupById, } from '@/services'
import AddGroupForm from './user-list/AddGroupForm.vue'
import EditGroupForm from './user-list/EditGroupForm.vue'
import EditUserInfo from './user-list/EditUserInfo.vue'

const router = useRouter()
const Table1720936699405 = useDataTable({
  props:{
    pagination:false,
    scrollX:1800,
  },
  columns:[
    {
      title:'头像',
      key:'avatar',

      traits:['avatar',],
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

      traits:['tags',],
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

      traits:['timestamp',],
      sorter: orderUserTableCreatedField ,
    },
    {
      title:'状态',
      key:'status',
      onClick(row){
        return updateUserStatusById(row)
      },
      traits:['status',],
      filter: {
        options: filterUserTableStatusField,
      },
    },
    {
      title:'链接',
      key:'username',

    },
    {
      title:'用户名2',
      key:'username',

      fixed:'right',
    },
    {
      title:'用户名',
      key:'username',

    },
    {
      title:'操作',
      type:'action',
      fixed:'right',
      width: 200,
       actions:[
         {
           type:'edit',
           action:'edit-user-info',
           text:'编辑',
           show: (row) => showUserTableUsernameField(row),
         },
         {
           type:'delete',
           text:'删除',
           onClick(row){
             return deleteUserById(row)
           },
         },
         {
           type:'custom',
           text:'函数',
           onClick(row){
             return deleteUserById(row)
           },
         },
         {
           type:'open',
           action:'edit-user-info',
           text:'表单',
         },
         {
           type:'custom',
           text:'详细信息',
           onClick(row){
             router.open({name:'userInfo', query:{id:row.id}})
           },
         },
         {
           type:'more',
           text:'更多',
           onClick(row){
             return loadUserTableMoreDropdowns(row)
           },
           dropdowns: loadUserTableMoreDropdowns()
         },
       ]
    }
  ],
  on:{
    load(params){            
      return listUser(params)
    }
  }
});
</script>
