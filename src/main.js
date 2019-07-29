import Vue from 'vue'
import 'bootstrap'
import "./scss/style.scss"
import App from './App.vue'
import router from './router'
import store from './store'
import JQuery from 'jquery'
window.$ = JQuery
import 'chart.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
