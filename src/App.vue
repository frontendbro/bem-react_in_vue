<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Button msg="Click to me" />
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  import Button from './components/Button.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
    Button
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
