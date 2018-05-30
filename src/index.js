import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import { Profile, Feed, About, Authors } from '@/pages'

Vue.use(Router)

Vue.config.productionTip = false

const router = new Router({
   routes: [
      {
         path: '/users/:id',
         name: 'Profile',
         component: Profile,
         props: (route) => ({
            id: Number(route.params.id),
         })
      },
      {
         path: '/users',
         name: 'Authors',
         component: Authors
      },
      {
         path: '/',
         name: 'Feed',
         component: Feed
      },
      {
         path: '/about',
         name: 'About',
         component: About
      }
   ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
