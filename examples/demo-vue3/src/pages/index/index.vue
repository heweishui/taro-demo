<template>
  <view class="index">
    <text>{{ msg }}</text>
<<<<<<< HEAD
    <video
    id="video"
    src="https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
    poster="https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg"
    initial-time="0"
    :controls="true"
    :autoplay="false"
    :loop="false"
    :muted="false"
  />
  </view>
</template>

<script setup>
import { ref } from 'vue'
import './index.scss'
  const msg = ref('Hello world')
=======
  </view>
</template>

<script>
import { ref } from 'vue'
import './index.scss'

export default {
  setup () {
    const msg = ref('Hello world')
    return {
      msg
    }
  }
}
>>>>>>> aa9bde35ccaded2f05e51e0ac41686eff1ff114a
</script>
