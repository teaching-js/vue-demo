<template>
   <main>
      <div class="container">
        <h2 :class="{ 'line' : animating }">id: {{ id }}, {{ msg }}</h2>
      </div>
   </main>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    id: String
  },
  data() {
     return {
        msg: "Almar Butt",
        animating: false
     }
  },

  methods: {
    animateLine() {
      this.animating = !this.animating
      setTimeout(this.animateLine, 1000)
    }
  },

  beforeMount() {

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

h2 {
   padding: 10px;
   border: 10px solid transparent;
}

.line {
   border: 10px dotted red;
}
</style>
