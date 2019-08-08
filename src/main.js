import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { apiURL } from "./config/vue.config";
import 'bootstrap'
import "./scss/style.scss"
import App from './App.vue'
import router from './router'
import store from './store'
import JQuery from 'jquery'

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

axios.defaults.baseURL = apiURL;

window.$ = JQuery
import 'chart.js'

Vue.config.productionTip = false

Vue.router = router
Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
    tokenStore: ['localStorage'],
    rolesVar: 'role',
    registerData: {url: 'auth/register', method: 'POST', redirect: null},
    loginData: {url: 'auth/login', method: 'POST', redirect: null, fetchUser: true},
    logoutData: {url: 'auth/logout', method: 'POST', redirect: null, makeRequest: true},
    fetchData: {url: 'auth/user', method: 'GET', enabled: true},
    refreshData: {url: 'auth/refresh', method: 'GET', enabled: true, interval: 30}
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
