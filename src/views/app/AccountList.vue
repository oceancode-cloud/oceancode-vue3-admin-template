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
        账号列表
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
        action="add-account"
      >
        新增账号
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
      title="新增账号"
      :overflow="true"
      :block="true"
      :show-footer="true"
      action="add-account"
      :width="400.0"
      >
      <AddAccount />
    </o-drawer>
    <o-drawer
      title="编辑账号"
      :overflow="true"
      :block="true"
      :show-footer="true"
      action="update-account"
      :width="400.0"
      >
      <template #default="{ option }">
        <UpdateAccount :value="option" />
      </template>
    </o-drawer>
  </div>
</template>
<script lang="ts" setup>
import { listAccounts, updateAccountUsedById, deleteAccountById } from '@/api/account/AccountFunction';
import { AccountType } from 'ocean-admin-api/models/account/AccountType';
import { useDataTable, formatDateTime } from '@oceancode/ocean-wui';
import { AddAccount, UpdateAccount } from '@/components';

const Table1725369451273 = useDataTable({
  columns: [
    {
      title:'名称',
      key:'name',
    },
    {
      title:'是否使用',
      key:'used',
      traits: [
        'status',
      ],
      onClick(param, option, ctx){
        return updateAccountUsedById(param);
      }
    },
    {
      title:'类型',
      key:'type',
      dict: AccountType.options(),
    },
    {
      title:'启用时间',
      key:'expireStartTime',
      formatter: (row) => formatDateTime(row.expireStartTime),
    },
    {
      title:'失效时间',
      key:'expireEndTime',
      formatter: (row) => formatDateTime(row.expireEndTime),
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
          action: 'update-account',
        },
        {
          type: 'delete',
          text: '删除',
          onClick(param, option, ctx) {
            return deleteAccountById(param.id)
          },
        },
      ],
    },
  ],
  on: {
    load(param: any) {
      return listAccounts({ MYSQL: param.MYSQL, H2: param.H2, TOKEN: param.TOKEN });
    }
  },
});
</script>