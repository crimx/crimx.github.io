--- 
layout:   post
title:   'Jekyll-bootstrap Not Updating Problem Fixed'
category: jekyll
date:     2014-03-19 20:10:51 +0800
tags: 
- jekyll
---

I had a jekyll blog on the github and changed it to Jekyll-bootstrap yesterday.   
I tested it locally, everything was ok. Pushed successfully. But my github pages didn't change.

After debugging, I realised that the problem occured right after the theme `hooligan` was installed.

To fix this problem, you only need to:

* Remove the `_theme_packages` file:  
{% highlight bash %}
git rm _theme_packages
{% endhighlight %}  
* Create a `.gitignore` file in the root of your Page repository. 
* Put `_theme_packages/*` into the file.
* Better install the theme again.

This solution worked for me.

我昨天把jekyll换成了jekyll-bootstrap，在本地测试成功，push也成功了。但是github pages一直没有改变。  
重复安装了很多次，终于发现当我安装完`hooligan`主题后，github pages就没反映了。最后发现是主题下载包`_theme_packages`跟github有冲突。

所以，先remove掉  
{% highlight bash %}
git rm _theme_packages
{% endhighlight %}  
在根目录添加`.gitignore`文件，写入  
{% highlight bash %}
_theme_packages/*
{% endhighlight %}  
最好把主题重新安装一次

如果上面的办法没用的话，我建议删掉仓库重新来一遍，我就是这样成功的，注意发布之后有可能要等一会才有效哦。



<br/><br/><br/><br/><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/cn/"><img align="center" alt="知识共享许可协议" style="border-width:0" src="/assets/files/cc-licenses.png" /></a><br />本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/cn/">知识共享署名-非商业性使用-相同方式共享 3.0 中国大陆许可协议</a>进行许可。
