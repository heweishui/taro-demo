export default defineAppConfig({
  pages: [
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