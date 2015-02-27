--- 
layout:   post
title:   多说评论邮件提醒
tagline: "&quot;Be yourself, everyone else is already taken.&quot; - Oscar Wilde"
tags: 
- jekyll
- 多说
---

多说只有被人回复评论时才会有邮件提醒，博主是默认不造的（怪不得一直没有收到邮件提醒 T_T）。

dig 了一下，[这里](http://dev.duoshuo.com/docs/5003ecd94cab3e7250000008/)有讲到用 `data-author-key` 可以设置提醒。

> 作者在本站中的id。对于 wordpress 插件，文章如果填写该 id，可以识别作者，在收到评论时，会对该作者发出邮件提醒。通用代码用户及其他插件，如果需要通过这种方式获取邮件，请通过 <http://dev.duoshuo.com/docs/51435552047fe92f490225de> 这个接口导入用户并且要有邮箱信息，指定的 `user_key` 就是此处要填的 `data-author-key`

进去那个接口看看，其实就是同步用户数据，按着那个接口发个 post 就可以了。以 nodejs 为例。

安装 nodejs 然后在某个目录下打开终端，输入 `npm install --save-dev request`

该目录下新建 `a.js`

{% highlight javascript %}
var querystring = require('querystring');
var request = require('request');

var url = 'http://api.duoshuo.com/users/import.json';
var data = querystring.stringify({
  'short_name'         : '',    // 你的short_name，后台管理那里可以看到
  'secret'             : '',    // 密钥，后台管理那里可以看到
  'users[0][user_key]' : '1',   // 当前站点的ID，就是后面 data-author-key 值
  'users[0][name]'     : '',    // 显示的名字
  'users[0][email]'    : ''     // 提醒的邮箱
});

request(url+data, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('success');
  }
});

{% endhighlight %}

终端里跑一下该 js `node a.js`

然后浏览器打开 `多说short_name`.duoshuo.com/admin/users/ ，在“用户”那里可以看到添加了新用户，角色默认为游客，可以把他修改为作者。

最后在网站原来的多说代码中，就在一堆参数那里（data-thread-key、data-title...）后面照样画葫芦补上 `data-author-key="1"` 即可。
