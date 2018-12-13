<template>
  <section class="projCard-Wrap">
    <div
      ref="avatar"
      :style="{
        background: `no-repeat 50%/cover url('${require(`@/assets/cover/${project.avatar || project.id}.jpg`)}')`,
        height: avatarHeight
      }"
      class="projCard-Avatar"
      role="img"
    />
    <div class="projCard-Main">
      <h1 class="projCard-Title">
        <a v-t="`projects.${project.id}.title`" :href="project.url" target="_blank" rel="nofollow"/>
      </h1>
      <div class="projCard-Stacks">
        <stack-icon
          v-for="name in project.stack"
          :key="name"
          :id="stacks[name][0]"
          :href="stacks[name][1]"
          :name="stacks[name][2]"
        >{{ stacks[name][2] }}</stack-icon>
      </div>
      <div :style="{ height: contentHeight }" class="projCard-ContentWrap">
        <div
          ref="content"
          :class="{ 'projCard-Content': true, 'projCard-Content-collapse': !isContentExpand }"
          v-html="$t(`projects.${project.id}.content`)"
        />
      </div>
      <a
        v-if="!project.hideExpand"
        class="projCard-BtnExpand"
        href="#"
        @click="expand"
      >[ {{ $t(isBtnExpand ? 'collapse' : 'expand') }} ]</a>
    </div>
  </section>
</template>

<script>
import StackIcon from '@/components/StackIcon'

export default {
  components: {
    StackIcon
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isContentExpand: false,
      isBtnExpand: false,
      avatarHeight: '',
      contentHeight: '',
      stacks: {
        antd: [
          'antd',
          'https://github.com/ant-design/ant-design/',
          'Ant Design'
        ],
        dexie: [
          'dexie',
          'https://github.com/dfahlander/Dexie.js',
          'Dexie(IndexedDB)'
        ],
        codepen: ['codepen', 'https://codepen.io/', 'CodePen'],
        'github-api': [
          'github',
          'https://developer.github.com/',
          'Github APIs'
        ],
        hexo: ['hexo', 'https://hexo.io', 'Hexo'],
        i18next: ['i18next', 'https://github.com/i18next/i18next', 'I18next'],
        nuxt: ['nuxt', 'https://github.com/nuxt/nuxt.js', 'NUXT'],
        'nuxt-i18n': [
          'nuxt',
          'https://github.com/nuxt-community/nuxt-i18n',
          'Nuxt-i18n'
        ],
        postcss: ['postcss', 'https://github.com/postcss/postcss', 'PostCSS'],
        react: ['react', 'https://github.com/facebook/react/', 'React.js'],
        redux: ['redux', 'https://github.com/reactjs/redux', 'Redux'],
        rxjs: ['rxjs', 'https://github.com/ReactiveX/rxjs', 'RxJS'],
        sass: ['sass', 'https://sass-lang.com/', 'Sass'],
        typescript: [
          'typescript',
          'https://www.typescriptlang.org/',
          'TypeScript'
        ],
        'vanilla-js': [
          'javascript',
          'https://github.com/vuejs/vue',
          'VanillaJS'
        ],
        vue: ['vue', 'https://github.com/vuejs/vue', 'Vue.js'],
        vuex: ['vue', 'https://vuex.vuejs.org/', 'Vuex'],
        'vue-i18n': ['vue', 'https://github.com/kazupon/vue-i18n', 'Vue-i18n'],
        'vue-router': [
          'vue',
          'https://github.com/vuejs/vue-router',
          'Vue-router'
        ],
        'vue-ssr': ['vue', 'https://ssr.vuejs.org/', 'Vue SSR'],
        webpack: ['webpack', 'https://webpack.js.org', 'Webpack']
      }
    }
  },
  methods: {
    async expand(e) {
      e.preventDefault()
      e.target.blur()

      if (this.isContentExpand) {
        this.isBtnExpand = false
        this.avatarHeight = this._avatarCollapseHeight
        this.contentHeight = this._contentCollapseHeight

        await new Promise(resolve => {
          this.$refs.avatar.addEventListener('transitionend', resolve, {
            once: true
          })
        })

        this.isContentExpand = false

        this.avatarHeight = ''
        this.contentHeight = ''
      } else {
        this._avatarCollapseHeight = this.$refs.avatar.offsetHeight + 'px'
        this._contentCollapseHeight = this.$refs.content.offsetHeight + 'px'
        this.isContentExpand = true

        await this.$nextTick()

        this._avatarExpandHeight = this.$refs.avatar.offsetWidth * 0.618 + 'px'
        this._contentExpandHeight = this.$refs.content.offsetHeight + 'px'

        this.avatarHeight = this._avatarCollapseHeight
        this.contentHeight = this._contentCollapseHeight

        await this.$nextTick()
        // force reflow to put everything in position
        // assign to `this` to avoid being removed in tree-shaking
        this._reflow = document.body.offsetHeight

        this.isBtnExpand = true
        this.avatarHeight = this._avatarExpandHeight
        this.contentHeight = this._contentExpandHeight
      }
    }
  }
}
</script>

<style lang="scss">
$height-duration: 0.5s;

.projCard-Wrap {
  text-decoration: none;
  display: flex;
  overflow: hidden;
  width: 900px;
  max-width: 100vw;
  margin-bottom: 3em;
  padding: 1em;
  color: inherit;
  background: #fff;
  box-shadow: 0 6px 6px -6px rgba(0, 0, 0, 0.33);
  transition: box-shadow 0.4s;

  &:hover,
  &:active,
  &:focus,
  &:focus-within {
    outline: none;
    text-decoration: none;
    box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.33);
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
  transition: height $height-duration;

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

.projCard-ContentWrap {
  transition: height $height-duration;
  overflow: hidden;
}

.projCard-Content {
  overflow: hidden; // prevent margin collapse
  line-height: 1.6;

  > * {
    margin: 0.5em 0;
  }

  img {
    max-width: 100%;
  }

  .read-more {
    display: none;
  }
}

.projCard-BtnExpand {
  font-size: 0.8em;
  color: #07c;
  border: 1px solid transparent;

  &:hover {
    border-bottom-color: inherit;
  }
}

///// States /////
.projCard-Content-collapse {
  .read-more {
    ~ * {
      display: none;
    }
  }
}

html[lang^='zh'] {
  .projCard-BtnExpand {
    font-size: 0.75em;
  }
}
</style>
