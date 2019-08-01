import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Bets from './views/Bets.vue'
import Users from './views/Users.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                auth: undefined
            }
        },
        {
            path: '/bets',
            name: 'bets',
            component: Bets,
            meta: {
                auth: undefined
            }
        },
        {
            path: '/users',
            name: 'users',
            component: Users,
            meta: {
                auth: undefined
            }
        },
    ]
})
