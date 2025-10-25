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
import { h, defineProps } from 'vue';
import { useForm, ORender } from '@oceancode/ocean-wui';
import { showFormDatasourceItem, listDatasourceOptions, renderParentModelFormItem, listModelTraits, updateModelById } from '@common-api/api/model/ModelFunction';
import { UpdateModelParam } from '@common-api/models/model/UpdateModelParam';

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
      label: '唯一标识',
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
      label: '数据源',
      prop: 'datasourceId',
      show: (param) => {
        return showFormDatasourceItem(param);
      },
      component: {
        props: {
          labelField: "name",
          valueField: "id",
        },
        options: listDatasourceOptions,
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
          return renderParentModelFormItem({name: param.name, modelId: param.modelId, parentId: param?.parentId, description: param?.description, traits: param?.traits});
        },
      },
    },
    {
      label: '标签',
      prop: 'traits',
      component: {
        props: {
        },
        options: listModelTraits,
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
    submit(param: UpdateModelParam, option: any): any | void {
      option = { ...props.value,...option };
      const res = updateModelById({...param, id:  option.id});
      res.then(async (data) => {
      });
      return res;
    },
  },
});
</script>