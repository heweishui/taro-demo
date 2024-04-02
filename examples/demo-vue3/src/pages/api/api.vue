<template>
    <view class="index">
        <text>{{ msg }}</text>
    </view>
</template>

<script setup>
import { ref } from 'vue'
import { useLoad, useReady, useDidHide, useUnload, useResize, useReachBottom } from '@tarojs/taro'
import './api.scss'
const msg = ref('Composition API')
useLoad(() => {
    console.log('useLoad')
})
useReady(() => {
    console.log('useReady')
})
useDidHide(() => {
    console.log('useDidHide')
})
useUnload(() => {
    console.log('useUnload')
})
useResize((res) => {
    console.log("windowWidth",res.size.windowWidth)
    console.log("windowHeight",res.size.windowHeight)
})
useReachBottom(() => {
    console.log('useReachBottom')
})
</script>
