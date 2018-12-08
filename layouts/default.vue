<template>
  <div id="app">
    <nuxt/>
  </div>
</template>

<style lang="scss">
@import '~normalize-scss';

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #0366d6;

  &:hover {
    text-decoration: underline;
  }
}

code {
  display: inline-block;
  line-height: normal;
  font-size: 0.86em;
  font-family: monaco, menlo, consolas, 'courier new', courier, monospace;
  margin: 0 0.25em;
  padding: 0 0.4em;
  border: 1px solid #ddd;
  background-color: #f8f8f8;
  border-radius: 3px;
}

#app {
  position: relative;
  font-family: 'helvetica neue', arial, 'hiragino sans gb', stheiti,
    'wenquanyi micro hei', \5fae\8f6f\96c5\9ed1, \5b8b\4f53, sans-serif;
  color: #333;
}
</style>
