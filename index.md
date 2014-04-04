---
layout: page
title: 	「黄杰华」
tagline: "The dust of the dead codes clings to thee. Wash thy soul with debugging."
description: 你好！我是程序员，大家这么熟，叫我序员就好了。
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
      <br/><br/><br/>
    </li>
    {% endunless %}
    {% if postnum >= 10 %}
    {% break %}
    {% endif %}
  {% endfor %}
</ul>

