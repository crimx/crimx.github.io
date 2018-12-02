const msg = {
  'projects': {
    'saladict': {
      'title': 'Saladict'
    },
    'projects': {
      'title': 'This Project'
    }
  }
}

Object.keys(msg.projects).forEach(name => {
  msg.projects[name].content = require('@/i18n/projects/' + name + '/en-US.md')
})

export default msg
