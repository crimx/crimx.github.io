--- 
layout:   post
title:    JavaScript 周刊 193 期
category: JavaScript
tagline: "http://javascriptweekly.com/issues/193"
tags: 
- JavaScript
- 翻译

description: "JavaScript 周刊"
---

1. 组件化 Web 开发现状  
   <http://www.futureinsights.com/home/the-state-of-the-componentised-web.html>  
   以宽广的视野为我们介绍了基于组件的 webapp 开发，阐述其优势，如何利用现有的面向组件的系统如 AngularJS、Ember 和 React 开发；最后展望了 Web 组件的未来，利用 Platform.js 与 polyfills 让浏览器支持新的 W3C 标准。


1. 小小的优化为 AngularJS 提速  
   <http://www.binpress.com/tutorial/speeding-up-angular-js-with-simple-optimizations/135>  
   Todd looks 介绍 5 种方法优化 AngularJS 。包括一次性捆绑语法 {% raw %}`{{ ::value }}`{% endraw %}、`$scope.$apply()` 与 `$scope.$digest()` 比较、避免使用 `ng-repeat`、更多的 DOM 操作指令和限制 DOM 过滤器。


1. JavaScript 与 V8 TurboFan: 新一代 V8 实验性编译器  
   <http://ariya.ofilabs.com/2014/08/javascript-and-v8-turbofan.html>  
   TurboFan 是新一代实验性的 Google V8 JavaScript 引擎优化编译器。Ariya 带大家简单看一下它的雏形。

1. 为 JavaScript 设计取幂操作符  
   <http://bocoup.com/weblog/designing-an-exponentiation-operator-for-javascript/>  
   Rick Waldron 通过设计一个新的取幂操作符来介绍如何为 JavaScript 添加新语法。他已经在 ES7 把这个设计提交给 TC39 以供考虑。


1. 为什么 Web 组件已经为生产做好准备了  
   <http://developer.telerik.com/featured/web-components-ready-production/>  
   接着上一篇“[为什么 Web 组件还没有为生产做好准备](http://developer.telerik.com/featured/web-components-arent-ready-production-yet/)” 介绍了自定义元素好处、如何自定义可用于生产的元素以及兼容性问题。