
import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import VModal from 'vue-js-modal'

Vue.use(VModal, { dynamic: true, injectModalsContainer: true })
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCA53dTtqh9bPm2nRjbl8au5yqxE4-F4DI'
  }
})

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
