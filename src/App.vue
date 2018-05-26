<template>
  <div id="app">
      <nav class="navbar">
          <div class="nav-elem brand" >
            <router-link tag="a" :to="{ name: 'Feed'}">Feedium</router-link>
          </div>
          <div class="nav-elem" >
            <router-link tag="a" :to="{ name: 'Authors'}">Authors</router-link>
          </div>
          <div class="nav-elem" >
            <router-link tag="a" :to="{ name: 'About'}">About</router-link>
          </div>
      </nav>
     <main>
        <router-view/>
     </main>
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
   font-family: 'Helvetica Neue', 'Open Sans', Arial, sans-serif;
   font-size: normal;
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
    font-size: 1.25em;
    padding: 1em;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    background-color: #325D88;
}

.nav-elem {
  margin-right: 1.5em;
  line-height: 30px;
}

.nav-elem a {
  color: #EBEBEB;
}

.brand a {
  font-size: 1.1em;
  font-weight: 500;
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
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
