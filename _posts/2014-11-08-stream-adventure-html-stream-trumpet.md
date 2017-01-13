--- 
layout:   post
title:    Stream-Adventure HTML-Stream 中对 trumpet 的理解
tagline:  "A programmer had a problem. He thought &quot;I know, I'll create an API&quot;. Now everybody has a problem."
tags: 
- Node.js
- JavaScript

description: "Stream-Adventure HTML-Stream 中对 trumpet 的理解"
---

玩了 John Resig 提到的 Stream-Adventure ，在 HTML-Stream 关卡中，根据题目提示写出了代码

{% highlight javascript %}
var through = require('through')
  , trumpet = require('trumpet')

function upper(buf) {
  this.queue(buf.toString().toUpperCase())
}

var tr = trumpet()
process.stdin.pipe(tr).pipe(process.stdout)

var stream = tr.select('.loud').createStream()
stream.pipe(through(upper)).pipe(stream)
{% endhighlight %}

虽然写出来了，但其实我还是混淆着 tr 和 steam 流。

最后在 nodeschool 的[讨论](https://github.com/nodeschool/discussions/issues/346)中得到了比较好启发。

试着整理一下自己的表述：

这里很明显是有两条流 tr 和 steam ，之前混淆他们的关系，所以一直不能理解。

tr 是主流，输入流入 tr 最后流到输出

![main flow]({{ site.at_path }}/2014-11-08-stream-adventure-html-stream-trumpet/main-flow.jpg)

stream 流是在 tr 内部发生的，tr 会尝试找到 `loud` 类的内容，然后创建流 stream ，流向 through 改变大小写，最后流回 stream 覆盖原来的内容。

![stream flow]({{ site.at_path }}/2014-11-08-stream-adventure-html-stream-trumpet/stream-flow.jpg)

TODO: 正在看 trumpet 源码，等我的水平到能看懂的时候（猴年马月）回来继续从源码角度分析两者的关系。