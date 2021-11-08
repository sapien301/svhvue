


import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Contact from "../views/Contact.vue";
import admin from "../views/admin.vue";
import products from "../views/products.vue";
//import SearchResults from "../views/SearchResults.vue";



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
    props: false,
    component: () =>
      import('../views/SaareeDetail.vue')
  },
  // {
  //   path : "/search/:key_id",
  //   name : 'SearchResults',
  //   props : true,
  //   component: () =>
  //   import('../views/SearchResults.vue')
  // },
  {
    path: "/cart",
    name: 'cart',
    component: () => 
      import('../views/cart.vue')
     
    
  },
  {
    path : "/Shipping",
    name : 'Shipping',
    component : () =>
    import('../views/Shipping.vue')
  },
  {
    path : "/orders",
    name : 'orders',
    component : () =>
    import('../views/myorders.vue')
  },
  {
    path : "/admin",
    name : 'admin',
    //beforeEnter : checkAdmin,
    component : admin,
    //meta : { adminAuth : true}
    // beforeEnter: (to, from, next) => {
    //    if(this.$store.state.isAdmin){
    //      next()
    //    }else{
    //     next({name : "/"})
    //    }
    // }
    

  },
  {
    path : "/products",
    name : 'products',
    component : products,
  },

];

// function checkAdmin(to,from,next){
//   if(this.$store.state.isAdmin){
//     next({path : '/admin'});

//   }else{
//     this.$alert("Access Restricted")
//   }
// }



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to,from,next) =>{
//   if(to.meta.adminAuth){
//     const authUser = this.$store.state.isAdmin
//     if(authUser){
//       next()
//     }else{
//       this.$alert("Access Restricted")
//     }
//   }
// });

export default router;
