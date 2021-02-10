import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import share from '@/views/share.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'socail-shares',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/social_shares.vue')
  // },
  {
    path: '/share',
    name: 'share',
    component: share
  },
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
