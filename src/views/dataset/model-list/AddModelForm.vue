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
import { ModelType } from '@common-api/models/model/ModelType';
import { AddModel } from '@common-api/models/model/AddModel';
import { h, defineProps } from 'vue';
import { useForm, ORender } from '@oceancode/ocean-wui';
import { showModelGroupEnumTypeItem, showFormDatasourceItem, renderParentModelFormItem, addModel } from '@common-api/api/model/ModelFunction';
import { ModelEnumType } from '@common-api/models/model/ModelEnumType';
import { listDatasources } from '@common-api/api/datasource/DatasourceFunction';

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
      label: '类型',
      prop: 'type',
      rules: {
        required: true,
        message: '类型不能为空',
        type:'number',
      },
      component: {
        props: {
        },
        options: ModelType.options(),
        name: 'select',
      },
    },
    {
      label: '值类型',
      prop: 'enumType',
      show: (param) => {
        return showModelGroupEnumTypeItem(param);
      },
      rules: {
        required: true,
        message: '值类型不能为空',
      },
      component: {
        props: {
        },
        options: ModelEnumType.options(),
        name: 'select',
      },
    },
    {
      label: '标识',
      prop: 'modelId',
      rules: {
        required: true,
        message: 'modelId不能为空',
      },
      component: {
        props: {
          maxlength: 32,
        },
        name: 'input',
      },
    },
    {
      label: '标识映射',
      prop: 'mappingId',
      component: {
        props: {
          maxlength: 32,
        },
        name: 'input',
      },
    },
    {
      label: '数据源',
      prop: 'datasourceId',
      show: (param) => {
        return showFormDatasourceItem(param);
      },
      rules: {
        required: true,
        message: '数据源不能为空',
      },
      component: {
        props: {
          labelField: "name",
          valueField: "id",
        },
        options: listDatasources,
        name: 'select',
      },
    },
    {
      label: '父模型',
      prop: 'parentId',
      component: {
        props: {
        },
        render(param: any): any {
          return renderParentModelFormItem(param);
        },
      },
    },
    {
      label: '标签',
      prop: 'traits',
      component: {
        props: {
          labelField: "label",
          valueField: "value",
        },
        name: 'select',
      },
    },
    {
      label: '描述',
      prop: 'description',
      component: {
        name: 'input',
      },
    },
  ],
  on: {
    submit(param: AddModel, option: any): any | void {
      option = { ...props.value,...option };
      const res = addModel({ ...param, groupId: option?.groupId });
      res.then(async (data) => {
      });
      return res;
    },
  },
});
</script>