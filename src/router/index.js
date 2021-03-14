import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/create-flight',
    name: 'CreateFlight',
    component: () => import('../views/CreateFlight.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
