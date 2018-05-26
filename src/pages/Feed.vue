<template lang="html">
   <section class="container">
      <h1 class="banner">Latest</h1>
      <br>
      <h3 class="sub-banner">Spill your thoughts, we won't tell ;)</h3>
      <Blog v-if="loaded" v-for="article in articles"
         :article="article"
         :key="article.id"
      />
   </section>
</template>

<script>
import { Blog } from '@/components'

export default {
   name: 'Feed',

   data() {
      return {
         articles: [],
         users: {},
         loaded: false
      }
   },

   components: {
      Blog
   },

   created() {
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
         // jesus (christ)
         this.articles = this.articles.map(item => {
            item = Object.assign({},item,{ author: this.users[item.userId] })
            return item
         }).sort((a, b) => a.title.length - b.title.length)
      })
      .then(() => {
         this.loaded = true
      })
   }
}
</script>
