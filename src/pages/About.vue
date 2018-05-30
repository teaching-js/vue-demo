<template>
  <div class="container">
   <h1 class="banner">{{ $options.name }}</h1>
   <br>
   <h3 class="sub-banner">
     Your one stop shop for being able to express yourself online without the zuck watching you!
   </h3>
   <br>
   <div class="more">
     <div class="info">
       <h2> Jobs </h2><br>
       <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar auctor urna, nec porta ligula blandit vitae. Sed semper ante leo, sit amet porttitor metus faucibus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque lacus diam, vestibulum at nulla eu, placerat tempor quam. Vivamus nisl odio.
       </p>
     </div>
     <div class="info">
       <h2> History </h2><br>
       <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar auctor urna, nec porta ligula blandit vitae. Sed semper ante leo, sit amet porttitor metus faucibus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque lacus diam, vestibulum at nulla eu, placerat tempor quam. Vivamus nisl odio.
       </p>
     </div>
     <div class="info">
       <h2> Founders </h2><br>
       <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar auctor urna, nec porta ligula blandit vitae. Sed semper ante leo, sit amet porttitor metus faucibus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque lacus diam, vestibulum at nulla eu, placerat tempor quam. Vivamus nisl odio.
       </p>
     </div>
   </div>
  </div>
</template>

<script>

export default {
  name: 'About',
  props: {},
  data() {
     return {}
  },
  components: {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
   margin: auto;
   max-width: 900px;
   /*text-align: center; probs looks better in center tho tbh*/
}

p {
  color: #777777;
}
.more {
  width: 600px;
  display: flex;
  flex-direction: row;
}

.info {
  width: 33%;
  padding: 10px;
  margin: 0px 10px;
}

</style>
