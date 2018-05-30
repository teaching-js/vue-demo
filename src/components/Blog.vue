<template lang="html">
   <section class="blog">
      <article>
         <div class="header-container">
            <h2>{{ proper_title }}</h2>
            <h5><router-link tag="a" :to="{
               name: 'Profile',
               params: {id: article.author.id }}">{{ article.author.name }}</router-link> | {{ article.date || "Today" }}</h5>
         </div>
         <div class="content-container">
            <p>{{ article.body }}</p>
         </div>
      </article>
   </section>
</template>

<script>
export default {
   props: {
      article: {
         title: String,
         body: String,
         author: Object
      }
   },
   computed: {
      proper_title() {
         return this.article.title.split(' ').map(word => {
            let chars = word.split('')
            chars[0] = chars[0].toUpperCase()
            return chars.join('')
         }).join(' ')
      }
   }
}
</script>

<style lang="css" scoped>

.blog {
   margin: 10px 20px;
   width: 450px;
   min-width: 300px;
}

.header-container {
   margin: 10px 0px;
}

.header-container * {
   margin: 5px 0px;
}

.content-container p {
   line-height: 1.5;
}

</style>
