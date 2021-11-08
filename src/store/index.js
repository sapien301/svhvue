import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    loggedUser: [],
    cartProducts: [],
    orderProducts: [],
    cop: [],
    isAdmin : 0,
  },

  getters: {
    getloggedUser: state => {
      return state.loggedUser

    },
    


    cartProducts: state => {
      return state.cartProducts
    },
    orderProducts: state => {
      return state.orderProducts
    },
    cop: state => {
      return state.cop
    }
  },

  mutations: {
    ADD_LOGGED_USER: (state, user) => {
      state.loggedUser = user;
    },

    LOGOUT: (state) => {
      state.loggedUser = []
      state.cartProducts = []
      state.orderProducts = []
      state.cop = []
      state.isAdmin = 0
    },

    GET_CART_PRODUCTS: (state, user) => {
      axios.post("http://localhost:3000/api/cart", user)
        .then((response) => {
          state.cartProducts = response.data.data

        })
    },
    GET_ORDER_PRODUCTS: (state, user) => {
      axios.post("http://localhost:3000/api/uorders", user)
        .then((response) => {
          state.orderProducts = response.data.data

        })
    },
    GET_CURRENT_OP: (state, order_id) => {
      axios.post("http://localhost:3000/api/cop", order_id).then((response) => {
        state.cop = response.data.data
      })
    }

  },
  actions: {

  },
  modules: {

  },
});
