<template>
  <section :class="['projCard-Wrap', `projCard-Wrap-${isExpand ? 'expand' : 'collapse'}`]">
    <div class="projCard-Avatar" role="img" :style="{ background: `no-repeat 50%/cover url('${require(`@/assets/cover/${project.avatar || project.id}.jpg`)}')` }" />
    <div class="projCard-Main">
      <header>
        <h1 class="projCard-Title">
          <a :href="project.url" v-t="`projects.${project.id}.title`" target="_blank" rel="nofollow" />
        </h1>
      </header>
      <div class="projCard-Stacks">
        <stack-icon
          v-for="name in project.stack"
          :key="name"
          :id="stacks[name][0]"
          :href="stacks[name][1]"
          :name="stacks[name][2]"
        >{{ stacks[name][2] }}</stack-icon>
      </div>
      <div class="projCard-Content" v-html="$t(`projects.${project.id}.content`)" />
      <a class="projCard-Expand" v-if="!isExpand" href="#">[ {{ $t('expand') }} ]</a>
    </div>
  </section>
</template>

<script>
import StackIcon from '@/components/StackIcon'

export default {
  props: ['project'],
  data () {
    return {
      isExpand: false,
      stacks: {
        'antd': ['antd', 'https://github.com/ant-design/ant-design/', 'Ant Design'],
        'dexie': ['dexie', 'https://github.com/dfahlander/Dexie.js', 'Dexie(IndexedDB)'],
        'i18next': ['i18next', 'https://github.com/i18next/i18next', 'I18next'],
        'postcss': ['postcss', 'https://github.com/postcss/postcss', 'PostCSS'],
        'react': ['react', 'https://github.com/facebook/react/', 'React.js'],
        'redux': ['redux', 'https://github.com/reactjs/redux', 'Redux'],
        'rxjs': ['rxjs', 'https://github.com/ReactiveX/rxjs', 'RxJS'],
        'sass': ['sass', 'https://sass-lang.com/', 'Sass'],
        'typescript': ['typescript', 'https://www.typescriptlang.org/', 'TypeScript'],
        'vue': ['vue', 'https://github.com/vuejs/vue', 'Vue.js'],
        'vue-i18n': ['vue', 'https://github.com/kazupon/vue-i18n', 'Vue-i18n'],
        'vue-router': ['vue', 'https://github.com/vuejs/vue-router', 'Vue-router'],
        'vue-ssr': ['vue', 'https://ssr.vuejs.org/', 'Vue SSR']
      }
    }
  },
  components: {
    StackIcon
  }
}
</script>

<style lang="scss">
.projCard-Wrap {
  text-decoration: none;
  display: flex;
  overflow: hidden;
  width: 900px;
  max-width: 100vw;
  margin-bottom: 2em;
  padding: 1em;
  color: inherit;
  background: #fff;
  box-shadow: 0 6px 6px -6px rgba(0,0,0,.23);
  transition: box-shadow 0.4s;

  &:hover,
  &:active,
  &:focus,
  &:focus-within {
    outline: none;
    text-decoration: none;
    box-shadow: 0 6px 30px -6px rgba(0,0,0,.23);
  }

  @media all and (max-width: 600px) {
    display: block;
  }
}

.projCard-Avatar {
  flex-shrink: 0;
  width: 30%;
  min-width: 180px;
  margin: 0 1em 0 0;
  background: #f9f9f9;

  @media all and (max-width: 600px) {
    width: 100%;
    padding-top: 60%;
    margin: 0 0 1em 0;
  }
}

.projCard-Title {
  margin: 0 0 0.3em;

  a {
    color: inherit;
  }
}

.projCard-Stacks {
  line-height: 1.5;
  margin-left: -5px;
}

.projCard-Content {
  p {
    margin: 0.5em 0;
  }

  .read-more {
    display: none;

    ~ * {
      display: none;
    }
  }
}

.projCard-Expand {
  font-size: 12px;
  color: #07C;
  border: 1px solid transparent;

  &:hover {
    border-bottom-color: inherit;
  }
}

///// States /////

</style>
