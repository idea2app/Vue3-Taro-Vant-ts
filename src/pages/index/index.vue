<template>
  <view class="index">
    <Icon v-if="isH5" name="chat" color="red" />
    <van-icon v-else name="chat" color="red" />
    <Button v-if="isH5" type="primary" @click="echo">主要按钮</Button>
    <van-button v-else type="primary" @click="echo">主要按钮</van-button>
    <text>{{ msg }}</text>
  </view>
</template>

<script setup>
import './index.less';

import { Button, Icon } from 'vant';
import { ref } from 'vue';

import { isH5 } from '../../utility';

const msg = ref('Hello world');
const echo = event => console.info(event);
</script>
