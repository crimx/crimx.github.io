const pkg = require('./package')
const marked = require('marked')

const renderer = new marked.Renderer()
renderer.link = (href, title, text) =>
  '<a target="_blank" rel="nofollow"' +
  (href ? ` href="${href}"` : '') +
  (title ? ` title="${title}"` : '') +
  `>${text || ''}</a>`

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    titleTemplate: '%s - CRIMX',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: false,

  transition: {
    name: 'page',
    mode: 'out-in'
  },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-i18n',
      {
        defaultLocale: 'zh',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: false,
        vuex: false,
        lazy: true,
        langDir: 'locales/lang/',
        locales: [
          {
            code: 'zh',
            iso: 'zh-CN',
            file: 'zh-CN.js'
          },
          {
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js'
          }
        ]
      }
    ]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        })
      }

      config.module.rules.push({
        test: /\.(md|markdown)$/i,
        exclude: /node_modules/,
        use: [
          { loader: 'html-loader' },
          { loader: 'markdown-loader', options: { renderer } }
        ]
      })
    }
  }
}
