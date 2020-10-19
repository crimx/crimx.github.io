const projects = [
  'saladict',
  'observable-hooks',
  'postcss-safe-important',
  'webextension-store-meta',
  'neutrino-webextension',
  'webpack-target-webextension',
  'hexo-filter-github-emojis',
  'react-resize-reporter',
  'get-selection-more',
  'blog-2019',
  'retux',
  'use-suspensible',
  'weitweet',
  'ext-github-release-notifier',
  'javascript30',
  'projects',
  'leetmark',
  'empty-module-loader'
]

export default projects.map(id =>
  Object.assign({ id }, require(`./${id}/meta.json`))
)
