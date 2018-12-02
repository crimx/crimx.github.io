const msg = {
  'expand': '展开全文',
  'projects': {
    'saladict': {
      'title': 'Saladict 沙拉查词'
    },
    'projects': {
      'title': '本项目'
    }
  }
}

Object.keys(msg.projects).forEach(name => {
  msg.projects[name].content = require('@/i18n/projects/' + name + '/zh-CN.md')
})

export default msg
