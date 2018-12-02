<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '~normalize-scss';

html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  position: relative;
  font-family: 'helvetica neue',arial,'hiragino sans gb',stheiti,'wenquanyi micro hei',\5FAE\8F6F\96C5\9ED1,\5B8B\4F53,sans-serif;
  color: #333;
}
</style>
