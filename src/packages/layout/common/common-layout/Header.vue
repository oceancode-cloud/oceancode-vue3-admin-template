<!-- Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved. -->

<template>
  <div
    >
    <div
        :style="{
          'z-index': 0,
          transform: 'rotate(0deg)',
          top: '0.0px',
          left: '8.0px',
          borderBottomLeftRadius: '0px',
          background: 'rgba(255, 255, 255, 1)',
          borderBottomRightRadius: '0px',
          minWidth: '100%',
          borderTopRightRadius: '0px',
          position: 'absolute',
          height: '40px',
          borderTopLeftRadius: '0px',
        }"
    >
      <div
        :style="{
          'z-index': 1,
          top: '3.0px',
          left: '13.0px',
          bottom: '37.0px',
          width: '300px',
          position: 'absolute',
        }"
      >
        <o-layout-square-nav-menu
        >
        </o-layout-square-nav-menu>
      </div>
      <div
        :style="{
          width: '30px',
          'z-index': 2,
          right: '19.14285714285711px',
          position: 'absolute',
          top: '5.0px',
          bottom: '5.0px',
        }"
      >
        <div
        >
          <o-dropdown :options="loadContextMenu">
            <o-avatar
              :bordered="false"
              :round="true"
              size="medium"
              :src="user?.getUserInfo()?.avatar"
            >
              {{ user?.getUserInfo()?.username }}
            </o-avatar>
          </o-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { loadContextMenu } from './UserDropdown';
import { useUser } from '@oceancode/ocean-wui';

const user = useUser();
</script>