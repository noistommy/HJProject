// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { VueExtendLayout, layout } from 'vue-extend-layout'
// import { VueHammer } from 'vue2-hammer'

import store from '@/vuex/store'
import Vue from 'vue'
// import App from './App'
import axios from 'axios'
import router from './router'
import '../semantic/dist/semantic.css'
import '../semantic/dist/semantic' // importing semantic js

Vue.config.productionTip = false
Vue.use(VueExtendLayout)
// Vue.use(VueHammer)

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...layout,
  store,
  // template: '<App/>',
})
