适用于 Webpack 4 的 WebExtension Target 。利用原生 import 动态加载分块。

<hr class="read-more" />

Webpack 默认的 JSONP 机制无法在 WebExtension 的 content scripts 中动态加载分块。

相关原理见我的文章[「自定义 Webpack Target」](https://blog.crimx.com/2020/03/29/%E8%87%AA%E5%AE%9A%E4%B9%89-webpack-target/)。

这个库已经内置到 [neutrino-webextension preset](https://github.com/crimx/neutrino-webextension) 中。
