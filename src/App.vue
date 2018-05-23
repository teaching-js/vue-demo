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
@import url('https://fonts.googleapis.com/css?family=Playfair+Display');
/* root style */
* {
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   color: #121212;
   font-family: 'Helvetica Neue', Arial, sans-serif;
   margin: 0;
   padding: 0;
}

h1, h2 {
   font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}

html, body {
   background-color: #f5f5f5;
}

main {
   display: flex;
   padding: 50px;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}
</style>
