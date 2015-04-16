--- 
layout:   post
title:    CSS Position 与物种进化
tagline:  "&quot;There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.&quot; — Ernest Hemingway"
tags: 
- CSS

description: "从进化的角度看 CSS Position 是一件很有趣的事情，可以帮助我记忆理解 Position 的各种取值。"
---

从进化的角度看 CSS Position 是一件很有趣的事情，可以帮助我记忆理解 Position 的各种取值。

CSS Position 暂时共有 5 个值，`static`, `relative`, `absolute`, `fixed` 和 `inherit`。`inherit` 就是继承父元素的属性，没什么好说，所以我将前 4 个看作进化的 4 个阶段。

Static 阶段
===========

这是各个盒子的默认原始状态，就像在深海中随意遨游的小鱼。

旁白：可以把 Static 与其它 3 个划分为互不相干的两派。

Relative 阶段
=============

深海中小鱼看到海面上投下来的光芒，好奇地获得了 `z-index` 技能，开始向上游。上岸的小鱼变成了蜥蜴，蜥蜴开始交配生蛋了。小蜥蜴在蛋壳里获得了 `top`, `left`, `bottom`, `right` 技能。

旁白：Relative 阶段比 Static 阶段多了 2 样东西，`z-index` 和 `top`, `left`, `bottom`, `right`。

1. 有了 `z-index` 的盒子就会比 Static 的盒子的上面（垂直于屏幕的方向），`z-index` 默认为 0 ，相同 `z-index` 的盒子后来居上。

2. Relative 阶段的 `top`, `left`, `bottom`, `right` 代表的是盒子相对自己原来位置的偏移，上下、左右有冲突就取上和左（阿拉伯文[之类的](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)取右）。注意是整个盒子，所以 `margin` 也算在里面。  
   ![relative positioning]({{ site.at_path }}/2015-04-16-css-position-and-species-evolution/relative-positioning.png)

Absolute 阶段
=============

进化到人类，已经没有蛋壳了（抽离出了文档流），小宝宝只好把 `top`, `left`, `bottom`, `right` 进化到母亲胎盘里。

旁白：Absolute 阶段比 Relative 阶段也多了 2 样东西。抽离文档流和升级版的 `top`, `left`, `bottom`, `right` 。

1. 抽离文档流就相当于上图的虚线框没有了，后面的盒子会补上来，仿佛 `absolute` 的盒子不在似的。没有了以前用来附着的蛋壳，盒子只好找母亲来附着到她的胎盘上。它会一层层往外找，找到最近的一个不是 `static` 的盒子来做母亲。最后实在找不到就只好认 `html` 这个大妈了。

2. 升级版的 `top`, `left`, `bottom`, `right` 是指相对母亲盒子上左下右边框的偏移。母亲盒子一般都会比小宝宝大，当小宝宝盒子没有声明 `width` 和 `height` 时，就变成了一块超有弹性的布，升级版的 `top`, `left`, `bottom`, `right` 就像是母亲抓住布 4 条边的 4 只手，可以把布随意拉伸（如下图没有 `width` 和 `height` 也可以拉出一个矩形）。而声明了 `width` 和 `height` 之后，布就变成木板，不再允许拉伸，此时冲突处理跟 Relative 阶段一样。  
   ![absolute positioning]({{ site.at_path }}/2015-04-16-css-position-and-species-evolution/absolute-positioning.png)


Fixed 阶段
==========

Fixed 阶段就是 Absolute 的特殊情况。它的母亲是视口（viewport），所以不会随着文档滚动而改变位置。其它的都跟 Absolute 一样啦。

旁白：打印的时候，`fixed` 的元素会出现在每一页的相同位置哦。

最后
====

啰啰嗦嗦地写完了，文字方面的能力还是有待提高。接下来会把这段时间做的笔记陆陆续续整理出来，好好修炼一下文笔。

参考资料
========

1. [CSS Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
1. [Absolute, Relative, Fixed Positioning: How Do They Differ?](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/)
1. [Position](https://css-tricks.com/almanac/properties/p/position/)

【完】
