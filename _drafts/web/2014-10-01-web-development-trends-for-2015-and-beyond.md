--- 
layout: post
title:  "「译」 Web 在 2015 及未来的发展趋势"
category: Web
tagline: "&quot;With every deed you are sowing a seed, though the harvest you may not see.&quot; – Ella Wheeler Wilcox"
tags: 
- HTML5
- 翻译

description: "本文中，我们将一同看看当今 web 的发展趋势，给大家分享我对 2015 年及未来的一些看法、观察和预测。我从 2000 年就开始工作于 Web 技术，而近几年主要是做云架构解决方案。作为一名 Web 开发者，我曾在 .Net、Node.js 和 Go 技术栈上开发 Web 应用和 Web 服务。最近，我将 Web 技术和开发趋势作为整体研究了一遍，在这里分享一下我的想法和观察结果。"
---

原文：[Web Development Trends For 2015 And Beyond](https://medium.com/@shijuvar/web-development-trends-for-2015-and-beyond-c2d3c1ef5718)（2014-8-31）  
翻译：[Jaward华仔](http://crimx.com)

-----

本文中，我们将一同看看当今 web 的发展趋势，给大家分享我对 2015 年及未来的一些看法、观察和预测。我从 2000 年就开始工作于 Web 技术，而近几年主要是做云架构解决方案。作为一名 Web 开发者，我曾在 .Net、Node.js 和 Go 技术栈上开发 Web 应用和 Web 服务。最近，我将 Web 技术和开发趋势作为整体研究了一遍，在这里分享一下我的想法和观察结果。

首先，让我分享一些我所观察到的可用性和体系结构目前的趋势。

可用性的趋势
------------

如今，用户体验变得比以往更重要，[响应式网页设计（RWD）](http://en.wikipedia.org/wiki/Responsive_web_design)也成为了网站必备的特性。RWD 能让最终用户在不同尺寸的设备上访问网站，包括手机和平板浏览器。有了 RWD 取代移动网站，我们便无需为移动用户单独开发额外的网站。特别是当我们需要把焦点放到如何呈现内容时尤为有用。但如果你是在开发 Web 应用（包含着大量 UI 交互流程）而不是网站时，RWD 就帮不了你了。记住 Web 应用与网站是不同的。Twitter Bootstrap 与 Zurb Foundation 算是目前最流行的 RWD 框架。如果你要针对移动用户开发 APP 我会建议使用轻量级的框架比如 [Yahoo Pure CSS](http://purecss.io/) 。

应用程序架构的趋势
------------------

企业中的移动优先策略同样影响到了 Web 开发架构。当一个组织在开发 Web 应用与 Web 服务时，他们会以自身的移动策略作为主方向调整。且如今，Web API 已成为 Web 应用和移动应用的中心，开发者会在服务器端建立 RESTful 服务，然后基于 RESTful 服务为 Web 和移动开发前端应用。

API 驱动开发的崛起
------------------

在移动领域，API（特别是 RESTful API）已成为 Web 应用的关键部分，而服务器端的实现已变成薄薄的一层，只提供数据和安全相关的 API 。这些 RESTful API 并不受限于 Web 应用，移动应用同样可以使用。所以说现代 Web 开发人员编写的服务器端代码同时用于移动应用和 Web 应用，给予了我们更多的机会。这里的另外一个趋势是移动后端云服务的兴起，如 [Parse](https://parse.com/) 和 [Azure Mobile Services](http://azure.microsoft.com/en-us/services/mobile-services/) 等的服务（MBaaS）云平台解决方案。这些 MBaaS 平台可针对多种特定移动后端服务的数据模型提供自动的 RESTful API 。我们可以使用 MBaaS 服务开发 Web 应用，因为它们不仅提供 RESTful API ，伴随着移动 SDK 还提供了 JavaScript SDK 用于 HTML5 客户端。未来，我坚信 MBaaS 服务将广泛用于 Web 应用和移动应用。

单页面应用程序（SPA）的出现
---------------------------

当使用 RESTful API 的服务器端受限时，Web 前端开发便迁移到客户端，且浏览器上的类桌面 UI 是在客户端渲染而不是在服务器端。在 SPA 应用中，前端只需简单的调用 RESTful API 传送数据，然后在客户端构建完整的 UI 。这种情况下，JavaScript 便成为构建 Web 应用的关键技术。SPA 应用的一个优势是我们可以使用杂交移动容器（hybrid mobile container）比如 [Phonegap](http://phonegap.com/) 和 [Trigger.IO](https://trigger.io/) 很容易地将这些 Web 应用打包成移动应用。这种方法可以应付小型到中型基于数据形式 UI 的应用。于是我们就可以用一份代码建立 Web 应用和移动应用了。

在基于 SPA 的 Web 开发中，JavaScript 已成为关键技术，而且 JavaScript 技能也比以前更加重要。我曾接触过不同框架开发过一些 SPA 应用，并在这种模型下注意到了一些难题。如下：

1. 当我们在开发大规模 SPA 应用时，对比以前的服务器端方式，现在维护应用变得非常困难。我感觉构建大型 JavaScript 应用真的很难去保持可维护性。

2. 很难在客户端实现复杂的安全模型，对不同类型的授权角色限制不同访问级别的 UI 。

###我对 SPA 框架的意见

目前 AngularJS、EmberJS 和 Backbone 是实际使用中最受欢迎的几个 SPA 框架。我对这三个框架做了评估并使用其开发过应用。根据我的经验，AngularJS 是产能最高的框架，具备构建大型 SPA 应用所需的特性。依愚人之见，使用 MV* 框架做前端开发并不是一个好方法，MVC 不适合大型前端应用。但如今我们在服务器端和客户端都使用 MVC ，我不认为这是最佳实践。

ReactJS - 令人惊叹的前端框架
----------------------------

当大多数 SPA 框架依然在使用传统的 MVC 模型时，ReactJS 为客户端构建 UI 提供了一种不同的方式。[React](http://facebook.github.io/react/) 是由 Facebook 和 Instagram 团队开发的 JavaScript 库，目的是用来构建用户界面。[Instagram](http://instagram.com/) 网站的整个前端和 [Facebook](https://www.facebook.com/) 网站的一部分都是用 ReactJS 构建的。有趣的是，你可以与其他的前端框架如 AngularJS 和 EmberJS 一起使用 ReactJS 。你可以将 ReactJS 作为 MVC 框架的视图层。但是在实践中，我不建议在传统的 MVC 框架上使用 ReactJS 。ReactJS 引入了虚拟 DOM（Virtual DOM），这就是 ReactJS 库令人惊叹的部分，它给渲染 UI 带来了高性能的表现。ReactJS 提供了比 AngularJS 与 EmberJS 等 MVC 框架更高性能的 UI 渲染。你可以利用虚拟 DOM 抽象出可重用的 UI 组件，然后在实际的 DOM 上合成这些组件。虚拟 DOM 让你可以利用 React 在浏览器以外构建 UI 。比如 Facebook 的 React 团队搭建了 Objective C 桥，用于在 iOS 应用上构建 UI 。对于扩展前端应用，我们可以对 React 使用 [Flux](http://facebook.github.io/react/docs/flux-overview.html) 架构，这是架构的一套基本惯例，提供了单方向的数据流。我已经对 BackboneJS、EmberJS、AngularJS 和 React 都做了评估并强烈推荐你使用 React 构建用户界面。

2014 年服务器端 Web 技术栈的趋势
--------------------------------

几年以前，动态类型语言如 Ruby 和 Python 已经吸引了许多创业公司。直到几年前，Ruby on Rails 真是 Web 开发的一场革命。许多创业公司已经利用 RoR 和 Python Web 框架开发出各种创新的产品。但如今有趣的是，由于性能和可扩展性的难题，这些应用程序正被其它的 Web 技术栈重建。在大型应用程序中使用动态类型语言就像在喝加了太多糖的饮料。开始的时候，糖的甜味会比较吸引人，但长期来看就会伤害到应用程序的健康。今年，我们已经看到很多企业采用 Node.js 尤其是用于构建备受关注的移动应用后端服务。大企业如领英（LinkedIn）和沃尔玛（Walmart）正在使用 Node.js 加强它们的移动后端服务。作为一项新技术，Node.js 真是 2014 年采纳市场的赢家。Node.js 也是移动后端服务（MBaaS）云解决方案的首选技术栈。今年我们也看到许多基于 Node.js 的命令行工具被用于前端开发。Node.js 的崛起与 Ruby 栈的衰落是今年最值得注意的趋势。

这里是一些服务器端 Web 栈的观察结果：

- Ruby 栈特别是 RoR 正在失去动力且大型 Rails 应用正被重建成其他的技术栈。

- 使用动态语言（Ruby 和 Python）做 Web 开发已逐渐失去其吸引力。

- Node.js 更多地被采用到构建后端 RESTful 服务特别是在移动领域。

- 用于前端开发的基于 Node.js 的命令行工具的出现。

- 微软 .NET Web 栈和开放规范 [OWIN](http://owin.org/) 将发生大转变 - 这实际上对 ASP.NET 和 Node.js 都是好事。

- 实时 Web 应用的出现

对 2015 年及以后的预测
----------------------

哪种技术会称霸 2015 年？哪种技术会失去其势头？我深深地感受到使用动态语言做 Web 开发的时代就要结束了。而 Node.js 会再接再厉在新兴技术市场乘势而上吗？我不这么认为。自 2011 年起我已经主要在写 Node.js 代码并打算为此写一本书，但后来还是放弃了这个计划。最近我已离开了 Node.js 平台，原因如下：

- Node.js 总被强调是一种用于构建高性能应用程序的技术，但对大型应用来说，它对性能的支持超过可用性和可维护性将是一个最大的难题。所以我预测在近期会有许多大型 Node.js 应用因可维护性问题而失败，过度炒作 Node.js 的时代将会结束。

- 回调地狱。我知道 generator 和 promise 是解决回调地狱的好方法。[Koa.js](http://koajs.com/) 之类的框架都是以牺牲性能为代价提供了解决方法。但对我来说依然有许多问题解决不了。

- JavaScript 语言对我来说也是个问题。JavaScript 并不适合构建大规模的应用程序。

- Node.js 是一个极简的平台。对我来说，它最好是可以构建基于 JSON 的 REST API 和实时系统。我希望可以利用单一的技术栈开发各种各样的应用程序。但问题是当执行 CPU 运算逻辑（CPU crunching logic）时 Node.js 总是会失败。

我使用 Node.js 的这些问题其他人也会有，在出错处理、调试和可用性上还会有许多实用性方面的问题。我相信可维护性将是大型 Node.js 应用的一个大难题。如果你在 Node.js 上构建 RESTful 服务，我强烈建议你使用沃尔玛开发的 [Hapi.js](http://hapijs.com/) 框架，它真的做得很好。我非常欣赏 Hapi.js 的作者 [Eran Hammer](https://twitter.com/eranhammer) 。

在 2015 年我看好 Go 语言，不仅仅是用于 Web 开发，还作为构建分布式应用的一个技术生态系统。对我来说，Go 是比 Node.js 更好的选择。我预测 2015 年许多 Ruby 和 Node.js 开发者会迁移到 Go 。

接下来是我对 2015 年及以后的一些预测：

- 注重性能的 Web 应用由 Rails 重建到其它栈的做法将达到高峰值。

- 至少对注重性能的 Web 应用来说，用动态语言做 Web 开发的时代要结束了。

- 许多 Node.js 应用会陷入可维护性的问题。追求性能超过了可用性和可维护性可能会使 Node.js 失败。

- Go 将作为一种通用的编程语言出现，吸引着 Web 开发者社区。Go 会很好的替代 Java 与动态语言还有 Node.js 社区。

- Go 将继 Cobol 和 Java 成为下一代企业大范围使用的语言，但还需要时间。Go 是云时代的语言。

- Java 与 .Net 栈将会继续其中、大型企业应用的势头，但会慢慢地在 Web 开发中没落。

Go：2015 及未来的技术
---------------------

最近出现了许多用 Go 开发的优秀应用，包括 [Docker](https://www.docker.com/) 和 [Packer.IO](http://www.packer.io/) 。我预测 Go 将会在各种不同的社区中产生巨大的吸引力，包括 Java、Ruby、Python 和 Node.js 。Go 是静态类型语言却提供了动态类型语言生产力的灵活性。在 Go 语言中，并发性是核心编程语言的一等公民。类似 C 和 C++ ，Go 编译成原生机器码；而不像 Java 和 .Net ，它不需要任何 JIT 编译。我爱上了 Go 的简单性、实用的设计和相当好用的包系统。也许它不适合构建传统的 Web 应用，但绝对适合做提供 RESTful 服务的 HTTP 服务器。在未来，你也许还可以用 Go 开发 Android 应用。Go 的优势是它是一种通用编程语言，可以用于任何可能的场景 - 包括系统编程和大型分布式商业应用。我强烈感受到 Go 是属于云时代的分布式、并发、并行计算的语言。Go 可以在企业中成为下一个 Java 。
