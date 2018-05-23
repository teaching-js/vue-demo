import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import { Profile, Feed, Friends } from './pages'

Vue.use(Router)

Vue.config.productionTip = false

const router = new Router({
   routes: [
      {
         path: '/users/:id',
         name: 'Profile',
         component: Profile,
         props: (route) => ({
            id: route.params.id,
         })
      },
      {
         path: '/users',
         name: 'Friends',
         component: Friends
      },
      {
         path: '/',
         name: 'Feed',
         component: Feed
      }
   ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
