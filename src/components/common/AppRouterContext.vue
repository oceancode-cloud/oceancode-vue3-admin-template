<template>
  <router-view v-slot="{Component}" v-if="$route.meta && $route.meta.keepAlive">
    <keep-alive>
      <o-context>
        <component :is="Component"></component>
      </o-context>
    </keep-alive>
  </router-view>
  <router-view v-else></router-view>
</template>
<script lang="ts">
export default {
  name:'AppRouterContext'
}
</script>
<script lang="ts" setup>
</script>