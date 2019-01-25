<template>
  <div class="projects-Main">
    <div class="projects-Top">
      <header class="projects-Header">
        <nuxt-link :to="localePath('index')" class="projects-Home">Home</nuxt-link>
        <nuxt-link
          :to="localePath('projects', isEnPage ? 'zh' : 'en')"
          class="projects-LangSwitch"
        >{{ isEnPage ? '中文' : 'English' }}</nuxt-link>
      </header>
      <div class="projects-Intro">
        <h1 v-t="'projectIntro[0]'"/>
        <p v-t="'projectIntro[1]'"/>
        <p v-t="'projectIntro[2]'"/>
      </div>
    </div>
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
  head() {
    return {
      title: 'Projects'
    }
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
            'sass'
          ]
        },
        {
          id: 'weitweet',
          url: 'https://github.com/crimx/crx-weitweet',
          stack: ['typescript', 'vue', 'iview', 'sass']
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
          stack: ['vue', 'github-api']
        },
        {
          id: 'javascript30',
          url: 'https://codepen.io/collection/DNdQZw/',
          stack: ['codepen', 'vanilla-js']
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

$top-projects-spacing: 200px;

.projects-Top {
  position: relative;
  padding: 20px 20px $top-projects-spacing;
  color: #f4f0e6;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: #212129;
    transform: skewY(-4deg);
    transform-origin: top left;
  }
}

.projects-Header {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.projects-Home {
  font-weight: bold;
  color: inherit;
}

.projects-LangSwitch {
  text-decoration: none;
  width: 5em;
  height: 1.5em;
  line-height: 1.5em;
  text-align: center;
  border: 1px solid #f4f0e6;
  border-radius: 4px;
  color: #f4f0e6;
  transition: all 0.4s;

  &:hover {
    text-decoration: none;
    color: #333;
    background: #f4f0e6;
  }
}

.projects-Intro {
  position: relative;
  text-align: center;
  color: #f4f0e6;
}

.projects-Projects {
  position: relative;
  margin: (40px-$top-projects-spacing) 0 0;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > li {
    list-style-type: none;
  }
}

html[lang^='zh'] {
  .projects-Intro {
    h1 {
      letter-spacing: 2px;
    }

    p {
      font-size: smaller;
    }
  }
}
</style>
