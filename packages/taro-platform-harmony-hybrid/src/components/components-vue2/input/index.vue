<template>
  <div class="content">
    <div>{{ title }}：</div>
    <input :type="type" :value="value" @input="updateMessage($event.target.value)">
  </div>
</template>

<script lang="ts">
import Vue from 'vue2';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class CustomInput extends Vue {
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
  height: 100px;
  border: 1px solid black;
  padding: 10px 20px;
}
</style>
