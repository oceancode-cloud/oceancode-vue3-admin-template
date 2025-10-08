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
import { AddProject } from '@common-api/models/project/AddProject';
import { addWorkspace } from '@common-api/api/workspace/WorkspaceFunction';
import { useForm } from '@oceancode/ocean-wui';

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
    submit(param: AddProject, option: any): any | void {
      const res = addWorkspace(param);
      res.then(async (data) => {
      });
      return res;
    },
  },
});
</script>