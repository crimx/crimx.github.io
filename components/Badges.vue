<template>
  <div v-once>
    <a
      v-if="github"
      :href="`https://github.com/${github}`"
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      <img
        :src="`https://img.shields.io/github/stars/${github}.svg?maxAge=3600&label=Stars&style=social`"
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
        :src="`https://img.shields.io/npm/dm/${npm}.svg?maxAge=3600`"
        alt="NPM Downloads Monthly"
      >
    </a>
    <a
      v-if="npm"
      :href="`https://www.npmjs.com/package/${npm}`"
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      <img :src="`https://img.shields.io/npm/dt/${npm}.svg?maxAge=3600`" alt="NPM Downloads Total">
    </a>
    <a
      v-if="chrome"
      :href="`https://chrome.google.com/webstore/detail/${chrome}?hl=en`"
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      <img
        :src="`https://img.shields.io/chrome-web-store/users/${chrome}.svg?maxAge=3600&colorB=1a73e8&label=Chrome%20users`"
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
        :src="`https://img.shields.io/chrome-web-store/rating/${chrome}.svg?maxAge=3600&colorB=1a73e8&label=rating`"
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
        :src="`https://img.shields.io/amo/users/${firefox}.svg?maxAge=3600&colorB=ff9500&label=Firefoxe%20users`"
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
        :src="`https://img.shields.io/amo/rating/${firefox}.svg?maxAge=3600&colorB=ff9500&label=rating`"
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
