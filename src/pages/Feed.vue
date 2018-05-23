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

   beforeMount() {
      Promise.all([
         fetch('https://jsonplaceholder.typicode.com/posts')
         .then(res => res.json())
         .then(data => {
            this.articles = data
         }),

         fetch('https://jsonplaceholder.typicode.com/users')
         .then(res => res.json())
         .then(data => {
            data.forEach(item => {
               this.users[item.id] = item
            })
         })
      ])
      .then(() => {
         // jesus
         this.articles = this.articles.map(item => {
            item = Object.assign({},item,{ author: this.users[item.userId].name })
            return item
         }).sort((a, b) => a.title.length - b.title.length)
      })
   }
}
</script>

<style lang="css">
.banner {
   font-size: 4em;
}
</style>
