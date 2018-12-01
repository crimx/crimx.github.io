<template>
  <section class="projects-Card">
    <header>
      <h1 v-t="`projects.${id}.title`" />
    </header>
    <div>
      <stack-icon
        v-for="name in stack"
        :key="name"
        :name="stacks[name][0]"
        :href="stacks[name][1]"
      >{{ stacks[name][2] }}</stack-icon>
    </div>
    <i18n
      v-for="(c, i) in $i18n.messages[$i18n.locale].projects[id].content"
      :key="c"
      :path="`projects.${id}.content.${i}`"
       tag="p"
     >
      <slot />
    </i18n>
  </section>
</template>

<script>
import StackIcon from '@/components/StackIcon'

export default {
  props: ['id', 'stack'],
  data () {
    return {
      stacks: {
        'vue': ['vue', 'https://github.com/vuejs/vue', 'Vue.js'],
        'vue-router': ['vue', 'https://github.com/vuejs/vue-router', 'Vue-router'],
        'vue-ssr': ['vue', 'https://ssr.vuejs.org/', 'Vue SSR'],
        'vue-i18n': ['vue', 'https://github.com/kazupon/vue-i18n', 'Vue-i18n']
      }
    }
  },
  components: {
    StackIcon
  }
}
</script>
