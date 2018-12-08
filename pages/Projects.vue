<template>
  <div class="projects-Main">
    <router-link class="projects-LangSwitch" :to="toAnotherLang">{{ anotherLangText }}</router-link>
    <ul class="projects-Projects">
      <li v-for="p in projects" :key="p.id">
        <project-card :project="p" />
      </li>
    </ul>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  data () {
    return {
      projects: [
        {
          id: 'saladict',
          url: 'https://chrome.google.com/webstore/detail/cdonnmffkdaoajfknoeeecmchibpmkmg?hl=en',
          stack: ['typescript', 'react', 'redux', 'rxjs', 'dexie', 'sass', 'i18next', 'antd', 'vue']
        },
        {
          id: 'postcss-safe-important',
          avatar: 'postcss',
          url: 'https://github.com/crimx/postcss-safe-important',
          stack: ['postcss']
        },
        {
          id: 'projects',
          url: 'https://github.com/crimx/crimx.github.io/',
          stack: ['vue', 'vue-router', 'vue-ssr', 'vue-i18n', 'sass']
        }
      ]
    }
  },
  computed: {
    toAnotherLang () {
      return {
        name: 'projects',
        params: {
          lang: this.$route.params.lang === 'en-US' ? 'zh-CN' : 'en-US'
        }
      }
    },
    anotherLangText () {
      return this.$route.params.lang === 'en-US' ? '中文' : 'English'
    }
  },
  components: {
    ProjectCard
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
