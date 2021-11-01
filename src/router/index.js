import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)
let isYaboUi = ['10031', '10055', '10024', '10029', '10059', '10033', '10063', '10028', '10027', '10026', '10025', '10060', '10023', '10022', '10043', '10052', '10053', '10054', '10056'].includes(process.env.VUE_APP_PROJECT_NAME)
let esportUi = ['10050', '10051'].includes(process.env.VUE_APP_PROJECT_NAME)
let isBlUi = ['10045'].includes(process.env.VUE_APP_PROJECT_NAME)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => {
      if (isYaboUi) {
        return import('../views/yaboHome.vue')
      } else if (esportUi) {
        return import('../views/esportHome.vue')
      }else if(isBlUi){
        return import('../views/blHome.vue')
      } else {
        return import('../views/Home.vue')
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
