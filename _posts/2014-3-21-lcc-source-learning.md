--- 
layout:   post
title:   '奇妙的位运算'
category: 编译原理
tags: 
- lcc
- 编译器
- 内存对齐
---

今天看lcc源码内存对齐时看到一个`roundup(x,n)`宏

{% highlight c++ %}
#define roundup(x,n) (((x)+((n)-1))&(~((n)-1)))
{% endhighlight %}

从字面意思看这个宏应该是用来向上取整的。但是`(x+n-1)&(~(n-1))`究竟是怎么做到的?

这里要从头说起，首先`roundup(x,n)`的作用是求出用最小的`an`,使得`an>=x`，即
{% highlight python %}
x = an - b (0 <= b < n)
{% endhighlight %}

这里就要引入小学时的余数概念了：

> ```
> 除数×商=被除数-余数
> ```
> 
> 即对于任意两个正整数`x`和`n`，总存在整数`a`和`b`，使得:
> 
> ```
> x = an + b (0 <= b < n)
> ```
> 
> 在C语言中求`a`和`b`非常简单：
> 
> ```
> a = x / n;
> b = x % b;
> ```


<!--more-->

所以，如果把`roundup(x,n)`转换，就可以求`an`了：

{% highlight python %}
x = an - b (0 <= b < n)
x+n = an - b + n
x+n = an + (n-b) (0 < (n-b) <= n)
x+n-1 = an + (n-b-1) (0 <= (n-b-1) < n)
{% endhighlight %}

于是：

{% highlight python %}
a = (x+n-1)/n
an = (x+n-1) / n * n
{% endhighlight %}

到这里就可以算出`an`了，但是很明显`roundup(x,n)`在这里继续对公式进行优化。

因为`n`是内存块的单位，一定是`2`的幂，于是有如下的特性：

* 设`n = 2^m`，则`m = n - 1`
* `n`的二进制必然是`100...`的形态，其中有`m`个`0`
* 对于`n`的乘除操作，可以用左移右移完成

所以看回算式

{% highlight python %}
an = (x+n-1) / n * n
{% endhighlight %}

可以看作是`(x+n-1)`右移`m`个位，在左移`m`个位，也就是把最低的`m`个位清零就可以了。

而从上面的属性可以知道，`n-1`的二进制必然是`111...`的形态，其中有`m`个`1`，所以清零只要对`m`的反码进行与操作就可以了。

于是

{% highlight python %}
an = (x+n-1)&(~(n-1))
{% endhighlight %}

多么优美的一行代码，虽然可读性不高，但是理解了之后心中还是会产生无比的敬仰，这就是编程的魔力啊，就像在翻阅前人写的一篇篇诗歌。

<br/><br/><br/><br/><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/cn/"><img align="center" alt="知识共享许可协议" style="border-width:0" src="/assets/files/cc-licenses.png" /></a><br />本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/cn/">知识共享署名-非商业性使用-相同方式共享 3.0 中国大陆许可协议</a>进行许可。
