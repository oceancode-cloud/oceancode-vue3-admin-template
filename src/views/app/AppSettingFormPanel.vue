<!-- Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved. -->

<template>
  <div
    >
    <div
      :style="{
        'z-index': 0,
        top: '0.0px',
        left: '0.0px',
        width: '229px',
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
        {{ global.currentMenu.name }}
      </o-text>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useGlobal } from '@/store';

const global = useGlobal();
</script>