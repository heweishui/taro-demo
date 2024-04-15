export default defineAppConfig({
  pages: [
<<<<<<< HEAD
    'pages/index/index',
    'pages/api/api',
  ],
  window: {
    navigationBarTitleText: 'vue2 Demo',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '组件',
      },
      {
        pagePath: 'pages/api/api',
        text: 'API',
      },
    ],
  },
  debug: true,
  pageAlias: {
    index: 'pages/index/index',
    my: 'pages/my/my',
  },
})
=======
    'pages/input/index'
    // 'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
>>>>>>> aa9bde35ccaded2f05e51e0ac41686eff1ff114a
