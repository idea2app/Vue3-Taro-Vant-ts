const path = require('path');

const config = {
  projectName: 'Vue3-Taro-MobX-Vant-ts',
  date: '2021-11-20',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: ['@tarojs/plugin-html'],
  defineConstants: {},
  alias: {
    '@/vant': path.resolve(__dirname, '../src/components/vant-weapp/dist')
  },
  copy: {
    patterns: [
      {
        from: 'src/components/vant-weapp/dist/wxs',
        to: 'dist/components/vant-weapp/dist/wxs'
      },
      {
        from: 'src/components/vant-weapp/dist/common/style',
        to: 'dist/components/vant-weapp/dist/common/style'
      },
      {
        from: 'src/components/vant-weapp/dist/common/index.wxss',
        to: 'dist/components/vant-weapp/dist/common/index.wxss'
      },
      {
        from: 'src/components/vant-weapp/dist/button/index.wxs',
        to: 'dist/components/vant-weapp/dist/button/index.wxs'
      },
      {
        from: 'src/components/vant-weapp/dist/icon/index.wxs',
        to: 'dist/components/vant-weapp/dist/icon/index.wxs'
      },
      {
        from: 'src/components/vant-weapp/dist/loading/index.wxs',
        to: 'dist/components/vant-weapp/dist/loading/index.wxs'
      },
      {
        from: 'src/components/vant-weapp/dist/calendar/index.wxs',
        to: 'dist/components/vant-weapp/dist/calendar/index.wxs'
      },
      {
        from: 'src/components/vant-weapp/dist/calendar/utils.wxs',
        to: 'dist/components/vant-weapp/dist/calendar/utils.wxs'
      },
      {
        from: 'src/components/vant-weapp/dist/calendar/calendar.wxml',
        to: 'dist/components/vant-weapp/dist/calendar/calendar.wxml'
      },
      {
        from: 'src/components/vant-weapp/dist/calendar/components/month/index.wxs',
        to: 'dist/components/vant-weapp/dist/calendar/components/month/index.wxs'
      }
    ],
    options: {}
  },
  framework: 'vue3',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: [/van-/]
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
    }
  },
  h5: {
    publicPath: '.',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
