--- 
layout:   post
title:    「翻」深入 JavaScript 模块模式
category: JavaScript
tagline:  "拜读 2010 年的神文"
tags: 
- JavaScript
- 翻译

description: "模块模式（module pattern）是一种常见的 JavaScript 编程模式，大家一般都能很好地熟悉掌握。但其实这里还有不少高级用法没有得到关注。本文我将带大家回顾一些基础知识，然后介绍一些值得关注的高级用法，包括一个我认为是我首创的用法。"
---

原文：[JavaScript Module Pattern: In-Depth](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)（2010-03-12）  
翻译：[Jaward华仔](http://crimx.com)

-----

模块模式（module pattern）是一种常见的 JavaScript 编程模式，大家一般都能很好地熟悉掌握。但其实这里还有不少高级用法没有得到关注。本文将带大家回顾一些基础知识，然后介绍一些值得关注的高级用法，包括一个我认为是我首创的用法。

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

JavaScript 有一个称为隐含全局变量（implied globals）的特性。当一个名字被使用的时候，解析器会顺着作用域链由里往外一层层查找该名字的变量声明。如果没有找到，这个变量就默认是全局的。如果是在赋值语句中使用且没有找到，就会自动创建一个全局变量。这意味着在匿名闭包中很容易就能使用或创建全局变量。然而，这样的代码会变得难以管理，因为对人来说很难判断哪些变量是全局的。

值得高兴的是，匿名函数为此提供了一个很好的解决方案。通过将全局变量作为参数传入匿名函数，就相当于将其**导入**（import）到我们代码中，比起隐含全局变量这么做既简洁又高效。看例子：

{% highlight javascript %}
(function ($, YAHOO) {
	//现在可以在这段代码中访问全局的 jQuery (作为 $) 和 YAHOO
}(jQuery, YAHOO));
{% endhighlight %}

### 模块导出

有时候我们不仅要使用全局变量，还希望能**声明**全局变量。这时只需要简单的将它们导出即可，利用匿名函数的**返回值**。到这里就是模块模式的所有基础内容了，看完整的例子：

{% highlight javascript %}
var MODULE = (function () {
	var my = {},
		privateVariable = 1;

	function privateMethod() {
		// ...
	}

	my.moduleProperty = 1;
	my.moduleMethod = function () {
		// ...
	};

	return my;
}());
{% endhighlight %}

注意这里我们声明了一个 `MODULE` 全局模块。它带有两个属性：一个 `MODULE.moduleMethod` 方法和一个 `MODULE.moduleProperty` 变量。此外它还在匿名函数中利用闭包维持了一个**私隐内部状态**（private internal state）。而且，我们还能方便的导入所需模块，利用前面刚讲的知识。

## 高级模式 {#Advanced_Patterns}

