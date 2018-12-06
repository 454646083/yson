import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './assets/js/router.js'
import './assets/css/cssreset.css'
import './assets/css/animate.css'
import '../node_modules/mint-ui/lib/style.css'
Vue.use(vueRouter)
import Mint from 'mint-ui';
import axios from 'axios';
import Vuex from 'vuex';
Vue.prototype.$http = axios;
Vue.use(Mint);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state,i) {
      state.count=i
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
  store:store
})
