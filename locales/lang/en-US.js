const msg = {
  expand: 'Read More',
  collapse: 'Collapse',
  projectIntro: [
    'Sometimes, I like to make stuff.',
    'Some are useful, others are utterly useless.',
    'But all are good fun.'
  ],
  projects: {
    saladict: {
      title: 'Saladict'
    },
    projects: {
      title: 'This Project'
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
      title: 'WeiTweet'
    },
    leetmark: {
      title: 'Leetmark'
    }
  }
}

Object.keys(msg.projects).forEach(name => {
  msg.projects[name].content = require(`../projects/${name}/en-US.md`)
})

export default msg
