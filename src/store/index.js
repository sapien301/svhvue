import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    loggedUser: [],
    cartProducts: [],
   // cartValue: 0,
  },

  getters: {
    getloggedUser: state => {
      return state.loggedUser

    },


    cartProducts: state => {
      return state.cartProducts
    },
    // cartValue: state => {
    //   return state.cartValue
    // },
  },

  mutations: {
    ADD_LOGGED_USER: (state, user) => {
      state.loggedUser = user;
    },

    LOGOUT: (state) => {
      state.loggedUser = []
      state.cartProducts = []
    },

    GET_CART_PRODUCTS: (state, user) => {
      axios.post("http://localhost:3000/api/cart", user)
        .then((response) => {
          state.cartProducts = response.data.data

        })
    },
    // CART_VALUE(state) {
      
    //   state.cartProducts.forEach((product) => {
    //     cartValue += product.prod_price;
    //     return cartValue
    //   });
    // },
  },
  actions: {

  },
  modules: {

  },
});
