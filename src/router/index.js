import Vue from 'vue'
import VueRouter from 'vue-router'
import CV from '../views/CV.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cv',
    name: 'CV',
    component: CV
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router