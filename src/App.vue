<template>
  <div id="app">
     <NavBar/>
     <main>
        <router-view/>
     </main>
  </div>
</template>

<script>
import { NavBar } from '@/components'

export default {
  name: 'app',
  components: {
     NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display');
/* root style */
* {
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   color: #121212;
   font-family: 'Helvetica Neue', 'Open Sans', Arial, sans-serif;
   margin: 0;
   padding: 0;
}

h1, h2 {
   font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}

html, body {
   background-color: #f5f5f5;
}
a {
  text-decoration: none;
  color: #325D88;
}

main {
   display: flex;
   padding: 50px;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}

.banner {
   font-size: 4em;
}

.sub-banner {
  color: #777777;
  margin-bottom: 2em;
}

.banner, .sub-banner {
   margin: 0 20px;
}

.container {
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   max-width: 800px;
   width: 600px;
}
</style>
