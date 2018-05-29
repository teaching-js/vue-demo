<template>
  <div id="app">
    <main>
      <Feed name="Vue-Demo"/>
    </main>
  </div>
</template>

<script>
import { Feed } from '@/components'

export default {
  name: 'app',
  components: {
    /* es6 shorthand for 'Feed' : Feed */
    Feed
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display');

/* root style // global css */
* {
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   color: #121212;
   font-family: 'Helvetica Neue', 'Open Sans', Arial, sans-serif;
   margin: 0;
   padding: 0;
}


html, body {
   background-color: #f5f5f5;
}

main {
   background-color: #eee;
   display: flex;
   height: 100vh;
}

a {
  text-decoration: none;
  color: #325D88;
}

.container {
   margin: auto;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   max-width: 1200px;
}
</style>
