import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';

import 'bootstrap'
import "./scss/style.scss"
import App from './App.vue'
import router from './router'
import store from './store'
import JQuery from 'jquery'

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'http://betting.test/api/V1';

window.$ = JQuery
import 'chart.js'

Vue.router = router
Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
