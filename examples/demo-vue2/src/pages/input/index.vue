<template>
  <view class="container">
    <input type="text" :title="title"  v-model="inputValue">
    <p>输入框的值为: {{ inputValue }}</p>
  </view>
</template>
  
<script>
export default {
  data () {
    return {
      title:"姓名",
      isShow:true,
      inputValue:''
    }
  },
}
</script>
<style scoped>
.container .image {
  width: "300px";
  height: "300px"
}
</style>