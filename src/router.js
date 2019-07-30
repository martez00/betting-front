import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Bets from './views/Bets.vue'
import Users from './views/Users.vue'

Vue.use(Router)

export default new Router({
    linkExactActiveClass: 'ative',
    mode: 'history',
    routes: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
            path: '/bets',
            name: 'bets',
            component: Bets
        },
        {
            path: '/users',
            name: 'users',
            component: Users
        },
  ]
})
