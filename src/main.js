import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Vuelidate from 'vuelidate';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueSimpleAlert from "vue-simple-alert";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const base = axios.create({
  baseURL: "http://localhost:3000/api",
});
Vue.prototype.$http = base;

Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(axios)

Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.use(VueSimpleAlert);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
