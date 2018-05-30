<template>
  <!-- Eventually change to vue shorthand -->
  <section>
     <article @click="large = !large" :class="{ 'large': large }">
        <h1>{{ post.id}} {{ post.title }}</h1>
        <p>{{ post.body }}</p>
     </article>
  </section>
</template>

<script>
export default {
  name: 'Post',
  props: {
      post: {
         title: String,
         id: Number,
         body: String
      }
  },
  data() {
   return {
      large: false
   }
  }

}
</script>

<style media="screen" scoped>
.large {
   font-size: 2em;
   color: red;
   width: auto;
}

article {
   cursor: pointer;
}
</style>
