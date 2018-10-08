import Vue from 'vue'
import App from './App.vue'
import VueModal from 'vue-js-modal'
import store from './store'

Vue.use(VueModal, {dialog: true, dynamic: true, injectModalsContainer: true})


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
