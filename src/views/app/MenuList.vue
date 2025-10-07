<!-- Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved. -->

<template>
  <div
    >
    <div
      :style="{
        'z-index': 0,
        top: '21.0px',
        left: '24.0px',
        width: '178px',
        position: 'absolute',
        height: '32px',
      }"
    >
      <o-text
        :font-weight="600"
        color="#000"
        text-align="left"
        type="text"
      font-size="20px"
      :text-style="{
        fontSize:'20px',
      }"
      >
        菜单列表
      </o-text>
    </div>
    <div
      :style="{
        'z-index': 2,
        top: '78.0px',
        left: '24.0px',
        width: '300px',
        position: 'absolute',
        height: '91.33333333333333%',
      }"
    >
      <o-group-tree
        title="菜单分组"
        key-field="key"
        label-field="name"
        :default-expand-all="true"
        :default-expanded-keys="[]"
        :data="listMenuGroups"
        action="add-group-form"
        :actions="['add']"
        :on-load-contextmenu="loadContextMenu"
        :on-item-click='handleItemClick1725369886925'
      >
      </o-group-tree>
    </div>
    <div
      :style="{
        'z-index': 3,
        top: '78.0px',
        left: '330.0px',
        width: '75.13888888888889%',
        position: 'absolute',
        height: '91.33333333333333%',
      }"
    >
      <div
      >
        <o-data-table ref="Table1725369927476" ></o-data-table>
      </div>
    </div>
    <o-drawer
      title="新增分组"
      :overflow="true"
      :block="true"
      :show-footer="true"
      action="add-group-form"
      :width="384.0"
      >
      <template #default="{ option }">
        <AddGroupForm :value="option" />
      </template>
    </o-drawer>
    <o-drawer
      title="新增菜单"
      :overflow="true"
      :block="true"
      :show-footer="true"
      action="add-menu"
      :width="400.0"
      >
      <template #default="{ option }">
        <AddMenu :value="option" />
      </template>
    </o-drawer>
    <o-drawer
      title="修改分组"
      :overflow="true"
      :block="true"
      :show-footer="true"
      action="update-group-form"
      :width="384.0"
      >
      <template #default="{ option }">
        <UpdateGroupForm :value="option" />
      </template>
    </o-drawer>
    <o-drawer
      title="新增菜单"
      :overflow="true"
      :block="true"
      :show-footer="true"
      action="add-menu"
      :width="400.0"
      >
      <template #default="{ option }">
        <AddMenu :value="option" />
      </template>
    </o-drawer>
    <o-drawer
      title="编辑菜单"
      :overflow="true"
      :block="true"
      :show-footer="true"
      action="update-menu"
      :width="400.0"
      >
      <template #default="{ option }">
        <UpdateMenu :value="option" />
      </template>
    </o-drawer>
  </div>
</template>
<script lang="ts" setup>
import { loadContextMenu } from './menu-list/ContextMenu';
import { MenuType } from '@/models/menu/MenuType';
import { listMenuGroups, listGroupMenusById, updateMenuVisibleById, deleteMenuById } from '@/api/menu/AppMenuFunction';
import UpdateGroupForm from './menu-list/UpdateGroupForm.vue';
import { useDataTable, formatDateTime } from '@oceancode/ocean-wui';
import { isEmpty } from '@/utils';
import AddGroupForm from './menu-list/AddGroupForm.vue';
import { AddMenu, UpdateMenu } from '@/components';

const Table1725369927476 = useDataTable({
  columns: [
    {
      title:'名称',
      key:'name',
    },
    {
      title:'类型',
      key:'type',
      dict: MenuType.options(),
    },
    {
      title:'是否显示',
      key:'visible',
      traits: [
        'status',
      ],
      onClick(param, option, ctx){
        return updateMenuVisibleById(param);
      }
    },
    {
      title:'创建时间',
      key:'createdAt',
      formatter: (row) => formatDateTime(row.createdAt),
    },
    {
      title:'更新时间',
      key:'updatedAt',
      formatter: (row) => formatDateTime(row.updatedAt),
    },
    {
      title:'描述',
      key:'description',
      ellipsis: true
    },
    {
      title: '操作',
      type: 'action',
      actions: [
        {
          type: 'add',
          text: '新增',
          action: 'add-menu',
        },
        {
          type: 'edit',
          text: '编辑',
          action: 'update-menu',
        },
        {
          type: 'delete',
          text: '删除',
          onClick(param, option, ctx) {
            return deleteMenuById(param.id)
          },
        },
      ],
    },
  ],
  on: {
    load(param: any) {
      if (isEmpty(param)) {
        return [];
      }
      return listGroupMenusById(param.id);
    }
  },
});
async function handleItemClick1725369886925(param): Promise<void> {
  Table1725369927476.value.refresh({ ...param, id: param?.id });
}

</script>