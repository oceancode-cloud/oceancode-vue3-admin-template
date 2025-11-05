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
            height: '106px',
            borderTopLeftRadius: '0px',
          }"
      >
        <div
          :style="{
            'z-index': 1,
            top: '5.0px',
            left: '38.0px',
            bottom: '41.0px',
            width: '60px',
            position: 'absolute',
          }"
        >
          <o-image
            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            :width="60.0"
            :height="60.0"
          >
          </o-image>
        </div>
        <div
          :style="{
            'z-index': 2,
            top: '15.0px',
            left: '117.0px',
            display: 'inline-block',
            minWidth: '11.805555555555555%',
            position: 'absolute',
            height: '26px',
          }"
        >
          <o-text
            :font-weight="700"
            color="rgba(119, 119, 119, 1)"
            text-align="left"
            type="text"
          font-size="16px"
          :text-style="{
            fontSize:'16px',
          }"
          >
            {{ modelInfo }}
          </o-text>
        </div>
        <div
          :style="{
            'z-index': 4,
            left: '0.0px',
            bottom: '0.0px',
            width: '300px',
            position: 'absolute',
            height: '36px',
          }"
        >
          <o-tabs
            size="large"
            type="custom"
            :options="loadOptions1758107856457"
            v-model="activeIndex1758107856457"
            :on-update-value="handleUpdateValue1758107856457"
            :on-item-click="handleTabClick1758107856457"
          >
            <template #item="{option,selected}">
              <o-tab-menu-item :option="option" :selected="selected"></o-tab-menu-item>
            </template>
          </o-tabs>
        </div>
      </div>
      <div
        :style="{
          'z-index': 4,
          top: '113.0px',
          left: '0.0px',
          bottom: '0.0px',
          right: '0.0px',
          position: 'absolute',
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
const loadOptions1758107856457 = [
  {
    label:'模型属性',
    key:'key0',
    router: {
      name: 'modelManager',
    },
  },
  {
    label:'Mock数据',
    key:'key1',
    router: {
      name: 'modelMockData',
    },
  },
  {
    label:'E-R图',
    key:'key2',
  },
]
const global = useGlobal();
const activeIndex1758107856457 = ref<number>();
onMounted(async () => {
  activeIndex1758107856457.value = findTreeItemByKey(loadOptions1758107856457, it => it.router?.name === global.routerName)?.key;
});
async function handleTabClick1758107856457(item): Promise<void> {
  if (item.router) {
    router.push(item.router);
  }
}

async function handleUpdateValue1758107856457(key, option): Promise<void> {
  switchRouter(option.router);
}

</script>