import Vue from 'vue'
import VueRouter from 'vue-router'
import Pocetna from '../views/pocetna.vue'
import galerija from '../views/galerija.vue'
import lokacija from '../views/lokacija.vue'
import kontakt from '../views/kontakt.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Pocetna
  },
  {
    path: '/galerija',
    name: 'galerija',
    component: galerija
  },
  {
    path: '/lokacija',
    name: 'lokacija',
    component: lokacija
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: kontakt
  }
]

const router = new VueRouter({
  routes
})

export default router
