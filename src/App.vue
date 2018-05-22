<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>

/* root style */
* {
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   color: #2c3e50;
   font-family: 'Helvetica Neue', Arial, sans-serif;
   margin: 0;
   padding: 0;
}

h1 {
   font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}

main {
   background-color: #eee;
   display: flex;
   height: 100vh;
   justify-content: space-around;
}
</style>
