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
import { defineProps } from 'vue';
import { useForm } from '@oceancode/ocean-wui';
import { UpdateDatasource } from '@common-api/models/datasource/UpdateDatasource';
import { updateDatasourceById } from '@common-api/api/datasource/DatasourceFunction';

const props = defineProps({
  value: {
    type: Object,
    required: true,
  },
});

const Form = useForm({
  props:{
    labelPlacement: "top",
    size: "medium",
  },
  formValue: props.value,
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
    submit(param: UpdateDatasource, option: any): any | void {
      option = { ...props.value,...option };
      const res = updateDatasourceById({...param, id:  option.id});
      res.then(async (data) => {
      });
      return res;
    },
  },
});
</script>