import Vue from 'vue'
import App from './App.vue'
import VueModal from 'vue-js-modal'


Vue.use(VueModal, {dialog: true, dynamic: true, injectModalsContainer: true})


new Vue({
  el: '#app',
  render: h => h(App)
})
