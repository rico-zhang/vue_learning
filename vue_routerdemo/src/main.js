import Vue from 'vue'
import App from './App.vue'
import "./assets/reset.css";
import router from './router.js';

import axios from './http.js'


Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
