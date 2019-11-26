const projects = [
  'saladict',
  'observable-hooks',
  'use-suspensible',
  'postcss-safe-important',
  'react-resize-reporter',
  'neutrino-webextension',
  'weitweet',
  'blog-2019',
  'get-selection-more',
  'hexo-filter-github-emojis',
  'ext-github-release-notifier',
  'javascript30',
  'projects',
  'leetmark',
  'empty-module-loader'
]

export default projects.map(id =>
  Object.assign({ id }, require(`./${id}/meta.json`))
)
