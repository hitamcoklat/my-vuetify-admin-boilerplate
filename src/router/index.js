import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pendaftaran from '../views/Pendaftaran.vue'
import Login from '../views/Login.vue'
import Logout from "../components/Logout.vue"
import Dashboard from "../views/Dashboard.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/pendaftaran",
    name: "Pendaftaran",
    component: Pendaftaran
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
})

export default router
