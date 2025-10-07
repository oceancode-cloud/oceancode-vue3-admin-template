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
import { updateMenuGroupById } from '@/api/menu/AppMenuFunction';
import { UpdateAppMenuGroup } from '@/models/menu/UpdateAppMenuGroup';
import { defineProps } from 'vue';
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
  ],
  on: {
    submit(param: UpdateAppMenuGroup, option: any): any | void {
      option = { ...props.value,...option };
      const res = updateMenuGroupById({...param, id:  option.id});
      res.then(async (data) => {
      });
      return res;
    },
  },
});
</script>