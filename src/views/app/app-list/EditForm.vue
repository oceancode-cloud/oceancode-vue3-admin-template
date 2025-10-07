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
import { updateAppPackageById } from '@/api/app/AppFunction';
import { defineProps } from 'vue';
import { UpdateAppPackageRequest } from '@/models/app/UpdateAppPackageRequest';
import { useForm } from '@oceancode/ocean-wui';

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
    submit(param: UpdateAppPackageRequest, option: any): any | void {
      option = { ...props.value,...option };
      const res = updateAppPackageById({...param, id:  option.id});
      res.then(async (data) => {
      });
      return res;
    },
  },
});
</script>