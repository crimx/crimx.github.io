--- 
layout:   post
title:    CSS 自适应正方形
tagline:  "&quot;Work hard to get what you like otherwise you will be forced to like what you get !&quot;"
tags: 
- CSS

description: "纯 CSS 的自适应正方形"
---

[padding 使用百分数值时是根据其包含块的 width 值计算的。][padding-mdn]

> With respect to the width of the containing block.

所以可以利用 `height = 0;` 并用 `padding-bottom = 100%;` 撑起一个正方形：

<p data-height="268" data-theme-id="12707" data-slug-hash="VYdMWJ" data-default-tab="result" data-user="Crimx" class='codepen'>See the Pen <a href='http://codepen.io/Crimx/pen/VYdMWJ/'>CSS Responsive Square</a> by Jesse Wong (<a href='http://www.crimx.com/'>@Crimx</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

{% highlight html %}
<div class="container">
  <div class="spacer"></div>
  <div class="content">item</div>
</div>
{% endhighlight %}

{% highlight css %}
.container {
  position: relative;
  width: 20%;
}

.spacer {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background: orange;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
}
{% endhighlight %}

参考资料
--------

- [CSSだけで正方形を作る](http://qiita.com/usp/items/96f3cf9997ebb5b3dbb9)
- [padding - CSS | MDN][padding-mdn]


[padding-mdn]: https://developer.mozilla.org/en-US/docs/Web/CSS/padding#Syntax 
