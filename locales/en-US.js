import projects from '../projects'

const msg = {
  expand: 'Read More',
  collapse: 'Collapse',
  projectIntro: [
    'Sometimes, I like to make stuff.',
    'Some are useful, others are utterly useless.',
    'But all are good fun.'
  ],
  projects: projects.reduce((all, p) => {
    all[p.id] = { title: p.title['en-US'] }
    return all
  }, {})
}

Object.keys(msg.projects).forEach(name => {
  msg.projects[name].content = require(`../projects/${name}/en-US.md`)
})

export default msg
