
import Vue from 'vue'
import './app.scss'

const App = {
  mounted() {
    console.log('App mounted.')
  },

  // 对应 onLaunch
  onLaunch() {
    console.log('App onLaunch.')
  },

  // 对应 onShow
  onShow(options) {
    console.log('App onShow.')
  },

  // 对应 onHide
  onHide() {
    console.log('App onHide.')
  },

  onShow (options) {
    console.log('App onShow.')
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
}

export default App
