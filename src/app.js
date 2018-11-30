import Vue from 'vue'
import App from './App.vue'
import { createI18n, buildLoadLangAsync } from './i18n'
import { createRouter } from './router'

Vue.config.productionTip = false

export function createApp () {
  const router = createRouter()
  const i18n = createI18n()

  const loadLangAsync = buildLoadLangAsync(i18n)

  router.beforeEach((to, from, next) => {
    loadLangAsync(to.params.lang).then(next)
  })

  const app = new Vue({
    router,
    i18n,
    render: h => h(App)
  })

  return { app, router, i18n }
}
