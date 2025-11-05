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
            'z-index': 3,
            top: '28.0px',
            left: '131.0px',
            width: '213px',
            position: 'absolute',
            height: '29px',
          }"
        >
          <o-text
            :font-weight="600"
            color="#000"
            text-align="left"
            type="text"
          font-size="18px"
          :text-style="{
            fontSize:'18px',
          }"
          >
            {{ appInfo?.name }}
          </o-text>
        </div>
        <div
          :style="{
            'z-index': 4,
            top: '29.0px',
            left: '15.0px',
            width: '86.33px',
            position: 'absolute',
            height: '71px',
          }"
        >
          <o-image
            src="./images/design/icons/create.png"
            :width="86.33"
            :height="71.0"
          >
          </o-image>
        </div>
        <div
          :style="{
            'z-index': 2,
            top: '148.0px',
            left: '3.0px',
            width: '220px',
            position: 'absolute',
            height: '36px',
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
            'z-index': 5,
            transform: 'rotate(0deg)',
            top: '192.0px',
            left: '0.0px',
            borderBottomLeftRadius: '0px',
            bottom: '2.0px',
            background: 'rgba(255, 255, 255, 1)',
            width: '286.8px',
            borderBottomRightRadius: '0px',
            borderTopRightRadius: '0px',
            position: 'absolute',
            borderTopLeftRadius: '0px',
          }"
      >
        <o-menu
          :options="loadOption1762266760947"
          :on-update-value="handleMenuUpdateValue1762266760947"
          v-model="activeMenuIndex1762266760947"
        >
        </o-menu>
      </div>
      <div
          :style="{
            boxShadow: '0px 2px 6px 0px rgba(37, 43, 58, 0.24)',
            bottom: '11.0px',
            right: '13.0px',
            borderTopLeftRadius: '4px',
            'z-index': 1,
            transform: 'rotate(0deg)',
            top: '206.0px',
            left: '298.0px',
            borderBottomLeftRadius: '4px',
            background: 'rgba(255, 255, 255, 1)',
            borderBottomRightRadius: '4px',
            borderTopRightRadius: '4px',
            position: 'absolute',
          }"
      >
        <div
          :style="{
            'z-index': 6,
            top: '19.0px',
            left: '14.0px',
            bottom: '17.0px',
            right: '13.000000000000227px',
            position: 'absolute',
          }"
        >
          <app-router-context
          >
          </app-router-context>
        </div>
      </div>
    </CommonLayout>
  </div>
</template>
<script lang="ts" setup>
import CommonLayout from '@/packages/layout/common/CommonLayout.vue';
import { loadOption1762266760947 } from './app-manage-layout/index';
import { onMounted, ref } from 'vue';
import { useRouter } from '@oceancode/ocean-wui';
import { switchRouter, findTreeItemByKey } from '@/utils';
import { getAppPackageById } from '@common-api/api/app/AppFunction';
import { AppPackageInfo } from '@common-api/models/app/AppPackageInfo';
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
const appId = ref();
const appInfo = ref<AppPackageInfo>()
const activeMenuIndex1762266760947 = ref<string>(global.routerName);
onMounted(async () => {
  activeIndex1761662783778.value = findTreeItemByKey(loadOptions1761662783778, it => it.router?.name === global.routerName)?.key;
  appId.value =  global.params?.appId
  appInfo.value = await getAppPackageById(appId.value)
});
async function handleUpdateValue1761662783778(key, option): Promise<void> {
  switchRouter(option.router);
}

async function handleMenuUpdateValue1762266760947(key, option): Promise<void> {
  global.setCurrentMenu({...option, name: option?.label});
}

async function handleTabClick1761662783778(item): Promise<void> {
  if (item.router) {
    router.push(item.router);
  }
}

</script>