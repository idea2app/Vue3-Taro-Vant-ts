# Vue3-Taro-Vant.ts

[Vue 3][1] 跨端应用脚手架（基于 [TypeScript][2]、[Taro 引擎][3] 和 [Vant 组件库][4]）

[![CI & CD](https://github.com/idea2app/Vue3-Taro-Vant-ts/actions/workflows/main.yml/badge.svg)][5]

[![用 GitHub Codespaces 开发](https://github.com/codespaces/badge.svg)][6]
[![用 Gitpod 开发](https://gitpod.io/button/open-in-gitpod.svg)][7]

## HTML 5 演示

https://idea2app.github.io/Vue3-Taro-Vant-ts/

## 技术栈

- 编程语言: [TypeScript 5][2]
- 组件引擎: [Vue 3][1]
- 组件库: [Vant 2][4]
- CI / CD: GitHub [Actions][8] + [Pages][9]

## 本地开发

### 安装依赖

```shell
npm i pnpm -g
pnpm i
```

### 启动服务

```shell
pnpm dev weapp
```

### 小程序调试

#### Windows

```shell
winget install Tencent.WeixinDevTools
winget install Tencent.qq-devtool
winget install Alibaba.MiniProgramStudio
winget install ByteDance.DouyinIDE
winget install Baidu.SwanIDE
```

#### Mac OS X

```shell
brew install --cask wechatwebdevtools
```

## 部署

```shell
pnpm build weapp
```

[1]: https://v3.cn.vuejs.org/
[2]: https://www.typescriptlang.org/zh/
[3]: https://taro.jd.com/
[4]: https://vant-contrib.gitee.io/vant-weapp/
[5]: https://github.com/idea2app/Vue3-Taro-Vant-ts/actions/workflows/main.yml
[6]: https://codespaces.new/idea2app/Vue3-Taro-Vant-ts
[7]: https://gitpod.io/?autostart=true#https://github.com/idea2app/Vue3-Taro-Vant-ts
[8]: https://github.com/features/actions
[9]: https://pages.github.com/
