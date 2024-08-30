<template>
  <router-view v-slot="{Component}">
    <o-context ref="contextRef">
      <keep-alive v-if="$route.meta && $route.meta.keepAlive">
        <component :is="Component" :layout="layout"></component>
      </keep-alive>
      <component :is="Component" v-else :layout="layout"></component>
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
import { useLayout } from '@oceancode/ocean-wui'
const contextRef = ref()
const router = useRouter()
const layout = useLayout()
watch(
  () => router.currentRoute.value,
  (newValue: any) => {
    if(!newValue.meta || !newValue.meta.keepAlive){
      contextRef.value && contextRef.value.clearAll()
    }
    if(layout){
      layout.setSelectMenuByPath(newValue.name)
    }
  },
  { immediate: true }
)
if(layout){
  layout.onSelectMenu(({data})=>{
    if(data &&data.router){
      router.push(data.router)
    }
  })
}
</script>