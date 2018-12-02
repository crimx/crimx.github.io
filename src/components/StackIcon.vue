<template functional>
  <a class="stackicon-Wrap" :href="props.href" target="_blank" rel="nofollow">
    <svg v-if="props.name === 'vue'" class="stackicon-Icon" preserveAspectRatio="xMidYMid" viewBox="0 18 257 221">
      <path fill="#41B883" d="M205.3 18.1h51.2l-128 220.8L.5 18.1h97.92l30.08 51.2 29.44-51.2h47.36z"/>
      <path fill="#41B883" d="M.5 18.1l128 220.8 128-220.8h-51.2l-76.8 132.48L51.06 18.1H.5z"/>
      <path fill="#35495E" d="M51.06 18.1l77.44 133.12L205.3 18.1h-47.36L128.5 69.3 98.42 18.1H51.06z"/>
    </svg>
    <slot />
  </a>
</template>

<style scoped lang="scss">
.stackicon-Wrap {
  display: inline-block;
  text-decoration: none;
  margin-right: 0.8em;
  line-height: 1;
  white-space: nowrap;
  word-break: keep-all;
  font-size: 14px;
  color: inherit;
}

.stackicon-Icon {
  max-width: 2em;
  height: 0.8em;
  margin-right: 2px;
}
</style>
