<template>
  <article>
    <main>
      <h1>Privacy Policy</h1>

      <h2>Personal Data</h2>

      <p>All open-source libraries, apps and browser extensions made by CRIMX had never collected and will never collect any sensitive personal data, browsing history etc to a remote server.</p>

      <p>Saladict may collect anonymous browser version and platform name. This information is needed for decision on implementing new features, removing unused features or suggesting default settings for new users. It will happen only with your permission.</p>

      <h2>Third Party Services</h2>

      <p>Browser extensions use Chrome (Chromium) or WebExtensions Storage Sync API for storing user's settings.</p>

      <p>Saladict uses browser's local database (IndexedDB) for storing user-collected words. User may also choose to enable third party sync services which may collect synced data.</p>

      <p>Saladict may send search text and releated cookies to third party dictionary services(just like how you would search on their websites). If you do not want third party services to collect you data, remove the dictionaries at "Dictionaries" settings.</p>

      <footer><a href="https://github.com/crimx/crimx.github.io/commits/dev/pages/privacy-policy.vue">Update history</a></footer>
    </main>
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: 'Privacy Policy'
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  padding: 1em;
  color: #eee;
  background: #1e1d1d;

  main {
    max-width: 1000px;
    margin: auto;
  }
}

h1 {
  font-size: 2em;
  text-align: center;
  margin: 1em 0 2em 0;
}

h2 {
  margin: 1.5em 0;
}

p {
  margin: 1.5em 0;
  line-height: 1.5;
}
</style>
