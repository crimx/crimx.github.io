--- 
layout:   post
title:    如何正确学习JavaScript
date:     2014-5-16 14:31:35 +0800
category: JavaScript
tagline: 正确学习JavaScript（写给非JavaScript程序员和编程新手）
tags: 
- 翻译
- JavaScript
- 学习路线
---

原文：[How to Learn JavaScript Properly](http://JavaScriptissexy.com/how-to-learn-JavaScript-properly/)（2014-5-16）  
翻译：[Jaward华仔](http://crimx.com)

-----

学习时长：6～8周  
学习前提：中学水平，无需编程经验

###更新（2014-1-7）

> 在Reddit上创建了一个学习小组  
> [January 2014, “Learn JavaScript” Study Group on Reddit](http://www.reddit.com/r/learn_js_in_seattle/comments/1tziaa/new_study_group_starting_january_2014/)

目录
----

> - [不要这样学习JavaScript](#How_NOT_To_Learn_JavaScript)  
> - [本课程资源](#Resources_For_This_Course)  
> - [1～2周(简介，数据类型，表达式和操作符)](#Weeks_1_and_2_Introduction_Data_Types_Expressions_and_Operators)  
> - [3~4周(对象，数组，函数，DOM，jQuery)](#Weeks_3_and_4_Objects_Arrays_Functions_DOM_jQuery)  
> - [JavaScript终极编辑器：WebStorm](#Get_The_Ultimate_JavaScript_Editor_WebStorm)  
> - [第一个项目-动态的问答应用](#Your_First_ProjectA_Dynamic_Quiz)  
> - [5～6周(正则表达式，Window对象，事件，jQuery)](#Weeks_5_and_6_Regular_Expressions_Window_Object_Events_jQuery)  
> - [7周，可延长到8周(类，继承，HTML5)](#Weeks_7_and_if_necessary_8_Classes_Inheritance_more_HTML5)  
> - [继续提升](#Continue_Improving)  
> - [一些鼓励的话](#Words_of_Encouragement)

上面的课程大纲提供了一个结构化和富有启发性的学习线路，从初学者到有所建树，把JavaScript学对学透。

既然你找到这篇文章来，说明你是真心想学好JavaScript的。你没有想错，当今如果要开发现代网站或web应用（包括互联网创业），都要学会JavaScript。而面对泛滥的JavaScript在线学习资源，却是很难找到一份高效而实用的方法去学习这个“web时代的语言”。

有一点需要注意，几年前我们需要知道一个真正的服务器端语言（比如PHP，Rails，Java，Python 或者 Perl）去开发可扩展，动态的，数据库驱动的web应用，而现在只用JavaScript就可以实现了。

不要这样学习JavaScript {#How_NOT_To_Learn_JavaScript}
------

不要一开始就埋头在成堆的JavaScript在线教程里 ，这是最糟糕的学习方法。或许在看过无数个教程后会有点成效，但这样不分层次结构地学习一个东西实在是十分低效，在实际用JavaScript建立网站或web应用时你还是会频繁的卡住。总的来说，这种学习方法会让人不知道如何将语言当做工具来使用——当做个人工具来用。

另外，也许有人会建议从尊敬的JavaScript教父Douglas Crockford写的《JavaScript语言精粹》开始学习JavaScript。然而，虽然Crockford先生对JavaScript无所不知，被誉为JavaScript世界的爱因斯坦，但他的《JavaScript语言精粹》并不适合初学者学习。这本书没有通透、清晰、明了的阐述JavaScript的核心概念。但对于更高级的学习路线，我倒会建议你看看Crockford先生的视频。

还有，不要只从Codecademy等网站学习JavaScript，因为即使知道怎么编写一大堆JavaScript代码小片段，还是不能学会怎么建立一个web应用程序。即便如此，在后面我还是会建议把Codecademy当做补充的学习资源。

本课程资源 {#Resources_For_This_Course}
----------

<!--more-->

更新：Reddit用户`d0gsbody`4月8号在Reddit上建立了一个学习小组。他和其他组员都非常积极和乐于助人。我建议你加入这个小组，他们会让你保持积极性且帮助你更好的学习JavaScript。毕竟独自折腾JavaScript还是有点难度的。链接：[Learning JS Properly – Study Group on Reddit](http://www.reddit.com/r/learnjavascript/comments/1ceefw/learn_javascript_properly_omnibus_post/)

- 请在以下两本书中选一本，第一本比较适合有编程经验的人，而另一本则适合完全没有编程经验的初学者。

   我个人推荐第一本书，因为作者对各个知识点都阐述得非常好且涵盖了一些高级JavaScript知识点。但是，要看懂这本书你至少要对web开发有一定的基本了解。所以，如果你有一点点编程经验或者web开发经验（不一定是JavaScript），那就买这本书吧。

   - 纸质版（英文）：[Professional JavaScript for Web Developers](http://www.amazon.com/gp/product/1118026691/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1118026691&linkCode=as2&tag=interhaptic-20)
   - 纸质版（中文）：[JavaScript高级程序设计(第3版)](http://www.amazon.cn/JavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1-%E6%B3%BD%E5%8D%A1%E6%96%AF/dp/B007OQQVMY/ref=sr_1_1?ie=UTF8&qid=1400291839&sr=8-1&keywords=JavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)
   - Kindle版（英文）：[Professional JavaScript for Web Developers](http://www.amazon.com/gp/product/B006PW2URI/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B006PW2URI&linkCode=as2&tag=interhaptic-20)
   - Kindle版（中文）：[JavaScript高级程序设计(第3版)](http://www.amazon.cn/JavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1-%E6%B3%BD%E5%8D%A1%E6%96%AF/dp/B00CBBJS5Y/ref=kinw_dp_ke)

   如果你没有编程经验，可以买这本：

   - 纸质版（英文）：[JavaScript: The Definitive Guide](http://www.amazon.com/gp/product/0596805527/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0596805527&linkCode=as2&tag=interhaptic-20)
   - 纸质版（中文）：[JavaScript权威指南(第6版)](http://www.amazon.cn/O-Reilly%E7%B2%BE%E5%93%81%E5%9B%BE%E4%B9%A6%E7%B3%BB%E5%88%97-JavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97-%E5%BC%97%E5%85%B0%E7%BA%B3%E6%A0%B9/dp/B007VISQ1Y/ref=sr_1_2?ie=UTF8&qid=1400292169&sr=8-2&keywords=JavaScript%3A+The+Definitive+Guide)
   - Kindle版（英文）：[JavaScript: The Definitive Guide](http://www.amazon.com/gp/product/B004XQX4K0/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B004XQX4K0&linkCode=as2&tag=interhaptic-20)
   - Kindle版（中文）：[JavaScript权威指南（原书第6版）](http://www.amazon.cn/JavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97-David-Flanagan/dp/B00E593MTS/ref=kinw_dp_ke)

- 免费注册[Stack Overflow](http://stackoverflow.com/)，这是一个编程领域的问答论坛。在这里提问题得到的回答比Codecademy要好，哪怕你的问题非常基础，看起来很傻（记住，从来没有愚蠢的问题）。

- 免费注册[Codecademy](http://www.codecademy.com/)，这是一个在线学习平台，你可以直接在浏览器里面写代码。

- [JavaScriptIsSexy](http://javascriptissexy.com/)上的一些博文，包括对象，闭包，变量的作用域和提升，函数等等。

JavaSctipt学习路线
------

完成整个课程大纲需要花上6~8周的时间，将学会完整的JavaScript语言（包括jQuery和一些HTML5）。如果你没有时间在6个星期里完成所有的课程（确实比较有挑战性），尽量不要超过8个星期。花的时间越长，掌握和记忆各种知识点的难度就越大。

1～2周(简介，数据类型，表达式和操作符) {#Weeks_1_and_2_Introduction_Data_Types_Expressions_and_Operators}
---------

1. 如果你还不是很了解HTML和CSS，完成Codecademy上的[web基础](http://www.codecademy.com/tracks/web)任务。

2. 阅读《JavaScript权威指南》或者《JavaScript高级程序设计》的前言和第1~2章。

3. **十分重要：**在书中遇到的每个样例代码都要动手敲出来并且在火狐或Chrome浏览器控制台中跑起来、尽量蹂躏它（做各种试验）。也可以用[jsfiddle](http://jsfiddle.net/)，但不要用Safari浏览器。我建议用火狐搭配[Firebug插件](https://addons.mozilla.org/en-us/firefox/addon/firebug/)去测试和调试代码。浏览器控制台就是可以让你编写和运行JavaScript代码的地方。

4. 完成Codecademy [JavaScript Track](http://www.codecademy.com/tracks/javascript)上的`Introduction to JavaScript`部分。

5. 阅读《JavaScript权威指南》第3~4章。

   或者阅读《JavaScript高级程序设计》第3~4章。你可以跳过`位操作`部分，在你的JavaScript生涯中一般不会用上这个。

   再次说明，记得要不时停下来把书本的代码敲到浏览器控制台里（或者JSFiddle）做各种测试，可以改变几个变量或者把代码结构修改一番。

6. 阅读《JavaScript权威指南》第5章。至于《JavaScript高级程序设计》则暂时没有阅读任务，因为前面已经把相关知识覆盖了。

7. 完成Codecademy [JavaScript Track](http://www.codecademy.com/tracks/javascript)上的2~5部分。

3~4周(对象，数组，函数，DOM，jQuery) {#Weeks_3_and_4_Objects_Arrays_Functions_DOM_jQuery}
-------

1. 以下三选一：

   * 阅读我的博文[JavaScript Objects in Detail](http://javascriptissexy.com/javascript-objects-in-detail/).

   * 阅读《JavaScript权威指南》第6章。

   * 阅读《JavaScript高级程序设计》第6章。注意：只需要看“理解对象”（Understanding Objects）部分。

   两本书会设计更多的一些细节，但只要看完我的博文，你完全可以放心地跳过这些细节。

2. 阅读《JavaScript权威指南》第7~8章或者《JavaScript高级程序设计》第5和7章。

3. 此时，你应该花大量时间在浏览器控制台上写代码，测试if-else语句，for循环，数组，函数，对象等等。更重要的是，你要锻炼和掌握独立写代码，不用借助Codecademy。在Codecademy上做题时，每个任务对你来说应该都很简单，不需要点帮助和提示。

   如果你还卡在Codecademy上，继续回到浏览器上练习，这是最好的学习方法。就像詹姆斯年轻时在邻居的篮球场上练球，比尔盖茨在地下室里学习编程。

   持续地练习，这一点点的进步积累起来效果会非常惊人。你要看到这个策略的价值，相信它是可行的，全心投入进去。

   **Codecademy会造成已掌握的错觉。**  
   使用Codecademy最大的问题是，它的提示和代码小片段会让人很容易就把答案做出来，造成一种已经掌握这个知识点的错觉。你可能一时看不出来，但这样做你的代码就不是独立完成的了。

   目前为止，Codecademy依然是学习编程的好帮手。特别是从一些基本的代码结构如if语句，for循环，函数和变量去指导你了解小项目和小应用的开发过程。

4. 回到Codecademy完成JavaScript路线。做完6~8部分（数据结构做到Object 2）。

5. 实现Codecademy上[Projects](http://www.codecademy.com/tracks/projects)路线的5个基础小项目（Basic Projects）。做完之后，你已不再需要Codecademy了。这是一件好事，因为自己做的越多，学得就越快，就能更好准备开始独立编程。

6. 阅读《JavaScript权威指南》第13,15，16和19章。

   或者阅读《JavaScript高级程序设计》第8,9,10,11,13和14章。这本书没有涉及到jQuery，而Codecademy上的jQuery知识也覆盖得不够。可以看看jQuery的官方教程，免费的：<http://try.jquery.com/>

   你也可以在《JavaScript权威指南》第19章了解更多的jQuery知识。

7. 完成全部的jQuery教程<http://try.jquery.com/>。

JavaScript终极编辑器：WebStorm {#Get_The_Ultimate_JavaScript_Editor_WebStorm}
-----------

未完待续


























