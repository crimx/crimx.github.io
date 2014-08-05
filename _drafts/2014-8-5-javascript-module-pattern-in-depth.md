--- 
layout:   post
title:    「翻」深入 JavaScript 模块模式
category: JavaScript
tagline:  "2010 年的神文"
tags: 
- JavaScript
- 翻译

description: "模块模式（module pattern）是一种常见的 JavaScript 编程模式，大家一般都能很好地熟悉掌握。但其实这里还有不少高级用法没有得到关注。本文我将带大家回顾一些基础知识，然后介绍一些值得关注的高级用法，包括一个我认为是我首创的用法。"
---

原文：[JavaScript Module Pattern: In-Depth](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)（2010-03-12）  
翻译：[Jaward华仔](http://crimx.com)

-----

模块模式（module pattern）是一种常见的 JavaScript 编程模式，大家一般都能很好地熟悉掌握。但其实这里还有不少高级用法没有得到关注。本文我将带大家回顾一些基础知识，然后介绍一些值得关注的高级用法，包括一个我认为是我首创的用法。

## 基础知识

我们先简单介绍一下模块模式，自从在 Eric Miraglia （就职于 YUI）三年前（2007）的一篇博文被提出后便广为人知。如果你已经熟悉模块模式完全可以放心地跳到[高级模式](#Advanced_Patterns)。

### 匿名闭包

这是使后面所有技术成为可能的基础，也是 **JavaScript 最好的唯一一个特性**。我们只需简单地创建一个匿名函数，然后立即执行。函数中所有的代码都会存在于一个**闭包**当中；闭包在应用的整个生命周期内都会为其代码提供隐私和状态保护。

{% highlight javascript %}
(function () {
    // ... 所有的变量和函数都只在这个作用域中
    // 依然能保持对所有全局的访问
}());
{% endhighlight %}

注意括住匿名函数的 `()`。这是语言所要求的，因为 `function` 开头的语句会被翻译成**函数声明**，加上括号后就变成了**函数表达式**。

### 全局导入

## 高级模式 {#Advanced_Patterns}