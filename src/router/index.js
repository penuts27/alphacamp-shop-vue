import Vue from 'vue'
import VueRouter from 'vue-router'
import CheckOut from '../views/CheckOut.vue'
import Notfound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "check-out",
    component: CheckOut
  }
  ,{
    path: "*",
    name: "not-found",
    component: Notfound
  }
];

const router = new VueRouter({
  routes
})

export default router
