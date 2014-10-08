--- 
layout:   post
title:    Sublime Text 2 快捷键整理
tagline: "&quot;Short cuts make long delays.&quot; - J.R.R. Tolkien, The Fellowship of the Ring"
category: Tools
tags: 
- sublime text 2
- tips
---

<style>
  table,th,td {
    border: dashed 1px #555;
  }

  tr {
    height: 40px;
  }

  td {
    padding-left: 10px;
  }

  strong {
    font-size: 2em;
  }
</style>

:----------------|:-------------------------------------------------
**选择**         |
Ctrl+D           |       选词 （按住-继续选择下个相同的字符串）
Ctrl+K, Ctrl+D   |       选词跳过这个单词
Ctrl+U           |       软撤销（可撤销选错的单词）
Ctrl+L           |       选择整行（按住-继续选择下行）
Ctrl+Shift+M     |       选择括号内的内容（按住-继续选择父括号）
Ctrl+Shift+A     |       选择光标位置父标签对（这个没搞懂）
                 |
**跳转**         |
Ctrl+M           |       光标移动至括号内开始或结束的位置
Ctrl+G           |       选择行跳转
Ctrl+P           |       跳转文件（得先打开了文件夹）
                 |
**样式**         |
Ctrl+/           |       注释整行（如已选择内容，同“Ctrl+Shift+/”效果）
Ctrl+Shift+/     |       注释已选择内容
Tab              |       缩进
Shift+Tab        |       去除缩进
Ctrl+]           |       增加缩进
Ctrl+[           |       减少缩进
Ctrl+Shift+V     |       粘贴并自动缩进（这个好用）
F9               |       行排序（按a-z）（CSS属性中用得爽）
Alt+.            |       闭合当前标签
                 |
**显示**         |
Ctrl+Shift+[     |       折叠代码
Ctrl+Shift+]     |       展开代码
Ctrl+KT          |       折叠属性
Ctrl+K0          |       展开所有
                 |
**撤销**         |
Ctrl+Z           |       撤销
Ctrl+Y           |       恢复撤销
                 |
**词处理**       |
Ctrl+KU          |       改为大写
Ctrl+KL          |       改为小写
Ctrl+T           |       词互换（选择多个词会轮转）
                 |
**行处理**       |
Ctrl+Shift+D     |       复制一行到该行上面
Ctrl+Enter       |       下一行开辟新行
Ctrl+Shift Enter |       上一行开辟新行 
Ctrl+Shift+UP    |       与上行互换
Ctrl+Shift+DOWN  |       与下行互换
Ctrl+J           |       合并行（已选择需要合并的多行时）
Ctrl+Shift+K     |       删除整行
Ctrl+KK          |       从光标处删除至行尾
Ctrl+K Backspace |       从光标处删除至行首
