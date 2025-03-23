// @ts-check
/** @typedef {import('@tarojs/taro').Config} TaroConfig */

/** @type TaroConfig */
module.exports = {
  usingComponents: {
    'van-button': '@/vant/button/index',
    'van-icon': '@/vant/icon/index'
  },
  pages: ['pages/index/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
};
