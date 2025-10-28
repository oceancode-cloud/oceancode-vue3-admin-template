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

</script>