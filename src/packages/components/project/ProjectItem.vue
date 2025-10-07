<!-- Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved. -->

<template>
  <div
    >
    <div
        :style="{
          border: '1px solid #F3F4F6FF',
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.03)',
          borderBottomLeftRadius: '8px',
          width: '444.99999999999994px',
          borderBottomRightRadius: '8px',
          borderTopRightRadius: '8px',
          position: 'relative',
          height: '153.3px',
          borderTopLeftRadius: '8px',
        }"
    >
      <div
        :style="{
          'z-index': 1,
          top: '19.0px',
          left: '17.0px',
          width: '396px',
          position: 'absolute',
          height: '29px',
        }"
      >
        <o-text
          :font-weight="600"
          color="#000"
          text-align="left"
          type="text"
        font-size="18px"
        :text-style="{
          fontSize:'18px',
        }"
        >
          {{ name }}
        </o-text>
      </div>
      <div
        :style="{
          'z-index': 3,
          top: '68.0px',
          left: '17.0px',
          width: '396px',
          position: 'absolute',
          height: '19px',
        }"
      >
        <o-text
          :font-weight="400"
          color="#71757f"
          text-align="left"
          type="text"
          :lines="3"
        font-size="12px"
        :text-style="{
          fontSize:'12px',
        }"
        >
          {{ description }}
        </o-text>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
});

</script>