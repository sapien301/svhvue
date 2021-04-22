<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="navb">
      <b-navbar-brand>
        <router-link to="/"
          ><img src="../assets/logo.png" alt="logo" width="170px" height="65px"
        /></router-link>
      </b-navbar-brand>

      <b-nav-form>
        <b-form-input
          size="sm"
          class="mr-lg-2"
          placeholder="Search"
        ></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>
      <b-navbar-nav class="ml-auto">
        <b-nav-item><router-link to="/">Products</router-link></b-nav-item>
        <b-nav-item><router-link to="#">About</router-link></b-nav-item>
        <b-nav-item><router-link to="/contact">Contact</router-link></b-nav-item>

        <div v-if="this.loggedUser.name">
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>

            <b-dropdown-item>Profile</b-dropdown-item>
            <b-dropdown-item
              ><router-link to="/cart">Cart({{this.cartProducts.length}})</router-link></b-dropdown-item
            >

            <b-dropdown-item
              ><b-button @click="logout()">Sign Out</b-button></b-dropdown-item
            >
          </b-nav-item-dropdown>
          
        </div>
        <div v-else>
          <b-nav-item><router-link to="/Login">Login</router-link></b-nav-item>
        </div>
      </b-navbar-nav>
    </b-navbar>

  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Header",

  computed: {
    ...mapState(["loggedUser","cartProducts"]),
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
  background-color: coral;
}
</style>