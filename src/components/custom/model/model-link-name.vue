<template>
  <span class="model-name" @click="handleClick">
    {{value.name}}({{ value.modelId }})
  </span>
</template>
<script setup>
import { defineProps } from 'vue'
import { useRouter } from '@oceancode/ocean-wui'
const props = defineProps({
  value: Object
})
const router = useRouter()
function handleClick(e){
  e.preventDefault();
  e.stopPropagation();
  router.open({name:'modelManager',params:{modelId:props.value.id}})
}
</script>
<style lang="scss" scoped>
.model-name{
  color:blue;
}
.model-name:hover{
  font-style: italic;
}
</style>