<template>
  <div class="content" :style="style">
    <div>请输入：</div>
    <input :type="type">
  </div>
</template>
  
<script lang="ts">
import { defineComponent} from 'vue';

export default defineComponent({
  props: {
    type: { type: String, required: true },
    style: { type: Object, required: true },
  },
  data () {
    return {
      
    };
  },
  created(){
    console.log('image created')
  },
  mounted(){
    console.log('image mounted')
  }
});
</script>
<style>
.content {
  width: 300px;
  height: 300px;
  border:'1px solid black'  
}
</style>