<!-- Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved. -->

<template>
  <div
    >
    <CommonLayout :show-menu="false">
      <div
          :style="{
            'z-index': 0,
            transform: 'rotate(0deg)',
            top: '0.0px',
            left: '0.0px',
            borderBottomLeftRadius: '0px',
            background: 'rgba(255, 255, 255, 1)',
            width: '100%',
            borderBottomRightRadius: '0px',
            borderTopRightRadius: '0px',
            position: 'absolute',
            height: '190px',
            borderTopLeftRadius: '0px',
          }"
      >
        <div
          :style="{
            'z-index': 2,
            top: '148.0px',
            left: '3.0px',
            width: '278px',
            position: 'absolute',
            height: '38px',
          }"
        >
          <o-segment-tabs
            :options="loadOptions1761662783778"
            v-model="activeIndex1761662783778"
            :on-update-value="handleUpdateValue1761662783778"
            :on-item-click="handleTabClick1761662783778"
          >
          </o-segment-tabs>
        </div>
      </div>
      <div
        :style="{
          'z-index': 1,
          top: '198.0px',
          left: '0.0px',
          width: '100%',
          position: 'absolute',
          height: '698px',
        }"
      >
        <app-router-context
        >
        </app-router-context>
      </div>
    </CommonLayout>
  </div>
</template>
<script lang="ts" setup>
import CommonLayout from '@/packages/layout/common/CommonLayout.vue';
import { onMounted } from 'vue';
import { useRouter } from '@oceancode/ocean-wui';
import { switchRouter, findTreeItemByKey } from '@/utils';
import { useGlobal } from '@/store';

const router = useRouter();
const loadOptions1761662783778 = [
  {
    label:'代码',
    key:'key0',
  },
  {
    label:'依赖管理',
    key:'key1',
  },
  {
    label:'设置',
    key:'key2',
    router: {
      name: 'appSetting',
    },
  },
]
const global = useGlobal();
const activeIndex1761662783778 = ref<number>();
onMounted(async () => {
  activeIndex1761662783778.value = findTreeItemByKey(loadOptions1761662783778, it => it.router?.name === global.routerName)?.key;
});
async function handleUpdateValue1761662783778(key, option): Promise<void> {
  switchRouter(option.router);
}

async function handleTabClick1761662783778(item): Promise<void> {
  if (item.router) {
    router.push(item.router);
  }
}

</script>