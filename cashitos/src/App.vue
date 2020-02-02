<template class="main">
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* margin-top: 60px; */
    background-color: #FFE4B5;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
