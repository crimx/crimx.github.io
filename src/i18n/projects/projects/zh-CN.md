利用实现这个项目本身的机会尝试了手动配置 Vue + Vue-router + Vue SSR + Vue-i18n 的搭配。

<hr class="read-more" />

利用 SSR （服务器渲染）为每个路由生成了静态页面，故打开页面无需加载 JavaScript 即可开始渲染 DOM ，待 JavaScript 加载完成后由 Vue 接管 DOM 以及 Vue-router 接管路由跳转。

整个的项目配置基于 [Vue-cli](https://cli.vuejs.org) 提供的 [Webpack Chain](https://github.com/neutrinojs/webpack-chain) 接口，无需 eject 即可一直享受 Vue-cli 的更新。

使用 [markdown-loader](https://github.com/peerigon/markdown-loader) 动态加载大段富文本的项目介绍，编写十分方便。
