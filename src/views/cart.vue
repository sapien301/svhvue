<template>
  <div>
    <div v-if="this.cartValue != 0">
      <h1>CART PRODUCTS</h1>
      {{ this.cartProducts }}
      <div
        class="col-md-4"
        v-for="(item, index) in this.cartProducts"
        :key="index"
      >
        <b-container>
          <b-row class="space align-item-center">
            <b-col>{{ index + 1 }}</b-col>
            <b-col
              ><img :src="item.prod_image" alt="product_image" width="100px"
            /></b-col>
            <b-col
              ><h5>{{ item.prod_name }}</h5></b-col
            >
            <b-col
              ><h4>Rs {{ item.prod_price }}</h4>
            </b-col>
            <b-col
              ><b-button variant="danger" v-on:click="remove_from_cart(item)"
                >Remove</b-button
              ></b-col
            >
            <b-col><b-button variant="success">Buy</b-button></b-col>
          </b-row>
        </b-container>
      </div>
      <b-container>
        <b-row>
          <b-col
            ><h2>SubTotal : Rs. {{ this.cartValue }}</h2></b-col
          >
          <b-col
            ><span><b-button variant="success">Buy Now</b-button></span></b-col
          >
        </b-row></b-container
      >
    </div>
    <div v-else>
      <h3 class="text-center" style="margin-top: 200px;">The Cart Is Empty</h3>
      <p class="text-center">
        <router-link to="/">Continue Shopping</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";

export default {
  name: "cart",
  data() {
    return {
      cartValue: 0,
    };
  },

  computed: {
    ...mapState(["loggedUser", "cartProducts"]),

    cartvalue() {
      return this.cartValue;
    },
  },
  methods: {
    ...mapMutations(["GET_CART_PRODUCTS"]),

    calulateTotalPrice() {
      this.cartValue = 0;
      this.cartProducts.forEach((product) => {
        this.cartValue += product.prod_price;
        //return this.cartValue;
      });
    },

    remove_from_cart: function (product) {
      const prod = {
        cart_id: product.cart_id,
      };
      axios
        .post("http://localhost:3000/api/removefromcart", prod)
        .then((response) => {
          if (response.data.data) {
            this.GET_CART_PRODUCTS(this.loggedUser);

            this.$alert("Product Removed From the Cart").then(() => {
              this.calulateTotalPrice();
            });
          } else {
            this.$alert("Some error occurred");
          }
        });
    },
  },
  mounted() {
    this.calulateTotalPrice();
  },
  
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.space {
  margin: 10px;
  border: 1px solid black;
}
.col-md-4 {
  max-width: 100%;
}


</style>>

