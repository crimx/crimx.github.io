基于 NUXT 生成的静态网站。

<hr class="read-more" />

利用 SSR （服务器渲染）为每个路由生成了静态页面，故打开页面无需加载 JavaScript 即可开始渲染 DOM ，待 JavaScript 加载完成后由 Vue 接管 DOM 以及 Vue-router 接管路由跳转。

使用了 nuxt-i18n 自动生成多语言路由，动态加载，每个项目的富文本介绍用 Markdown 编写，使用 [markdown-loader](https://github.com/peerigon/markdown-loader) 转换为 HTML 加载。
