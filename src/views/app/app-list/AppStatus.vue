<template>

</template>
<script setup lang="ts">
import { AppPackageStatus } from '@/models/app/AppPackageStatus';
import { AppPackageInfo } from 'ocean-admin-api/models/app/AppPackageInfo';
import { defineProps, onMounted, PropType, ref } from 'vue';
const props = defineProps({
  value: {
    type: Object as PropType<AppPackageInfo>,
    required: true,
  }
});
const statusType = ref();
onMounted(() => {
  const item = AppPackageStatus.from(props.value.status);
  const label = item?.label;
  let type = 'success';
  if (AppPackageStatus.AppPackageStatus.CREATED === item?.value) {
    type = 'default';
  } else if (AppPackageStatus.AppPackageStatus.BUILDING === item?.value) {
    type = 'info';
  } else if (AppPackageStatus.AppPackageStatus.ERROR === item?.value) {
    type = 'error';
  } else if (AppPackageStatus.AppPackageStatus.SUCCESS === item?.value) {
    type = 'success';
  }
  statusType.value = type;
})
</script>