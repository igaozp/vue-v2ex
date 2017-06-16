import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.config.productionTip = false
Vue.use(MuseUI)
Vue.use(Axios, VueAxios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
