const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const nodeExternals = require('webpack-node-externals')
const marked = require('marked')

const TARGET_NODE = process.env.WEBPACK_TARGET === 'node'

module.exports = {
  configureWebpack: () => ({
    entry: `./src/entry-${TARGET_NODE ? 'server' : 'client'}`,
    target: TARGET_NODE ? 'node' : 'web',
    node: TARGET_NODE ? undefined : false,
    plugins: [
      TARGET_NODE
        ? new VueSSRServerPlugin()
        : new VueSSRClientPlugin()
    ],
    externals: TARGET_NODE ? nodeExternals({
      whitelist: /\.css$/
    }) : undefined,
    output: {
      libraryTarget: TARGET_NODE
        ? 'commonjs2'
        : undefined
    },
    optimization: {
      splitChunks: undefined
    }
  }),
  chainWebpack: config => {
    /* eslint-disable indent */
    config.module
      .rule('vue')
        .use('vue-loader')
          .tap(options =>
            Object.assign(options, {
              optimizeSSR: false
            })
          )

    const renderer = new marked.Renderer()
    renderer.link = (href, title, text) =>
      '<a target="_blank" rel="nofollow"' +
      (href ? ` href="${href}"` : '') +
      (title ? ` title="${title}"` : '') +
      `>${text || ''}</a>`

    config.module
      .rule('markdown')
        .test(/\.md$/)
        .use('html')
          .loader('html-loader')
          .end()
        .use('markdown')
          .loader('markdown-loader')
          .options({
            renderer
          })
    /* eslint-enable indent */
  }
}
