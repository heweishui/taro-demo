<template>
  <view class="index">
    <text>{{ msg }}</text>
    <!-- <video :style="{ height: '300px' , marginTop: '100px' }"
      src='https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
      controls autoplay={false} initialTime='0' id='video' loop={false} muted={false} /> -->
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
</script>
