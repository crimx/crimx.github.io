const msg = {
  expand: '展开全文',
  collapse: '收起全文',
  projectIntro: [
    '我也非常喜欢造轮子',
    '无论是解决实际问题，还是尝试新技术',
    '生命不息，折腾不止'
  ],
  projects: {
    saladict: {
      title: 'Saladict 沙拉查词'
    },
    projects: {
      title: '本项目'
    },
    'blog-2019': {
      title: 'CRIMX BLOG'
    },
    'hexo-filter-github-emojis': {
      title: 'Hexo Filter Github Emojis'
    },
    'postcss-safe-important': {
      title: 'PostCSS Safe Important'
    },
    'ext-github-release-notifier': {
      title: 'Release Notifier for Github'
    },
    'empty-module-loader': {
      title: 'Empty Module Loader'
    },
    javascript30: {
      title: 'JavaScript 30'
    },
    weitweet: {
      title: '小推 WeiTweet'
    },
    leetmark: {
      title: 'Leetmark'
    }
  }
}

Object.keys(msg.projects).forEach(name => {
  msg.projects[name].content = require(`../projects/${name}/zh-CN.md`)
})

export default msg
