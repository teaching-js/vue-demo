<template lang="html">
   <main>
      <h1 class="banner">Feed</h1>
      <Blog v-for="article in articles"
         :article="article"
         :key="article.id"
      />
   </main>
</template>

<script>
import { Blog } from '@/components'

export default {

   data() {
      return {
         articles: [],
         users: {}
      }
   },

   components: {
      Blog
   },

   mounted() {
      this.articles.forEach(item => {
         item.author = this.users[item.userId].name
      })
   },

   beforeMount() {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
         this.articles = data
      })

      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
         data.forEach(item => {
            this.users[item.id] = item
         })
      })
   }
}
</script>

<style lang="css">
.banner {
   font-size: 4em;
}
</style>
