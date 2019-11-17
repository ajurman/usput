import Vue from 'vue'
import VueRouter from 'vue-router'
import Pocetna from '../views/pocetna.vue'
import galerija from '../views/galerija.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
