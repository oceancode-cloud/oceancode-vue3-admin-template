<template>
  <router-view v-slot="{Component}">
    <o-context ref="contextRef">
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
import { ref,watch } from 'vue'
import { useRouter} from 'vue-router'
const contextRef = ref()
const router = useRouter()
watch(
  () => router.currentRoute.value,
  (newValue: any) => {
    if(!newValue.meta || !newValue.meta.keepAlive){
      contextRef.value && contextRef.value.clearAll()
    }
  },
  { immediate: true }
)
</script>