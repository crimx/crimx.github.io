专业划词扩展，其新颖的设计与实现得到大量用户的肯定与喜爱。许多用户留言评价（[谷歌留言](https://chrome.google.com/webstore/detail/cdonnmffkdaoajfknoeeecmchibpmkmg?hl=en) / [火狐留言](https://addons.mozilla.org/zh-CN/firefox/addon/ext-saladict/reviews/)）这是其用过最好用的划词扩展。

<hr class="read-more" />

功能设计的亮点，

1. 聚合多个词典的结果可以取各所长，并用统一的风格重排显示，极大地方便了交叉查阅词典。
1. 多重划词模式再结合多种情景模式能让用户快速切换，以不同方式灵活查词。
1. 生词本保留了查词的上下文并自动获取整句翻译，以保证准确理解、记忆单词。
1. 高可访问性，兼容各种复杂不一的网页，兼容 iframe 内划词，支持 PDF 划词。
1. Unix 哲学，专注查词并提供灵活的接口，[配合其它工具](https://saladict.crimx.com/manual.html#shortcuts)发挥更强大的功能。

技术实现的亮点，

1. 大量使用 [React Hooks](https://reactjs.org/docs/hooks-intro.html) 为组件复用异步交互逻辑，利用 [RxJS](https://github.com/ReactiveX/rxjs) 处理复杂的用户输入，同时为此开发出另一项目 [observable-hooks](https://github.com/crimx/observable-hooks)。
1. 使用 [Storybook](https://storybook.js.org) 开发组件，在可视化环境中快速调试。
1. 在 React 上使用 [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) 以较低成本隔离词典面板以及各个词典的样式。
1. 整合词典结果需要理解不同词典网页的设计，并从中总结出规律，稳定地为用户提炼展现有用的信息。对于多年没有更新的[有道网页翻译](http://fanyi.youdao.com/web2/)，经过 [Saladict](https://github.com/crimx/ext-saladict) 的修改整合已支持 https 网页翻译。
1. 自动化构建脚本，为此开发出专用脚手架插件 [neutrino-webextension](https://github.com/crimx/neutrino-webextension)。代码结构多层抽象，添加词典采用插件式机制载入。
