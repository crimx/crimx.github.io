<template functional>
  <a :href="props.href" class="stackicon-Wrap" target="_blank" rel="nofollow">
    <img
      :src="require(`@/assets/icons/${props.id}.svg`)"
      :alt="`LOGO ${props.name}`"
      class="stackicon-Icon"
    >
    <slot/>
  </a>
</template>

<style scoped lang="scss">
.stackicon-Wrap {
  display: inline-block;
  text-decoration: none;
  padding: 5px 8px;
  line-height: 1;
  white-space: nowrap;
  word-break: keep-all;
  font-size: 14px;
  border-radius: 3px;
  color: inherit;
  transition: background 0.3s;

  &:hover {
    background: #efefef;
  }
}

.stackicon-Icon {
  max-width: 2em;
  height: 1em;
  vertical-align: bottom;
  margin-right: 2px;
}
</style>
