
import Vue from 'vue'
import './app.scss'

const App = {
<<<<<<< HEAD
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

=======
>>>>>>> aa9bde35ccaded2f05e51e0ac41686eff1ff114a
  onShow (options) {
    console.log('App onShow.')
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
}

export default App
