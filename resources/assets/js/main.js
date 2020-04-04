import Vue from 'vue'
import router from './router'
import App from '@/components/layout/App'
import axios from 'axios'

Vue.config.productionTip = false

let token = document.querySelector('meta[name="csrf-token"]')

axios.defaults.headers.common['X-CSRF-TOKEN'] = token

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
