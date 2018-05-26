<template lang="html">
   <section class="user">
      <article>
         <div class="header-container">
            <h2><router-link tag="a" :to="{ name: 'Profile', params: {id: user.id}}">{{ user.name }}</router-link></h2>
            <h5>{{user.email}} | {{user.address.city}}</h5>
         </div>
         <div class="content-container">
            <p>{{user.company.bs}}</p>
         </div>
      </article>
   </section>
</template>

<script>
export default {
   props: {
      user: Object
   }
}
</script>

<style lang="css" scoped>

.user {
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
