<script setup lang="ts">
import { OcContext } from '@oceancode/framework' 
import { ping } from '@/api'
ping()
</script>

<template>
  <oc-context>dfs
    <RouterView />
  </oc-context>
</template>