<template>
  <div class="navb">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand>
        <router-link to="/"
          ><img src="../assets/logo.png" alt="logo" width="170px" height="65px"
        /></router-link>
      </b-navbar-brand>

      <!-- <b-nav-form>
        <b-form-input
          size="md"
          class="mr-lg-2 pr-5"
          placeholder="Search"
          required
          type="text"
          v-model="keyword"
        ></b-form-input>
        <b-button variant="secondary" style="margin-right: 10px"
          >Search</b-button
        >

        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form> -->

      <b-navbar-nav class="ml-auto">
        <b-nav-item
          ><router-link to="/"
            ><h4 style="color: #1a1aff">Products</h4></router-link
          ></b-nav-item
        >
        <b-nav-item
          ><router-link to="#"
            ><h4 style="color: #1a1aff">About</h4></router-link
          ></b-nav-item
        >
        <b-nav-item
          ><router-link to="/contact"
            ><h4 style="color: #1a1aff">Contact</h4></router-link
          ></b-nav-item
        >

        <div v-if="this.loggedUser.name">
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>

            <b-dropdown-item>{{ this.loggedUser.name }}</b-dropdown-item>
            <b-dropdown-item
              ><router-link to="/cart"
                >Cart({{ this.cartProducts.length }})</router-link
              ></b-dropdown-item
            >

            <b-dropdown-item>
              <router-link to="/orders">Orders</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-button @click="logout()">Sign Out</b-button></b-dropdown-item
            >
          </b-nav-item-dropdown>
        </div>
        <div v-else>
          <b-nav-item
            ><router-link to="/Login"
              ><h4 style="color: #1a1aff">Login</h4></router-link
            ></b-nav-item
          >
        </div>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Header",

  // data() {
  //   return {
  //      keyword: null 
  //   };
  // },
  // props : {
  //   key_id : Object,
  // },

  computed: {
    ...mapState(["loggedUser", "cartProducts"]),
  },

  methods: {
    ...mapMutations(["LOGOUT"]),

    logout() {
      this.LOGOUT();
      this.$router.push("/");
    },
  },
};
</script>


<style >
.navb {
  background-color: #ff8533;
}
</style>