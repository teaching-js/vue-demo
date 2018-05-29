<template>
   <div class="container">
     <h1>{{ msg }} {{name}}!</h1>
   </div>
</template>

<script>
export default {
  name: 'Feed',
  props: {
    name: String
  },
  data() {
     return {
       posts: [
         {
            id: 1, title:"Google takes over world", body: "Big whoop."
         },
         {
            id: 2, title:"Bagels, Still great!", body: "Scientists say they are 'yummy'"
         }
       ],
       msg: "Welcome to the"
     }
  },
  methods: {  }
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
