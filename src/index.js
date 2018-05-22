import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import { Profile } from './components'

Vue.config.productionTip = false

const router = new Router({
   routes: [
      {
         path: '/profile',
         name: 'Profile',
         component: Profile
      },
      {
         path: '/',
         name: 'Home',
         component: App
      }
   ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
