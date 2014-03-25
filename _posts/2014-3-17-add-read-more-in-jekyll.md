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

