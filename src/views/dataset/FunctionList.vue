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
        函数列表
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
        title="函数分组"
        key-field="id"
        label-field="name"
        :default-expand-all="true"
        :default-expanded-keys="[]"
        :data="listFunctionGroups"
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
      title="新增函数包"
      :overflow="true"
      :block="true"
      :show-footer="true"
      action="add-function-package-form"
      :width="384.0"
      >
      <template #default="{ option }">
        <AddFunctionPackageForm :value="option" />
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
      title="修改函数包"
      :overflow="true"
      :block="true"
      :show-footer="true"
      action="update-function-package"
      :width="384.0"
      >
      <template #default="{ option }">
        <UpdateFunctionPackage :value="option" />
      </template>
    </o-drawer>
  </div>
</template>
<script lang="ts" setup>
import { FunctionMethodManager } from '@common-api/meta/pages/dataset/index';
import UpdateGroupForm from './function-list/UpdateGroupForm.vue';
import AddFunctionPackageForm from './function-list/AddFunctionPackageForm.vue';
import UpdateFunctionPackage from './function-list/UpdateFunctionPackage.vue';
import { useDataTable, formatDateTime, useRouter } from '@oceancode/ocean-wui';
import { loadContextMenu } from './function-list/ContextMenu';
import { isEmpty } from '@/utils';
import AddGroupForm from './function-list/AddGroupForm.vue';
import { listFunctionGroups, listFunctionPackages, deleteFunctionPackageById } from '@common-api/api/function/MethodFunction';

const router = useRouter();
const Table1725369927476 = useDataTable({
  columns: [
    {
      title:'名称',
      key:'name',
    },
    {
      title:'包名',
      key:'packageName',
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
          type: 'edit',
          text: '编辑',
          action: 'update-function-package',
        },
        {
          type: 'delete',
          text: '删除',
          onClick(param, option, ctx) {
            return deleteFunctionPackageById(param.id)
          },
        },
        {
          type: 'custom',
          text: '管理',
          onClick(param, option, ctx) {
            router.open({ name: FunctionMethodManager.ROUTER_NAME,  query: { packageId: param.id }});
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
      return listFunctionPackages({ groupId: param?.id });
    }
  },
});
async function handleItemClick1725369886925(param): Promise<void> {
  Table1725369927476.value.refresh({ ...param, groupId: param?.id });
}

</script>