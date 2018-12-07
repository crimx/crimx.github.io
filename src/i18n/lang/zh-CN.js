const msg = {
  'expand': '展开全文',
  'collapse': '收起全文',
  'projects': {
    'saladict': {
      'title': 'Saladict 沙拉查词'
    },
    'projects': {
      'title': '本项目'
    },
    'postcss-safe-important': {
      'title': 'PostCSS Safe Important'
    }
  }
}

Object.keys(msg.projects).forEach(name => {
  msg.projects[name].content = require('@/i18n/projects/' + name + '/zh-CN.md')
})

export default msg
