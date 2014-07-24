http://quickleft.com/blog/18-surprises-from-reading-jquery-s-source-code
18 Surprises From Reading jQuery's Source Code


阅读 jQuery 源码的18个惊喜

我热爱 jQuery，且尽管我认为自己算是一名高级 JavaScript 开发者，我从来没有试过由头到尾把 jQuery 的源码看一遍，直到现在。这里分享一些我一路下来学到的东西：

注意：我使用 `$.fn.method()` 语法来表示调用一组匹配元素的方法。比如当我说 `$.fn.addClass`，则表示 `$('div').addClass('blue')` 或者 `$('a.active').addClass('in-use')` 此类的用法。`$.fn` 是 jQuery 包装元素的原型。

1. **Sizzle 的权重：**[Sizzle](http://sizzlejs.com/) 是 jQuery 用于在 DOM 找元素的的选择器引擎，基于 CSS 选择器。正是它将 `$('div.active')` 转换成可操作的元素数组。我知道 Sizzle 占了 jQuery 相当大的部分，但它的庞大还是吓到了我。按行数来说它很无疑是 jQuery 中唯一最庞大的特性。我估计它占了总代码库的 22%，而第二大的特性—— `$.ajax` 只占了 8%。

2. **$.grep：**[这个方法](http://api.jquery.com/jquery.grep/)与 Underscore 的 `_.filter` 类似。接受两个参数，一个元素数组和一个函数，对每个元素依次执行函数，返回执行结果为 true 的元素数组。

3. **冒泡禁令：**jQuery 明文禁止 `load` 事件冒泡。从内部看，jQuery 在所有的 `load` 事件中传入特殊的 `noBubble: true` 标记，所以 `image.load` 事件才不会冒泡到 `window` 上错误地触发 `window.load` 事件。

4. **默认动画速度：**jQuery 通过快速连续地改变样式属性来实现元素动画效果。每一次小改变被称作一个 `tick`。默认动画速度是每13毫秒运行一次 `tick`，要改变速度你可以重写 `jQuery.fx.interval` 成你想要的整数。

5. **fn.addClass 可以接受函数：**我们通常向 `$.fn.addClass` 提供一个包含类名的字符串来创建元素。但它也可以接受一个函数。这个函数必须返回一个字符串，多个类名间要以空格隔开。这里还有个彩蛋，这个函数接受已匹配元素的索引作为参数，你可以用这个特性来构造智能变化的类名。

6. **fn.removeClass 也一样：**与上文的一样，它也可以接受一个函数。这个函数也会自动接收元素的索引。

7. **:empty 伪选择器：**可以方便地用来匹配没有孩子的元素。

8. **:lt 与 :gt 伪选择器：**它们会根据元素在匹配集合中的索引来匹配元素。比如 `$('div:gt(2)')` 会返回所有的 `div`，除了前三个（从0开始）。如果你传入一个负数，它会倒过来从尾开始数。

9. **$(document).ready() 的承诺：** jQuery 貌似是用回了自己的东西。在内部，可信赖的 `$(document).ready()` 使用了一个 jQuery 延迟来确定 DOM 在什么时候完全加载。

10. **$.type：** 大家肯定能熟练使用 `typeof` 来确定数据类型，但你知不知道 jQuery 提供了一个 `.type()` 方法？jQuery 版比原生版更加智能。比如 `typeof (new Number(3))` 返回 `object`，而 `$.type(new Number(3))` 则返回 `number`。更新：正如 ShirtlessKirk 在评论中指出，`$.type` 返回其对象的 `.valueOf()` 属性。所以更准确的说法应该是 `$.type` 告诉你一个对象的返回值的类型。

