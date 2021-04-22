


import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Contact from "../views/Contact.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path : "/contact",
    name : "contact",
    component : Contact,
  },
  {
    path: "/SignUp",
    //name : "SignUp",
    component: SignUp,
  },
  {
    path: "/saaree/:saaree_id",
    name: 'SaareeDetail',
    props: true,
    component: () =>
      import('../views/SaareeDetail.vue')
  },
  {
    path: "/cart",
    name: 'cart',
    component: () => 
      import('../views/cart.vue')
     
    
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
