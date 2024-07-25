<!-- eslint-disable vue/valid-template-root -->
<template></template>

<script lang="ts" setup>
import { useMessage as useNativeMessage } from 'naive-ui'
import { useMessage } from '@oceancode/ocean-wui'
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
window['$nativeMessage'] = useNativeMessage()
window['$message'] = useMessage()
window['$t'] = proxy.$t
window['$checkPermission'] = proxy.$checkPermission
</script>
