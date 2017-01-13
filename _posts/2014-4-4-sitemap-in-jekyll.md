--- 
layout:   post
title:   Jekyll生成sitemap.xml
tagline: "&quot;If you cannot do great things. Do small things in a great way.&quot; -Napoleon Hill"
tags: 
- jekyll
---

`jekyll-bootstrap`提供了一个简单的`sitemap.txt`。参考它写了`sitemap.xml`。

如果没有设定网址先在`_config.yml`设好`production_url`

{% highlight xml%}
{% raw %}
<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

<url>
  <loc>{{ site.production_url }}</loc>
  <lastmod>{{ site.time | date_to_xmlschema }}</lastmod>
  <changefreq>daily</changefreq>
  <priority>1.0</priority>
</url>

{% for page in site.pages %}
<url>
  <loc>{{ site.production_url }}{{ page.url }}</loc>
  <lastmod>{{ site.time | date_to_xmlschema }}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.8</priority>
</url>
{% endfor %}

{% for post in site.posts %}
<url>
  <loc>{{ site.production_url }}{{ post.url }}</loc>
  {% if post.date %}
  <lastmod>{{ post.date | date_to_xmlschema }}</lastmod>
  {% endif %}
  <changefreq>daily</changefreq>
  <priority>1.0</priority>
</url>
{% endfor %}

</urlset>
{% endraw %}
{% endhighlight %}
