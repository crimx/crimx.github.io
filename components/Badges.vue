<template>
  <div v-once>
    <a
      v-if="github"
      :href="`https://github.com/${github}`"
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      <img
        :src="`https://img.shields.io/github/stars/${github}?logo=github&style=social`"
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
        :src="`https://img.shields.io/npm/dt/${npm}`"
        alt="NPM Downloads Total"
      >
    </a>
    <a
      v-if="npm"
      :href="`https://www.npmjs.com/package/${npm}`"
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      <img
        :src="`https://img.shields.io/npm/dm/${npm}`"
        alt="NPM Downloads Monthly"
      >
    </a>
    <a
      v-if="chrome"
      :href="`https://chrome.google.com/webstore/detail/${chrome}?hl=en`"
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      <img
        :src="`https://img.shields.io/chrome-web-store/users/${chrome}?color=0f9d58&logo=google-chrome&logoColor=%23fff`"
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
        :src="`https://img.shields.io/chrome-web-store/rating/${chrome}?color=0f9d58&logo=google-chrome&logoColor=%23fff`"
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
        :src="`https://img.shields.io/amo/users/${firefox}?color=%23ff9500&logo=firefox-browser&logoColor=%23fff`"
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
        :src="`https://img.shields.io/amo/rating/${firefox}?color=%23ff9500&logo=firefox-browser&logoColor=%23fff`"
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
