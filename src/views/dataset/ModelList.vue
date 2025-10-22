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
        模型列表
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
        title="模型分组"
        key-field="id"
        label-field="label"
        :default-expand-all="true"
        :default-expanded-keys="[]"
        :data="listModelGroupsById"
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
      title="新增模型"
      :overflow="true"
      :block="true"
      :show-footer="true"
      action="add-model-form"
      :width="384.0"
      >
      <template #default="{ option }">
        <AddModelForm :value="option" />
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
  </div>
</template>
<script lang="ts" setup>
import AddGroupForm from './model-list/AddGroupForm.vue';
import { ModelType } from '@common-api/models/model/ModelType';
import AddModelForm from './model-list/AddModelForm.vue';
import { useDataTable } from '@oceancode/ocean-wui';
import { listModelGroupsById, listModelsGroup } from '@common-api/api/model/ModelFunction';
import UpdateGroupForm from './model-list/UpdateGroupForm.vue';
import { isEmpty } from '@/utils';
import { loadContextMenu } from '@/packages/components/dataset/model-list/ModelGroupContext';

const Table1725369927476 = useDataTable({
  columns: [
    {
      title:'名称',
      key:'name',
    },
    {
      title:'类型',
      key:'type',
      dict: ModelType.options(),
    },
    {
      title:'唯一标识',
      key:'modelId',
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
        },
        {
          type: 'delete',
          text: '删除',
          onClick(param, option, ctx) {
          },
        },
        {
          type: 'custom',
          text: '管理',
          onClick(param, option, ctx) {
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
      return listModelsGroup({ groupId: param?.groupId, type: param?.type, types: param?.types });
    }
  },
});
async function handleItemClick1725369886925(param): Promise<void> {
  Table1725369927476.value.refresh({ ...param, groupId: param?.id });
}

</script>