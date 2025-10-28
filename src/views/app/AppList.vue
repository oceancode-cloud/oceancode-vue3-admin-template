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
        应用列表
      </o-text>
    </div>
    <div
      :style="{
        'z-index': 2,
        top: '63.0px',
        left: '24.0px',
        width: '99px',
        position: 'absolute',
        height: '34px',
      }"
    >
      <o-add-button
        type="primary"
        size="medium"
        :block="true"
        action="add-form"
      >
        创建应用
      </o-add-button>
    </div>
    <div
      :style="{
        'z-index': 1,
        top: '112.0px',
        left: '24.0px',
        width: '96.66666666666667%',
        position: 'absolute',
        height: '87.55555555555556%',
      }"
    >
      <div
      >
        <o-data-table ref="Table1725369451273" ></o-data-table>
      </div>
    </div>
    <o-drawer
      title="创建应用"
      :overflow="true"
      :block="true"
      :show-footer="true"
      action="add-form"
      :width="384.0"
      >
      <template #default="{ option }">
        <AddForm :value="option" />
      </template>
    </o-drawer>
    <o-drawer
      title="编辑应用"
      :overflow="true"
      :block="true"
      :show-footer="true"
      action="edit-form"
      :width="384.0"
      >
      <template #default="{ option }">
        <EditForm :value="option" />
      </template>
    </o-drawer>
  </div>
</template>
<script lang="ts" setup>
import { AppPackageStatus } from '@common-api/models/app/AppPackageStatus';
import AddForm from './app-list/AddForm.vue';
import { useDataTable, formatDateTime, useRouter } from '@oceancode/ocean-wui';
import EditForm from './app-list/EditForm.vue';
import { AppSetting } from '@common-api/meta/pages/app/index';
import { renderAppStatusColumn,
showAppTableBuildActionItem,
listAppPackages,
deleteAppPackageById,
handleAppPackageBuild,
appPackageProduct } from '@common-api/api/app/AppFunction';

const router = useRouter();
const Table1725369451273 = useDataTable({
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
      title:'状态',
      key:'status',
      dict: AppPackageStatus.options(),
      render(param) {
        return renderAppStatusColumn(param)
      },
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
      fixed:'right',
      width: 230.0,
      actions: [
        {
          type: 'edit',
          text: '编辑',
          action: 'edit-form',
        },
        {
          type: 'delete',
          text: '删除',
          onClick(param, option, ctx) {
            return deleteAppPackageById(param.id)
          },
        },
        {
          type: 'custom',
          text: '构建',
          onClick(param, option, ctx) {
            return handleAppPackageBuild(param)
          },
          show(param) {
            return showAppTableBuildActionItem(param);
          },
        },
        {
          type: 'custom',
          text: '构建包',
          onClick(param, option, ctx) {
            return appPackageProduct(param.id)
          },
        },
        {
          type: 'custom',
          text: '管理',
          onClick(param, option, ctx) {
            router.open({ name: AppSetting.ROUTER_NAME,  params: { appId: param.id }});
          },
        },
      ],
    },
  ],
  on: {
    load(param: any) {
      return listAppPackages();
    }
  },
});
</script>