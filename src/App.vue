<template>
  <div id="app">
    <Menu></Menu>

    <router-view>
    </router-view>
  </div>
</template>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>

<script>
  import Menu from './components/Menu.vue'

  export default ({
    components: { Menu },
  })
</script>