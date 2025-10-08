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
import { AppPackageRequest } from '@common-api/models/app/AppPackageRequest';
import { defineProps } from 'vue';
import { useForm } from '@oceancode/ocean-wui';
import { listAllTemplateOptions, addAppPackage } from '@common-api/api/app/AppFunction';

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
      label: '包名',
      prop: 'packageName',
      rules: {
        required: true,
        message: '包名不能为空',
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
      prop: 'templateId',
      rules: {
        required: true,
        message: '模板ID不能为空',
      },
      component: {
        props: {
          maxlength: 32,
          labelField: "name",
          valueField: "templateId",
        },
        options: listAllTemplateOptions,
        name: 'select',
      },
    },
    {
      label: '描述',
      prop: 'description',
      rules: {
      },
      component: {
        props: {
          rows: 3,
        },
        name: 'input',
      },
    },
  ],
  on: {
    submit(param: AppPackageRequest, option: any): any | void {
      option = { ...props.value,...option };
      const res = addAppPackage({ ...param, traits: option?.traits, group: option?.group });
      res.then(async (data) => {
      });
      return res;
    },
  },
});
</script>