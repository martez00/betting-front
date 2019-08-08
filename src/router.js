import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Bets from './views/Bets.vue'
import Users from './views/Users.vue'
import Admin from './views/admin/Dashboard.vue'
import Sports from './views/admin/Sports.vue'

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
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
            meta: {
                auth: {roles: 2, redirect: {name: 'login'}, forbiddenRedirect: {name: 'home'}}
            }
        },
        {
            path: '/admin/sports',
            name: 'sports',
            component: Sports,
            meta: {
                auth: {roles: 2, redirect: {name: 'login'}, forbiddenRedirect: {name: 'home'}}
            }
        },
    ]
})
