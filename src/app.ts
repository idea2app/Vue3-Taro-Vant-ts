import './app.less';

import { createApp } from 'vue';

const App = createApp({
  onShow(options) {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

export default App;
