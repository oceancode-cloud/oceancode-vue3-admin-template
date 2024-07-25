<template>
  <o-root-context>
    <AppContext>
      <n-message-provider>
        <app-router></app-router>
        <MessageContent></MessageContent>
      </n-message-provider>
    </AppContext>
  </o-root-context>
</template>
<script setup>
import { AppContext,MessageContent } from '@/components';
</script>