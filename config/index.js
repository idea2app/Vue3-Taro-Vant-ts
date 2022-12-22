const { resolve } = require('path');

const { usingComponents } = require('../src/app.config');

const config = {
  projectName: 'Vue3-Taro-Vant-ts',
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
    '@/vant': resolve(__dirname, '../src/components/vant-weapp/dist')
  },
  copy: {
    patterns:
      process.env.TARO_ENV === 'h5'
        ? [{ from: 'public', to: 'dist' }]
        : ['van-wxs', 'van-common', ...Object.keys(usingComponents)]
            .map(name => {
              const [scope, tag] = name.split('-');

              if (scope !== 'van') return;

              const path = `components/vant-weapp/dist/${tag}`;

              return { from: `src/${path}`, to: `dist/${path}` };
            })
            .filter(Boolean),
    options: {}
  },
  framework: 'vue3',
  compiler: 'webpack5',
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
    publicPath: '/',
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
