<template>
  <div>
    <o-form ref="Form"></o-form>
  </div>
</template>
<script lang="ts" setup>
import { getAppPackageById } from '@common-api/api/app/AppFunction';
import { useGlobal } from '@/store';
import { useForm } from '@oceancode/ocean-wui';

const global = useGlobal()
const Form = useForm({
  props:{
    labelPlacement: "top",
    size: "medium",
  },
  items: [
    {
      label: 'GroupId',
      prop: 'groupId',
      component: {
        name: 'input'
      },
      rules: {
        required: true,
        message: 'GroupId不能为空',
      },
    },
    {
      label: 'ArtifactId',
      prop: 'artifactId',
      component: {
        name: 'input'
      },
      rules: {
        required: true,
        message: 'artifactId不能为空',
      },
    },
    {
      label: '版本号',
      prop: 'version',
      component: {
        name: 'input'
      },
      rules: {
        required: true,
        message: '版本号不能为空',
      },
    },
    {
      label: '包名',
      prop: 'packageName',
      component: {
        name: 'input'
      },
      rules: {
        required: true,
        message: '包名不能为空',
      },
    },
    {
      label: '公司名称',
      prop: 'companyName',
      component: {
        name: 'input'
      }
    }
  ],
  on: {
    async info(){
      const info = await getAppPackageById(global.params.appId);
      console.log(info);
      return info;
    }
  }
});

</script>