--- 
layout:   post
title:   'The Easiest Way to Creat Read More in Jekyll'
category: jekyll
date:     2014-03-16 10:38:56 +0800
tags: 
- jekyll
- excerpt
---

##1
You need to add a excerpt separator in you `_config.yml`.
```
excerpt_separator: <!--more-->
```

##2
Open index.html (or index.md...) and add these:

{% highlight html %}
{% raw %}
<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
      <br/>
      <a href="{{ post.url }}"><code> --==Read More==-- </code></a>
      <br/><br/><br/>

    </li>
  {% endfor %}
</ul>
{% endraw %}
{% endhighlight %}

##3
Open you posts and add the excerpt separator `<!--more-->` where you want to split.

Check this [Post excerpt](http://jekyllrb.com/docs/posts/).


<br/><br/><br/><br/><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/cn/"><img align="center" alt="知识共享许可协议" style="border-width:0" src="/assets/files/cc-licenses.png" /></a><br />本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/cn/">知识共享署名-非商业性使用-相同方式共享 3.0 中国大陆许可协议</a>进行许可。
