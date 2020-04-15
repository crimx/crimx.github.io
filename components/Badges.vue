<template>
  <div v-once>
    <a
      v-if="github"
      :href="`https://github.com/${github}`"
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      <img
        :src="`https://badgen.net/github/stars/${github}?icon=github`"
        alt="Github Stars"
      >
    </a>
    <a
      v-if="npm"
      :href="`https://www.npmjs.com/package/${npm}`"
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      <img
        :src="`https://badgen.net/npm/dm/${npm}`"
        alt="NPM Downloads Monthly"
      >
    </a>
    <a
      v-if="npm"
      :href="`https://www.npmjs.com/package/${npm}`"
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      <img
        :src="`https://badgen.net/npm/dt/${npm}`"
        alt="NPM Downloads Total"
      >
    </a>
    <a
      v-if="chrome"
      :href="`https://chrome.google.com/webstore/detail/${chrome}?hl=en`"
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      <img
        :src="`https://badgen.net/chrome-web-store/users/${chrome}?icon=chrome&color=0f9d58`"
        alt="Chrome Web Store Users"
      >
    </a>
    <a
      v-if="chrome"
      :href="`https://chrome.google.com/webstore/detail/${chrome}?hl=en`"
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      <img
        :src="`https://badgen.net/chrome-web-store/rating/${chrome}?icon=chrome&color=0f9d58`"
        alt="Chrome Web Store Rating"
      >
    </a>
    <a
      v-if="firefox"
      :href="`https://addons.mozilla.org/firefox/addon/${firefox}/`"
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      <img
        :src="`https://badgen.net/amo/users/${firefox}?icon=firefox&color=ff9500`"
        alt="Mozilla Add-on Users"
      >
    </a>
    <a
      v-if="firefox"
      :href="`https://addons.mozilla.org/firefox/addon/${firefox}/`"
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      <img
        :src="`https://badgen.net/amo/rating/${firefox}?icon=firefox&color=ff9500`"
        alt="Mozilla Add-on Rating"
      >
    </a>
  </div>
</template>

<script>
export default {
  props: {
    github: {
      type: String,
      default: ''
    },
    npm: {
      type: String,
      default: ''
    },
    chrome: {
      type: String,
      default: ''
    },
    firefox: {
      type: String,
      default: ''
    }
  }
}
</script>
