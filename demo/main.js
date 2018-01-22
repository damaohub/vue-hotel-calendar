import Vue from 'vue'

import VueCalendar from 'vue-hotel-calendar'
Vue.use(VueCalendar)

// Vue.config.silent = true

import App from './app.vue'

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
  })