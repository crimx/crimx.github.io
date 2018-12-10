const msg = {
  expand: 'Read More',
  collapse: 'Collapse',
  projects: {
    saladict: {
      title: 'Saladict'
    },
    projects: {
      title: 'This Project'
    },
    'hexo-filter-github-emojis': {
      title: 'Hexo Filter Github Emojis'
    },
    'postcss-safe-important': {
      title: 'PostCSS Safe Important'
    },
    'ext-github-release-notifier': {
      title: 'Release Notifier for Github'
    }
  }
}

Object.keys(msg.projects).forEach(name => {
  msg.projects[name].content = require(`../projects/${name}/en-US.md`)
})

export default msg
