<template>
    <div class="container">
        <h3>{{ props.title }}：</h3>
        <input :type="props.type" v-model="data" @keydown="onkeydown">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const data = ref('');
const emit = defineEmits(['onkeydown']);
const props = defineProps({
    title: {
        type: String,
        default: '标题',
    },
    type: {
        type: String,
        default: 'text',
    },
});

const onkeydown = (e) => {
    if (e.key === 'Enter') {
        emit('onkeydown', data.value);
    }
};
</script>

<style>
.container {
    width: 90vw;
    height: 10vh;
    background-color: #eee;
}
</style>