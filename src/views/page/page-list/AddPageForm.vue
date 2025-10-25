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
import { PageImplType } from '@common-api/models/page/PageImplType';
import { AddPage } from '@common-api/models/page/AddPage';
import { defineProps } from 'vue';
import { useForm } from '@oceancode/ocean-wui';
import { listPagePermission, listPageTraits, addPage } from '@common-api/api/page/PageFunction';

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
      label: '标题',
      prop: 'title',
      rules: {
        required: true,
        message: '标题不能为空',
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
      prop: 'pageId',
      rules: {
        required: true,
        message: '唯一标识不能为空',
      },
      component: {
        props: {
          maxlength: 32,
        },
        name: 'input',
      },
    },
    {
      label: '实现方式',
      prop: 'implType',
      value: PageImplType.PageImplType.DESIGN,
      rules: {
        required: true,
        message: '实现方式不能为空',
        type:'number',
      },
      component: {
        props: {
        },
        options: PageImplType.options(),
        name: 'select',
      },
    },
    {
      label: '权限',
      prop: 'permissions',
      component: {
        props: {
          multiple: true,
        },
        options: listPagePermission,
        name: 'select',
      },
    },
    {
      label: '标签',
      prop: 'traits',
      component: {
        props: {
          multiple: true,
        },
        options: listPageTraits,
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
    submit(param: AddPage, option: any): any | void {
      option = { ...props.value,...option };
      const res = addPage({ ...param, type: option?.type, parentId: option?.parentId, groupId: option?.groupId, templateId: option?.templateId });
      res.then(async (data) => {
      });
      return res;
    },
  },
});
</script>