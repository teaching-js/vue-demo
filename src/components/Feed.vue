<template>
   <div class="container">
      <!-- Eventually change to vue shorthand -->
     <h1>{{ $options.name }}</h1>
     <Post v-for="post in posts" :post="post" :key="post.id"/>
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
     }
  },
  methods: {  },
  computed: { }
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
