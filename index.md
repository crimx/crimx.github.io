---
layout: page
title: 	「黄杰华」
tagline: "The dust of the dead codes clings to thee. Wash thy soul with debugging."
---
{% include JB/setup %}

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

