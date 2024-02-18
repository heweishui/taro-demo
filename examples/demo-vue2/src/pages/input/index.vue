<template>
  <view class="container">
    <image class="image" :style="style"
      src='https://oss-vcg6.xpccdn.com/prod/demo/photo/no_water/F0sqZlz37a1JAH3-%E8%93%9D%E5%A4%A9%E5%92%8C%E7%99%BD%E4%BA%91%E7%9A%84%E8%83%8C%E6%99%AF.jpg?x-oss-process=style%2Fstock_photo_watermark'>
    </image>
    <input type="text" :style="style">
  </view>
</template>
  
<script>
export default {
  data () {
    return {
      style: {
        width: "300px",
        height: "300px"
      }
    }
  }
}
</script>
<style scoped>
.container .image {
  width: "300px";
  height: "300px"
}
</style>