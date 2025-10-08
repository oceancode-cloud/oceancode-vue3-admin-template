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
import { ModelEnumType } from 'ocean-admin-api/models/model/ModelEnumType';
import { AddModel } from 'ocean-admin-api/models/model/AddModel';
import { ModelType } from 'ocean-admin-api/models/model/ModelType';
import { h, defineProps } from 'vue';
import { addModel } from '@/api/model/ModelFunction';
import { useForm } from '@oceancode/ocean-wui';
import { listDatasources } from '@/api/datasource/DatasourceFunction';
import { ModelSelect } from '@/components';

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
        message: 'type不能为空',
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
      rules: {
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
      rules: {
        required: true,
        message: '数据源不能为空',
      },
      component: {
        props: {
          labelField: "name",
          valueField: "datasourceId",
        },
        options: listDatasources,
        name: 'select',
      },
    },
    {
      label: '父模型',
      prop: 'parentId',
      rules: {
      },
      component: {
        props: {
        },
        render(param: any): any | void {
          return h(ModelSelect, {
            value: param?.parentId,
            onUpdateValue(val: any) {
              param.parentId = val;
            },
          });
        },
      },
    },
    {
      label: '标签',
      prop: 'traits',
      rules: {
      },
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
      rules: {
      },
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