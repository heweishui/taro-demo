<template>
  <div class="content">
    <div>{{ title }}：</div>
    <input :type="type" :value="value" @input="updateMessage($event.target.value)">
  </div>
</template>

<script lang="ts">
import Vue2 from 'vue2';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class CustomInput extends Vue2 {
  @Prop({ type: String, required: true }) readonly type!: string;
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: Boolean, required: false }) readonly isShow!: boolean;
  @Prop() value!: string;

  created () {
    console.log('component created');
  }

  mounted () {
    console.log('component mounted');
  }

  updateMessage (value: string) {
    this.$emit('input', value)
  }

}

</script>

<style>
.content {
  width: 300px;
  height: 180px;
  padding: 10px 20px;
}
</style>
