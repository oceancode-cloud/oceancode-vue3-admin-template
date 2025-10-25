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
import { PageGroupType } from '@common-api/models/page/PageGroupType';
import { defineProps } from 'vue';
import { useForm } from '@oceancode/ocean-wui';
import { AddPageGroup } from '@common-api/models/page/AddPageGroup';
import { addPageGroup } from '@common-api/api/page/PageFunction';

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
      value: PageGroupType.PageGroupType.PAGE,
      component: {
        props: {
          labelField: "label",
          valueField: "value",
        },
        options: PageGroupType.options(),
        name: 'select',
      },
    },
    {
      label: '编码',
      prop: 'code',
      rules: {
        required: true,
        message: '编码不能为空',
      },
      component: {
        props: {
          maxlength: 32,
        },
        name: 'input',
      },
    },
  ],
  on: {
    submit(param: AddPageGroup, option: any): any | void {
      option = { ...props.value,...option };
      const res = addPageGroup({ ...param, parentId: option?.parentId });
      res.then(async (data) => {
      });
      return res;
    },
  },
});
</script>