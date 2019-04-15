一款可以分享网页到饭否、推特和微博的 Chrome / Firefox 扩展。并可以从网页中提取所有图片。

<hr class="read-more" />

1. 对 OAuth 1a 与 2 的验证流程消化理解，并抽象出通用类利用模板模式支持各个平台（饭否与推特使用 OAuth 1a，微博使用 Oauth 2）。
2. 利用 `chrome.identity` 以及 content script 黑科技实现 OAuth 的无服务器自动授权。
3. UI 完全基于 [iview](https://iviewui.com) 。
4. 代码构建系统利用 webpack-chain 基于 vue-cli 展开，一键构建打包。
