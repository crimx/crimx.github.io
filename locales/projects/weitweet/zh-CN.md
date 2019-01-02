[![Github Stars][img-gh-stars]][gh-stars]
[![Chrome Web Store][img-chrome-dl]][cws]
[![Chrome Web Store][img-chrome-rating]][cws]
[![Mozilla Add-on][img-firefox-dl]][amo]
[![Mozilla Add-on][img-firefox-rating]][amo]

[img-gh-stars]: https://img.shields.io/github/stars/crimx/crx-weitweet.svg?label=Stars&style=social
[gh-stars]: https://github.com/crimx/crx-weitweet

[img-chrome-dl]: https://img.shields.io/chrome-web-store/d/jcgjbjbbcjgkpdanbnafdbdlbjacdkln.svg?maxAge=3600&colorB=1a73e8&label=Chrome%20downloads
[img-chrome-rating]: https://img.shields.io/chrome-web-store/rating/jcgjbjbbcjgkpdanbnafdbdlbjacdkln.svg?maxAge=3600&colorB=1a73e8&label=rating
[cws]: https://chrome.google.com/webstore/detail/jcgjbjbbcjgkpdanbnafdbdlbjacdkln?hl=en

[img-firefox-dl]: https://img.shields.io/amo/d/weitweet.svg?maxAge=3600&colorB=ff9500&label=Firefox%20downloads
[img-firefox-rating]: https://img.shields.io/amo/rating/weitweet.svg?maxAge=3600&colorB=ff9500&label=rating
[amo]: https://addons.mozilla.org/firefox/addon/weitweet/


一款可以分享网页到饭否、推特和微博的 Chrome / Firefox 扩展。并可以从网页中提取所有图片。

<hr class="read-more" />

1. 对 OAuth 1a 与 2 的验证流程消化理解，并抽象出通用类利用模板模式支持各个平台（饭否与推特使用 OAuth 1a，微博使用 Oauth 2）。
2. 利用 `chrome.identity` 以及 content script 黑科技实现 OAuth 的无服务器自动授权。
3. UI 完全基于 [iview](https://iviewui.com) 。
4. 代码构建系统利用 webpack-chain 基于 vue-cli 展开，一键构建打包。
