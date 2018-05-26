<template lang="html">
  <section class="container">
     <h1 class="banner">{{ $options.name }}</h1>
     <br>
     <h3 class="sub-banner">{{ subheader }}</h3>
     <User v-for="user in users"
        :user="user"
        :key="user.id"
     />
  </section>
</template>

<script>
import { User } from '@/components'

export default {
  name: 'Authors',
  props: {},
  data() {
     return {
        subheader: "The Feedium stable includes some of the world's finest writers" +
                  " and internet snark manufacturers. We pride ourselves on "+
                  "sick prose and long pointless comment threads.",
        users: [],
     }
  },
  components: {
    User
  },
  methods: {},

  beforeMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {this.users = data})
  }

}
</script>
