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
        数据源列表
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
        新增
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
      title="新增数据源"
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
      title="编辑数据源"
      :overflow="true"
      :block="true"
      :show-footer="true"
      action="update-form"
      :width="384.0"
      >
      <template #default="{ option }">
        <UpdateForm :value="option" />
      </template>
    </o-drawer>
  </div>
</template>
<script lang="ts" setup>
import { useDataTable } from '@oceancode/ocean-wui';
import UpdateForm from './datasource-list/UpdateForm.vue';
import { DatasourceType } from '@/models/datasource/DatasourceType';
import AddForm from './datasource-list/AddForm.vue';
import { listDatasources, deleteDatasourceById } from '@/api/datasource/DatasourceFunction';

const Table1725369451273 = useDataTable({
  columns: [
    {
      title:'名称',
      key:'name',
    },
    {
      title:'数据源ID',
      key:'datasourceId',
    },
    {
      title:'类型',
      key:'type',
      dict: DatasourceType.options(),
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
      actions: [
        {
          type: 'edit',
          text: '编辑',
          action: 'update-form',
        },
        {
          type: 'delete',
          text: '删除',
          onClick(param, option, ctx) {
            return deleteDatasourceById(param.id)
          },
        },
      ],
    },
  ],
  on: {
    load(param: any) {
      return listDatasources();
    }
  },
});
</script>