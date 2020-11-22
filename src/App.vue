<template>
  <div id="app">
    <banner />
    <recipe-page />
  </div>
</template>

<script>
import RecipePage from './RecipePage.vue'
import Banner from './components/Banner.vue'


export default {
  name: 'App',
  components: {
    RecipePage,
    Banner
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 120px;
}
</style>
