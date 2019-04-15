一款实用、美观的 Chrome / Firefox 划词扩展，其设计与实现得到大量用户的肯定。许多用户[留言评价](https://chrome.google.com/webstore/detail/cdonnmffkdaoajfknoeeecmchibpmkmg?hl=en)这是其用过最好用的划词扩展。

<hr class="read-more" />

在功能设计上，

1. 聚合多个词典的结果可以取各所长，并用统一的风格重排显示，极大地方便了交叉查阅词典。
1. 多重划词模式再结合多种情景模式能让用户快速切换，以不同方式灵活查词。
1. 生词本保留了查词的上下文并自动获取整句翻译，以保证准确理解、记忆单词。
1. 高可访问性，兼容各种复杂不一的网页，兼容 iframe 内划词，支持 PDF 划词。

在技术实现上，

1. 利用 [RxJS](https://github.com/ReactiveX/rxjs) 处理复杂的用户输入。
1. 查词面板是植入到网页中去的，使用 iframe 进行隔离，并结合 [React Portal](https://reactjs.org/docs/portals.html) 使到 iframe 内的事件通过 [SyntheticEvent](https://reactjs.org/docs/events.html) 直接冒泡出来，在 React 角度看仿佛就是操作同一个页面。
1. 整合词典结果需要理解不同词典网页的设计，并从中总结出规律，稳定地提取出需要的信息；还需要阅读理解混淆的代码，如多年没有更新的[有道网页翻译](http://fanyi.youdao.com/web2/)，经过 [Saladict](https://github.com/crimx/ext-saladict) 的整合已支持 https 网页翻译。
1. HTML 设计考虑到了可用性与可访问性，并兼容 [Vimium](https://github.com/philc/vimium) 全键盘操作。
1. 自动化构建脚本，代码结构多层抽象，添加词典采用插件式机制载入。
