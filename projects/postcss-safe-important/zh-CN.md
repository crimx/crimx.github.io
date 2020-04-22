[PostCSS](https://github.com/postcss/postcss) 插件，安全地为 CSS 中所有样式添加 `!important` 。已被许多大型项目使用与推荐，如 [Uppy](https://github.com/transloadit/uppy/blob/23f3bf9edcd2248d7d2535a9e29dd48fd70690e7/package.json#L174)、[stylelint](https://stylelint.io/user-guide/rules/declaration-no-important/)、[vmd](https://github.com/yoshuawuyts/vmd/blob/1f220068c1bf69c02f53bb2c8ac308cba3f8ccfb/package.json#L33)、[HoverCards](https://github.com/kogg/hovercards/blob/34c4aac817bf67cbfcc98baca999bc4a21259b74/package.json#L136) 等。

<hr class="read-more" />

造这个轮子的原因有三：

1. 准确性。当时阅读了一些同类工具的源码，基本是基于正则表达式匹配的，这准确性不容易保证。PostCSS 会把 CSS 规则解析为语法树（AST），从而可以达到准确操作。
2. 安全性。不能盲目添加 `!important` ，否则可能会[破坏样式](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes#!important_in_a_keyframe)。现在有了 AST 就可以根据语义判断是否需要改变。
3. 可配置性。提供灵活的配置实现更细粒度的控制。
