<template>
  <view class="index">
    <van-icon name="chat" color="red" />
    <van-button type="primary">主要按钮</van-button>
    <text>{{ msg }}</text>
  </view>
</template>

<script setup>
import './index.less';

import { ref } from 'vue';

const msg = ref('Hello world');
</script>
