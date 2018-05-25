<template lang="html">
   <main>
     <h1 class="banner">Friends</h1>
     <br>
     <h3 class="sub-banner"> Find some new buddies! </h3>
     <User v-for="user in users"
        :user="user"
        :key="user.id"
     />
   </main>
</template>

<script>
import { User } from '@/components'

export default {
  name: 'Friends',
  props: {},
  data() {
     return {
        users: [],
     }
  },
  components: {
    User
  },
  methods: {},
  beforeMount() {
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {this.users = data})
    ])
  },
  mounted() {}
}
</script>

<style lang="css">
</style>
