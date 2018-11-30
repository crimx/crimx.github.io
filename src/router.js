import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/projects/:lang?',
        name: 'projects',
        component: () => import(/* webpackChunkName: "projects" */ './views/Projects.vue')
      }
    ]
  })
}
