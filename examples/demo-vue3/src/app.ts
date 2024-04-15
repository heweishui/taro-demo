
import { createApp } from 'vue'
import './app.scss'

const App = createApp({
<<<<<<< HEAD
  mounted () {
    console.log('App mounted.')
  },

  // 对应 onLaunch
  onLaunch () {
    console.log('App onLaunch.')
  },

  // 对应 onHide
  onHide () {
    console.log('App onHide.')
  },
=======
>>>>>>> aa9bde35ccaded2f05e51e0ac41686eff1ff114a
  onShow (options) {
    console.log('App onShow.')
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export default App
