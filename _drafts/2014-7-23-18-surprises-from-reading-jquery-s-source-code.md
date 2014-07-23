http://quickleft.com/blog/18-surprises-from-reading-jquery-s-source-code
18 Surprises From Reading jQuery's Source Code


阅读 jQuery 源码的18个惊喜

我热爱 jQuery，且尽管我认为自己算是一名高级 JavaScript 开发者，我从来没有试过由头到尾把 jQuery 的源码看一遍，直到现在。这里分享一些我一路下来学到的东西：

注意：我使用 `$.fn.method()` 语法来表示调用一组匹配元素的方法。比如当我说 `$.fn.addClass`，则表示 `$('div').addClass('blue')` 或者 `$('a.active').addClass('in-use')` 此类的用法。`$.fn` 是 jQuery 包装元素的原型。

1. **Sizzle 的权重：**[Sizzle](http://sizzlejs.com/) 是 jQuery 用于在 DOM 找元素的的选择器引擎，基于 CSS 选择器。正是它将 `$('div.active')` 转换成可操作的元素数组。我知道 Sizzle 占了 jQuery 相当大的部分，但它的庞大还是吓到了我。按行数来说它很无疑是 jQuery 中唯一最庞大的特性。我估计它占了总代码库的 22%，而第二大的特性—— `$.ajax` 只占了 8%。

2. **$.grep：**[这个方法](http://api.jquery.com/jquery.grep/)与 Underscore 的 `_.filter` 类似。接受两个参数，一个元素数组和一个函数，对每个元素依次执行函数，返回执行结果为 true 的元素数组。

