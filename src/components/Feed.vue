<template>
   <main>
      <div class="container">
        <h1 v-bind:class="{big: isBig }" v-on:click="toggle">{{ msg }}</h1>
      </div>
   </main>
</template>

<script>
export default {
  name: 'Feed',
  data() {
     return {
       posts: [
         {title:"Google takes over world",content:"Big whoop."},
         {title:"Bagels, Still great!",content:"Scientists say they are 'yummy'"}
       ],
       msg: "Welcome to the Vue-Demo",
       isBig: false
     }
  },
  methods: {  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
   margin: auto;
}

h1 {
   padding: 10px;
   border: 10px solid transparent;
}

.line {
   border: 10px dotted red;
}

.big {
  font-size: 5em;
}
</style>
