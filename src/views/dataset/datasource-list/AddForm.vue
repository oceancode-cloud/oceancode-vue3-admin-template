<!-- Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved. -->

<template>
  <div
    >
    <div
      :style="{
        width: '100%',
        position: 'relative',
        height: '100%',
      }"
    >
      <div
      >
        <o-form ref="Form"></o-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { listAccountOption } from '@common-api/api/account/AccountFunction';
import { AddDatasource } from '@common-api/models/datasource/AddDatasource';
import { useForm, useRouter } from '@oceancode/ocean-wui';
import { DatasourceType } from '@common-api/models/datasource/DatasourceType';
import { AccountList } from '@common-api/meta/pages/app/index';
import { addDatasource, showAccountFormItem } from '@common-api/api/datasource/DatasourceFunction';

const router = useRouter();
const Form = useForm({
  props:{
    labelPlacement: "top",
    size: "medium",
  },
  items: [
    {
      label: '名称',
      prop: 'name',
      rules: {
        required: true,
        message: '名称不能为空',
      },
      component: {
        props: {
          maxlength: 32,
        },
        name: 'input',
      },
    },
    {
      label: '数据源ID',
      prop: 'datasourceId',
      rules: {
        required: true,
        message: '唯一ID不能为空',
      },
      component: {
        props: {
          maxlength: 32,
        },
        name: 'input',
      },
    },
    {
      label: '类型',
      prop: 'type',
      value: DatasourceType.DatasourceType.MYSQL,
      rules: {
        required: true,
        message: '类型不能为空',
      },
      component: {
        props: {
        },
        options: DatasourceType.options(),
        name: 'select',
      },
    },
    {
      label: '关联账号',
      prop: 'accountId',
      rules: {
        required: true,
        message:'账号不能为空',
      },
       show: (param) => {
        return showAccountFormItem(param.type)
      },
      component: {
        props: {
          action: {
            text:'新建账号',
            onClick() {
              router.open({ name: AccountList.ROUTER_NAME});
            }
          },
          labelField: "name",
          valueField: "id",
        },
        options: listAccountOption,
        name: 'select',
      },
    },
    {
      label: '描述',
      prop: 'description',
      component: {
        props: {
          rows: 3,
        },
        name: 'input',
      },
    },
  ],
  on: {
    submit(param: AddDatasource, option: any): any | void {
      const res = addDatasource(param);
      res.then(async (data) => {
      });
      return res;
    },
  },
});
</script>