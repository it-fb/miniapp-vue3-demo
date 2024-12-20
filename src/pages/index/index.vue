<script setup>
import { onReady } from '@dcloudio/uni-app'	
import { useCounterStore } from '@/store/counter'

const store = useCounterStore()

onReady(() => {
  console.log('onReady')
})

const handleIncrement = () => {
  store.increment()
}

const handleReset = () => {
  store.reset()
}
	
</script>
	
<template>
	<view class="center h-screen">
    <view>
      <view class="center">
        <image src="/static/logo.png" class="logo"></image>
      </view>
      <view class="button bg-primary my-lg text-center" @click="handleIncrement()">计数 +1</view>
      <view class="text-center">
        <text>当前计数：{{ store.count }}</text>
      </view>
      <view class="button bg-info my-lg text-center" @click="handleReset()">重置</view>
    </view>
	</view>
</template>

<style lang="scss" scoped>

</style>