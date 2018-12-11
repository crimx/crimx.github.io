<template functional>
  <!-- eslint-disable-next-line vue/require-component-is -->
  <span v-once class="fancybtn-wrap">
    <nuxt-link
      v-if="/^\/[^/]/.test(props.href)"
      :to="props.href"
      class="fancybtn-title"
    >{{ props.title }}</nuxt-link>
    <a v-else :href="props.href" class="fancybtn-title">{{ props.title }}</a>
  </span>
</template>

<style lang="scss">
$fancy-btn-color: #fff;
$fancy-text-font-size: 40px;
$fancy-border-width: 3px;

.fancybtn-wrap {
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: $fancy-text-font-size + 25px;
  width: $fancy-text-font-size * 5;
  margin: 10px;
  font-size: $fancy-text-font-size;
  line-height: $fancy-text-font-size + 25px;
  text-align: center;
  color: $fancy-btn-color;
  -webkit-tap-highlight-color: transparent;

  // broder top
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: $fancy-border-width;
    width: 100%;
    background: $fancy-btn-color;
    animation: fancy-border-top-show 3s;
  }

  // border bottom
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: $fancy-border-width;
    width: 100%;
    background: $fancy-btn-color;
    animation: fancy-border-bottom-show 3s;
  }
}

.fancybtn-title {
  text-decoration: none !important;
  display: inline-block;
  width: 100%;
  height: 100%;
  color: $fancy-btn-color;
  transition: background 0.4s;
  animation: fancy-text-show 4s;

  &:hover,
  &:active,
  &:focus {
    background: rgba(255, 255, 255, 0.2);
  }

  // broder left
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: $fancy-border-width;
    background: $fancy-btn-color;
    animation: fancy-border-left-show 3s;
  }

  // border right
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: $fancy-border-width;
    background: $fancy-btn-color;
    animation: fancy-border-right-show 3s;
  }
}

@keyframes fancy-border-top-show {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fancy-border-bottom-show {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  50% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fancy-border-left-show {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  50% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fancy-border-right-show {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fancy-text-show {
  0% {
    color: transparent;
  }
  50% {
    color: transparent;
  }
  100% {
    color: $fancy-btn-color;
  }
}
</style>
