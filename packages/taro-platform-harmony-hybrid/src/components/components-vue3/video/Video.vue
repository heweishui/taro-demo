<template>
  <div class="video-box">
    <embed :id="componentId" type="native/video" :width="hosWidth" :height="hosHeight" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated, defineProps, watch, emit } from 'vue'
let videoId = 0
const props = defineProps({
  hosWidth: Number,
  hosHeight: Number,
  src: String,
  controls: {
    type: Boolean,
    default: true,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
  loop: {
    type: Boolean,
    default: false,
  },
  muted: {
    type: Boolean,
    default: false,
  },
  objectFit: {
    type: String,
    default: 'contain',
  },
})

let componentId = `video_${videoId++}`
const needToUpdate = ref({ componentId })

const handleOnPlay = (e) => {
  emit('play', e)
}
const handleOnPause = (e) => {
  emit('pause', e)
}
const handleOnFinish = (e) => {
  emit('ended', e)
}
const handleOnUpdate = (e) => {
  emit('timeupdate', e)
}
const handleOnError = (e) => {
  emit('error', e)
}
const handleOnSeeked = (e) => {
  emit('seeked', e)
}
const handleOnSeeking = (e) => {
  emit('seeking', e)
}

const transferVideoProps = () => {
  const { hosWidth, hosHeight, src, controls, autoplay, loop, muted, objectFit } = props

  const properties = {
    componentId: componentId,
    width: hosWidth,
    height: hosHeight,
    src: src,
    controls: controls,
    autoPlay: autoplay,
    loop: loop,
    muted: muted,
    objectFit: objectFit,
    onPlay: handleOnPlay,
    onPause: handleOnPause,
    onFinish: handleOnFinish,
    onUpdate: handleOnUpdate,
    onError: handleOnError,
    onSeeked: handleOnSeeked,
    onSeeking: handleOnSeeking,
  }

  window?.JSBridge?.transferSameLayerArgs(properties)
}

onMounted(() => {
  transferVideoProps()
})

onUpdated(() => {
  if (Object.keys(needToUpdate.value).length > 0) {
    window?.JSBridge?.transferSameLayerArgs(needToUpdate.value)
  }
  needToUpdate.value = { componentId: componentId }
})

watch(
  () => props.hosWidth,
  (newVal) => {
    needToUpdate.value.width = newVal
  }
)
watch(
  () => props.hosHeight,
  (newVal) => {
    needToUpdate.value.height = newVal
  }
)
watch(
  () => props.src,
  (newVal) => {
    needToUpdate.value.src = newVal
  }
)
watch(
  () => props.controls,
  (newVal) => {
    needToUpdate.value.controls = newVal
  }
)
watch(
  () => props.autoplay,
  (newVal) => {
    needToUpdate.value.autoPlay = newVal
  }
)
watch(
  () => props.loop,
  (newVal) => {
    needToUpdate.value.loop = newVal
  }
)
watch(
  () => props.muted,
  (newVal) => {
    needToUpdate.value.muted = newVal
  }
)
watch(
  () => props.objectFit,
  (newVal) => {
    needToUpdate.value.objectFit = newVal
  }
)
</script>

<style lang="scss" scoped>
/* Add your scoped styles here */
.video-box {
  height: 100%;
  width: 100%;
  text-align: center;
}
</style>

<script>
import { defineComponent } from 'vue'

// 使用 setup 语法糖时，直接在导出的组件内设置 name 和 displayName 属性
export default defineComponent({
  name: 'Video',
  displayName: 'taro-video-core',
  // 在 Vue 3 中不需要显式设置 displayName 属性
})
</script>
