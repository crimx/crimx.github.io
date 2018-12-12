<template>
  <div class="projects-Main">
    <nuxt-link
      :to="localePath('Projects', isEnPage ? 'zh' : 'en')"
      class="projects-LangSwitch"
    >{{ isEnPage ? '中文' : 'English' }}</nuxt-link>
    <ul class="projects-Projects">
      <li v-for="p in projects" :key="p.id">
        <project-card :project="p"/>
      </li>
    </ul>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [
        {
          id: 'saladict',
          url: 'https://www.crimx.com/ext-saladict/',
          stack: [
            'typescript',
            'react',
            'redux',
            'rxjs',
            'dexie',
            'i18next',
            'antd',
            'vue'
          ]
        },
        {
          id: 'postcss-safe-important',
          avatar: 'postcss',
          url: 'https://github.com/crimx/postcss-safe-important',
          stack: ['postcss']
        },
        {
          id: 'hexo-filter-github-emojis',
          url: 'https://github.com/crimx/hexo-filter-github-emojis',
          stack: ['hexo', 'github-api']
        },
        {
          id: 'ext-github-release-notifier',
          url: 'https://github.com/crimx/ext-github-release-notifier',
          stack: ['vue']
        },
        {
          id: 'weitweet',
          url: 'https://github.com/crimx/crx-weitweet',
          stack: ['vue', 'vuex']
        },
        {
          id: 'javascript30',
          url: 'https://codepen.io/collection/DNdQZw/',
          stack: ['vanilla-js']
        },
        {
          id: 'projects',
          url: 'https://github.com/crimx/crimx.github.io',
          stack: ['nuxt', 'nuxt-i18n', 'vue']
        },
        {
          id: 'leetmark',
          url: 'https://github.com/crimx/crx-leetmark',
          stack: ['vanilla-js'],
          hideExpand: true
        },
        {
          id: 'empty-module-loader',
          url: 'https://github.com/crimx/empty-module-loader',
          stack: ['webpack'],
          hideExpand: true
        }
      ]
    }
  },
  computed: {
    isEnPage() {
      return this.$route.name.endsWith('en')
    }
  }
}
</script>

<style lang="scss">
.projects-Main {
  height: 100%;
  background: #f9f9f9;
}

.projects-LangSwitch {
  text-decoration: none;
  position: absolute;
  top: 1em;
  right: 1em;
  width: 5em;
  height: 1.5em;
  line-height: 1.5em;
  text-align: center;
  border: 1px solid #333;
  border-radius: 4px;
  color: #333;
  transition: all 0.4s;

  &:hover {
    color: #fff;
    background: #333;
  }
}

.projects-Projects {
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > li {
    list-style-type: none;
  }
}
</style>
