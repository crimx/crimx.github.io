<template functional>
  <footer v-once class="site-footer">
    © COPYRIGHT 2018 · Made with
    <svg
      viewBox="0 0 32 32"
      fill="#dd4b39"
      width="0.85em"
      height="0.85em"
    >
      <title>love</title>
      <path
        d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
      ></path>
    </svg>
    by CRIMX
  </footer>
</template>

<style lang="scss">
.site-footer {
  padding: 35px 50px 25px;
  text-align: center;
  font-size: 14px;
  color: #666;
  background: #1e1d1d;

  &::before {
    content: '';
    display: block;
    width: 30%;
    height: 5px;
    margin: 0 auto 25px;
    background-color: #3187db;
    // content: '';
    // display: block;
    // width: 100%;
    // margin: 13px auto;
    // height: 1px;
    // background: repeat-x center
    //   url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'><rect fill='#333' x='0' y='0' width='1' height='0.5'/></svg>");
  }
}
</style>
