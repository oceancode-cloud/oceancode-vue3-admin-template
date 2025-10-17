<template>
  <o-space vertical>
    <div>
      <o-switch v-model="visibleVal" :on-update-value="handleUpdateValue"></o-switch>
    </div>
    <!-- <div v-if="visibleVal">
      除以下页面外
    </div> -->
    <!-- <div v-if="visibleVal">
      <PageSelect multiple style="min-width:200px" v-model="excludePages" :types="[PageType.PageType.PAGE]" :on-update-value="handleUpdateSelectPages"></PageSelect>
    </div> -->
  </o-space>
</template>

<script setup>
import { defineProps,ref } from 'vue'
import { PageSelect } from '@/components'
import { PageType } from 'ocean-admin-api/models/page/PageType'
const props =defineProps({
  value:Object,
  onUpdateValue:Function,
  onPages:Function,
  excludePages:Array
})
const visibleVal = ref(props.value.visible)
const excludePages = ref([])

if(props.excludePages){
  excludePages.value = props.excludePages.map(e=>e+'')
}

function handleUpdateValue(val){
  props.onUpdateValue(val)
}

function handleUpdateSelectPages(val){
  props.onPages(val)
}
</script>