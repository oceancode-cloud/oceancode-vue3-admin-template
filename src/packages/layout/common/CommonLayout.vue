<!-- Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved. -->

<template>
  <div
    >
    <o-admin-layout :show-menu="showMenu" :menus="()=>loadMenuMethod(route)">
      <template #header>
        <Header></Header>
      </template>
      <template #menu>
        <o-layout-menu></o-layout-menu>
      </template>
      <slot>
        <app-router-context></app-router-context>
      </slot>
    </o-admin-layout>
  </div>
</template>
<script lang="ts" setup>
import Header from './common-layout/Header.vue';
import { loadMenuMethod } from './common-layout';
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  showMenu: {
    type: Boolean,
    default: true,
  },
});

const route = useRoute();
</script>