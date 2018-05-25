<template>
  <div id="app">
    <Feed msg="Welcome to the Vue-Demo!"/>
  </div>
</template>

<script>
import { Feed } from '@/components'

export default {
  name: 'app',
  components: {
    Feed
  }
}
</script>

<style>

* {
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   color: #2c3e50;
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   margin: 0;
   padding: 0;
}

main {
   background-color: #eee;
   display: flex;
   height: 100vh;
   justify-content: space-around;
}
</style>
