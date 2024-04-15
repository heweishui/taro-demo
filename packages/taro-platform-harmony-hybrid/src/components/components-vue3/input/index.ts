import { ref } from 'vue'

export default {
  setup () {
    const data = ref('')
    const emit = defineEmits(['onkeydown'])
    const props = defineProps({
      title: {
        type: String, // 指定类型为字符串
        default: '标题', // 设置默认值
      },
      type: {
        type: String, // 指定类型为字符串
        default: 'text', // 设置默认值
      },
    })

    const onkeydown = (e) => {
      if (e.key === 'Enter') {
        emit('onkeydown', data.value)
      }
    }
    return { data, emit, props, onkeydown }
  },
  template: `
  <div class="container">
        <h3>{{ props.title }}：</h3>
        <input :type="props.type" v-model="data" @keydown="onkeydown">
        <slot></slot>
    </div>
  `,
}
