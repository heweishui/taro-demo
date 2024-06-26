const path = require('path')

const config = {
  projectName: 'mini-program-example',
  date: '2023-6-15',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
<<<<<<< HEAD
  outputRoot: `dist/spa/main`,
=======
  outputRoot: `dist/${process.env.TARO_ENV}`,
>>>>>>> aa9bde35ccaded2f05e51e0ac41686eff1ff114a
  plugins: [],
  alias: {
    '@/util': path.resolve(__dirname, '..', 'src/util'),
    '@/styles': path.resolve(__dirname, '..', 'src/styles'),
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/components': path.resolve(__dirname, '..', 'src/components'),
  },
  defineConstants: {
    LOCATION_APIKEY: JSON.stringify('LH2BZ-LKR35-HMEI3-IUQDI-47R65-TEFYL')
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  compiler: 'webpack5',
  cache: {
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    imageUrlLoaderOption:{
      limit:8192
    }
  },
  h5: {
<<<<<<< HEAD
    publicPath: '/spa/main/',
=======
    publicPath: '/',
>>>>>>> aa9bde35ccaded2f05e51e0ac41686eff1ff114a
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    imageUrlLoaderOption:{
      limit:8192
    }
  },
  rn: {
    appName: 'taroDemo',
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
