[Neutrino 9](https://neutrinojs.org) 脚手架插件，开发跨浏览器扩展，支持热更新以及框架 devtools 调试。

<hr class="read-more" />

目前开发浏览器扩展的流程基本还是刀耕火种的方式：

- 引用的 JS 文件和样式文件需要手写到清单文件 `manifest.json` 中，不能享受打包工具的分块优化。
- 各个浏览器的扩展 API 支持不完全一致，`manifest.json` 内容也不完全相同。
- 浏览器对扩展页面访问有限制，故热更新以及框架 devtools 都不能使用。

所以针对这些问题，我设计了一套自动化解决方案，大大简化了开发流程：

- 基于 [Neutrino 9](https://neutrinojs.org) 脚手架开发插件，可以继承其众多优点：开箱即用，可配置性高（[Webpack Chain](https://github.com/neutrinojs/webpack-chain)），有丰富的生态，对各种框架、代码规范都有很好的支持。
- 通过实现一个[扩展环境模拟器](https://github.com/crimx/webextensions-emulator)在普通网页中跑扩展页面，成功支持热更新以及框架 devtools 调试。
- 不再手动配置清单文件，我编写了一个 Webpack 插件自动将打包后的各个块更新到清单相应的配置中。
- 为各个浏览器分别自动打包，自动生成不同的清单配置。
