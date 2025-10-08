<!-- Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved. -->

<template>
  <div
    >
    <div
      :style="{
        'z-index': 1,
        top: '22.0px',
        left: '8.0px',
        width: '99px',
        position: 'absolute',
        height: '34px',
      }"
    >
      <o-add-button
        type="primary"
        size="medium"
        :block="true"
        action="add-form"
      >
        新增工作区
      </o-add-button>
    </div>
    <div
        :style="{
          'z-index': 0,
          transform: 'rotate(0deg)',
          top: '84.0px',
          left: '7.0px',
          bottom: 0,
          position: 'absolute',
          right: '7.0px',
        }"
    >
      <o-data-list
        ref="com1757084192503Ref"
        :on-click="handleOpenPage622"
        :data="listUserWorkspace"
        :x-gap="18"
        :y-gap="8"
        :cols="4"
        :item-width="441.2"
        :item-responsive="true"
        preset="grid"
        >
        <template #default="{option}">
          <div style="height: 153.3px;position: relative;border: 1px solid #F3F4F6FF;boxShadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.03);borderBottomLeftRadius: 8px;background: linear-gradient(270deg,rgba(255, 255, 255, 1) 0%,#F9FAFBFF 100%);borderBottomRightRadius: 8px;borderTopRightRadius: 8px;borderTopLeftRadius: 8px">
            <div
              :style="{
                'z-index': 2,
                top: '13.0px',
                left: '15.0px',
                width: '413px',
                position: 'absolute',
                height: '24px',
              }"
            >
              <o-text
                :font-weight="600"
                color="#000"
                text-align="left"
                type="text"
                :lines="1"
              font-size="15px"
              :text-style="{
                fontSize:'15px',
              }"
              >
                {{ option.name }}
              </o-text>
            </div>
            <div
              :style="{
                'z-index': 3,
                top: '54.0px',
                left: '15.0px',
                width: '413px',
                position: 'absolute',
                height: '24px',
              }"
            >
              <o-text
                :font-weight="400"
                color="rgba(96, 96, 96, 1)"
                text-align="left"
                type="text"
                :lines="3"
              font-size="14px"
              :text-style="{
                fontSize:'14px',
              }"
              >
                {{ option.description }}
              </o-text>
            </div>
            <div
              :style="{
                'z-index': 4,
                top: '113.0px',
                left: '15.0px',
                width: '119px',
                position: 'absolute',
                height: '24px',
              }"
            >
              <o-text
                :font-weight="400"
                color="#000"
                text-align="left"
                type="text"
              font-size="14px"
              :text-style="{
                fontSize:'14px',
              }"
              >
                {{ option.username }}
              </o-text>
            </div>
          </div>
        </template>
      </o-data-list>
    </div>
    <o-drawer
      title="新增工作区"
      :overflow="true"
      :block="true"
      :show-footer="true"
      action="add-form"
      :width="384.0"
      >
      <template #default="{ option }">
        <AddForm :value="option" />
      </template>
    </o-drawer>
  </div>
</template>
<script lang="ts" setup>
import { listUserWorkspace } from 'ocean-admin-api/api/workspace/WorkspaceFunction';
import { useRouter } from '@oceancode/ocean-wui';
import { AppList } from 'ocean-admin-api/meta/pages/app/index';
import AddForm from './workspace-list/AddForm.vue';

const router = useRouter();
async function handleOpenPage622(option): Promise<void> {
  router.push({ name: AppList.ROUTER_NAME, params: { projectId: option.id }});
}

</script>