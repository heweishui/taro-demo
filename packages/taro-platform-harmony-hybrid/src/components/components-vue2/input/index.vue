<template>
  <div class="content" :style="style">
    <div>请输入：</div>
    <input :type="type">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class CustomInput extends Vue {
  @Prop({ type: String, required: true }) readonly type!: string;
  @Prop({ type: Object, required: true }) readonly style!: Record<string, any>;

  created() {
    console.log('component created');
  }

  mounted() {
    console.log('component mounted');
  }
}


</script>

<style>
.content {
  width: 300px;
  height: 300px;
  border: 1px solid black;  
}
</style>
