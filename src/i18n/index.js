import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhCN from './lang/zh-CN'

Vue.use(VueI18n)

export function createI18n () {
  return new VueI18n({
    locale: 'zh-CN',
    fallbackLocale: 'zh-CN',
    messages: { 'zh-CN': zhCN }
  })
}

export function buildLoadLangAsync (i18n) {
  const loadedLanguages = new Set('zh-CN')

  return function loadLangAsync (lang) {
    if (lang && i18n.locale !== lang) {
      if (!loadedLanguages.has(lang)) {
        return import(/* webpackChunkName: "lang/[request]" */ `./lang/${lang}`).then(msgs => {
          i18n.setLocaleMessage(lang, msgs.default)
          loadedLanguages.add(lang)
          return setI18nLanguage(i18n, lang)
        })
      }
      return Promise.resolve(setI18nLanguage(i18n, lang))
    }
    return Promise.resolve()
  }
}

function setI18nLanguage (i18n, lang) {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
}
