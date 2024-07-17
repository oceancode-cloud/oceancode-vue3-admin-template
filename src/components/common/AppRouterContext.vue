<template>
  <router-view v-slot="{Component}">
    <o-context>
      <keep-alive v-if="$route.meta && $route.meta.keepAlive">
        <component :is="Component"></component>
      </keep-alive>
      <router-view v-else></router-view>
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