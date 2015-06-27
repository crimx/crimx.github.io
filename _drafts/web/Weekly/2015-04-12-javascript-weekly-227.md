--- 
layout:   post
title:    JavaScript 周刊 227 期
category: JavaScript
tagline: "http://javascriptweekly.com/issues/227"
tags: 
- JavaScript
- 翻译

description: "JavaScript 周刊"
---

1. 看看原来初版的 jQuery 源码，由 John Resig 亲自注释  
   <http://genius.it/ejohn.org/files/jquery-original.html>  
   点进那个 GENIUS 看看作者 John Resig 用注释讲第一版 jQuery 背后的一些趣闻。

1. 踏入 JS 模块泥潭  
   <https://www.airpair.com/javascript/posts/the-mind-boggling-universe-of-javascript-modules>  
   分析了当今各种 JS 实现模块的策略，通过 CommonJS, AMD 和 ES6 进行比较。也提到了如何现在就开始使用 ES6 模块。

1. Bridge.NET: 写的是 C#，跑的是 JavaScript  
   <http://bridge.net/>  
   [一系列](https://github.com/jashkenas/coffeescript/wiki/List-of-languages-that-compile-to-JS#c-f-net-related-languages)编译成 JS 的开源工具又新添一员。现在可以用 C# 编写跨平台应用啦。

1. 部署 ECMAScript 6  
   <http://www.2ality.com/2015/04/deploying-es6.html>  
   Axel 大神继续布道 ES6 ，介绍了现在可以用的一些部署 ES6 的工具；包括了转换器、交互式命令行、模块系统等等。

1. xto6: ES5 转 ES6（还可读）  
   <https://mohebifar.github.io/xto6/>  
   做的事基本上跟 Babel (前身 6to5) 相反。

1. Autocompeter: 快速 AJAX 自动完成 服务 + 部件  
   <https://autocompeter.com/>  
   快速响应自动完成。后端使用 Go ，前端使用 JavaScript ；也可以用自己的，全部都开源。

1. 利用 AWS Lambda 开发响应式应用  
   <https://www.airpair.com/lambda/posts/aws-lambda-stream-processing>  
   [Lambda](https://aws.amazon.com/cn/lambda/) 可以让你在 AWS 服务器上写一些 JavaScript 代码（官方叫做 Lambda 函数），然后可以在特定情况下触发或者定期自动运行来维护资源。比如可以在上传图片到 Amazon S3 时自动为图片创建缩略图。