const msg = {
  'expand': 'Read More',
  'projects': {
    'saladict': {
      'title': 'Saladict'
    },
    'projects': {
      'title': 'This Project'
    },
    'postcss-safe-important': {
      'title': 'PostCSS Safe Important'
    }
  }
}

Object.keys(msg.projects).forEach(name => {
  msg.projects[name].content = require('@/i18n/projects/' + name + '/en-US.md')
})

export default msg
