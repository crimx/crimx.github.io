---
layout: page
title: 	不可胜在己，可胜在敌
tagline: "The dust of the dead codes clings to thee. Wash thy soul with debugging."
description: 你好！我是程序员，大家这么熟，叫我序员就好了。微博[at] Jaward华仔 - 不可胜在己，可胜在敌 - Stray Bugs
---
{% include JB/setup %}

<ul>
  {% assign postnum = 0 %}
  {% for post in site.posts %}
    {% assign postnum = postnum | plus: 1 %}
    {% unless post.tags contains 'NON' %}
      <li>
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        {{ post.excerpt }}
	<br/>
        <a href="{{ post.url }}"><code> --==Read More==-- </code></a>
        <br/>
        {% if site.JB.comments.provider and page.comments != false %}
          {% case site.JB.comments.provider %}
            {% when "disqus" %}
              <h5>评论：<a href="{{ post.url }}/#disqus_thread">加载中...</a></h5>
          {% endcase %}
        {% endif %}
        
        <br/><br/><br/>
      </li>
    {% endunless %}
    {% if postnum >= 10 %}
      {% break %}
    {% endif %}
  {% endfor %}
</ul>

{% include JB/comments-count %}

