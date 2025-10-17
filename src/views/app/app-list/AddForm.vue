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
import { useForm, validators, validatorArtifactId } from '@oceancode/ocean-wui';
import { listAllTemplateOptions, handleAddAppPackage } from '@common-api/api/app/AppFunction';

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
        validator(value, param) {
          if (!value) {
            return new Error('包名不能为空')
          }
          const ret = validators(value, param, [validatorArtifactId])
          if(ret) {
            return ret;
          }
        },
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
      const res = handleAddAppPackage({ ...param, traits: option?.traits, group: option?.group });
      res.then(async (data) => {
      });
      return res;
    },
  },
});
</script>