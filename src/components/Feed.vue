<template>
   <main>
      <div class="container">
        <h1 :class="{ 'line' : animating }">{{ msg }}</h1>
      </div>
   </main>
</template>

<script>
export default {
  name: 'Feed',
  props: {
    msg: String
  },
  data() {
     return {
        animating: false
     }
  },

  methods: {
    animateLine() {
      this.animating = !this.animating
      setTimeout(this.animateLine, 1000)
    }
  },

  mounted() {
     this.animateLine()
  }
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
</style>
