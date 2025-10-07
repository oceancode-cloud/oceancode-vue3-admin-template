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
          height: '124px',
          borderTopLeftRadius: '8px',
        }"
    >
      <div
        :style="{
          'z-index': 1,
          top: '18.0px',
          left: '78.0px',
          width: '346px',
          position: 'absolute',
          height: '27px',
        }"
      >
        <o-text
          :font-weight="600"
          color="#000"
          text-align="left"
          type="text"
        font-size="16px"
        :text-style="{
          fontSize:'16px',
        }"
        >
          {{ name }}
        </o-text>
      </div>
      <div
        :style="{
          'z-index': 3,
          top: '42.0px',
          left: '19.0px',
          width: '32px',
          position: 'absolute',
          height: '32px',
        }"
      >
        <o-image
          src="https://cs-res-1258344699.file.myqcloud.com/workspace/assets/icons/deepseek.svg"
          :width="32.0"
          :height="32.0"
        >
        </o-image>
      </div>
      <div
        :style="{
          'z-index': 3,
          top: '60.0px',
          left: '78.0px',
          width: '346px',
          position: 'absolute',
          height: '21px',
        }"
      >
        <o-text
          :font-weight="400"
          color="rgba(154, 156, 161, 1)"
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
  img: {
    type: String,
    default: '',
  },
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