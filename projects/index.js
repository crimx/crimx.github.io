const projects = [
  'saladict',
  'observable-hooks',
  'postcss-safe-important',
  'retux',
  'neutrino-webextension',
  'webpack-target-webextension',
  'react-resize-reporter',
  'get-selection-more',
  'hexo-filter-github-emojis',
  'use-suspensible',
  'weitweet',
  'ext-github-release-notifier',
  'blog-2019',
  'javascript30',
  'projects',
  'leetmark',
  'empty-module-loader'
]

export default projects.map(id =>
  Object.assign({ id }, require(`./${id}/meta.json`))
)
