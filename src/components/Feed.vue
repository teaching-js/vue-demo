<template>
   <div class="container">
      <!-- Eventually change to vue shorthand -->
     <h1>{{ upperCaseTitle($options.name) }}</h1>
     <div v-if="loading">
        Site not ready yet.
     </div>
     <Post v-else v-for="post in posts" :post="post" :key="post.id"/>
   </div>
</template>

<script>
import Post from './Post.vue'

export default {
  name: 'Feed',
  components: { Post },
  data() {
     return {
       posts: [
         {
            id: 1, title:"Google takes over world", body: "Big whoop."
         },
         {
            id: 2, title:"Bagels, Still great!", body: "Scientists say they are 'yummy'"
         },
         {
            id: 3, title:"Google takes over world", body: "Big whoop."
         },
         {
            id: 4, title:"Bagels, Still great!", body: "Scientists say they are 'yummy'"
         }
       ],
       loading : true
     }
  },
  methods: {
     upperCaseTitle(post) {
        return post.toUpperCase()
     }
  },
  computed: { },
  created() {
      // eslint-disable-next-line
      fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then(json => {
            this.posts = json.map(item => item)
         })
         .then(() => {
            return new Promise(res => {
               return setTimeout(() => res(), 2000)
            })
         })
         .then(() => {
            this.loading = !this.loading
         })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* sick transition too fam */
h1 {
   text-align: center;
   padding: 10px;
   margin: 0 auto;
   border: 10px solid transparent;
   user-select: none;
   cursor: pointer;
   transition: font-size 0.3s;
}

.line {
   border: 10px dotted red;
}

.big {
  font-size: 5em;
}
</style>
