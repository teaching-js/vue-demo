<template lang="html">
<nav class="navbar">
    <div :class="['nav-elem', { 'brand': link.style }]" v-for="link in links" :key="link.name">
      <router-link tag="a" :to="{ name: link.name}">{{ link.text}}</router-link>
    </div>
</nav>
</template>

<script>
export default {
   name: 'nav-bar',
   data() {
      return {
         links: [
            {
               name: 'Feed',
               text: 'Feedium',
               style: 'brand'
            },
            {
               name: 'Authors',
               text: 'Authors',
               style: ''
            },
            {
               name: 'About',
               text: 'About',
               style: ''
            }
         ]
      }
   }
}
</script>

<style lang="css" scoped>
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
</style>
