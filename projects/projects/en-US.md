NUXT based static website.

<hr class="read-more" />

With SSR generated static pages, DOM can be rendered before JavaScript loading, after which Vue will take over DOM manipulation and routing is controled by Vue-router.

为项目介绍抽象出共用部分，实现组件复用，每个项目介绍只需简单配置即可添加。

Common parts of each project description are abstracted and resued. Adding a new project description can be achieved with minimum configuration.

Nuxt-i18n overrides Nuxt default routes and adds locale prefixes to every URL. Description of each project is written in Markdown and transformed to HTML via [markdown-loader](https://github.com/peerigon/markdown-loader).
