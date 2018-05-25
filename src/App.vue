<template>
  <div id="app">
      <div class="navbar">
          <div class="nav-elem brand" >
            <router-link tag="a" :to="{ name: 'Feed'}">Feed</router-link>
          </div>
          <div class="nav-elem" >
            <router-link tag="a" :to="{ name: 'Friends'}">Friends</router-link>
          </div>
          <div class="nav-elem" >
            <router-link tag="a" :to="{ name: 'About'}">About</router-link>
          </div>
      </div>
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

.navbar {
    padding: 1em;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    background-color: #325D88;
}
.nav-elem {
  margin-right: 2em;
}
.nav-elem a {
  color: #EBEBEB;
}
.brand a {
  font-size: 1.5em;
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}
</style>
