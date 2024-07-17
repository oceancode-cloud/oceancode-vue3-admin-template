<template>
  <router-view v-slot="{Component}">
    <o-context>
      <keep-alive v-if="$route.meta && $route.meta.keepAlive">
        <component :is="Component"></component>
      </keep-alive>
      <component :is="Component" v-else></component>
    </o-context>
  </router-view>
</template>
<script lang="ts">
export default {
  name:'AppRouterContext'
}
</script>
<script lang="ts" setup>
</script>