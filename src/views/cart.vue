<template>
  <div>
    <h1>CART PRODUCTS</h1>

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
          <b-col><b-button variant="danger">Remove</b-button></b-col>
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
</template>

<script>
import { mapState } from "vuex";
//import axios from 'axios';

export default {
  name: "cart",
  data() {
    return {
      cartValue: 0,
    };
 },

  computed: {
    ...mapState(["loggedUser", "cartProducts"]),
  },
  methods: {
    calulateTotalPrice() {
      this.cartValue = 0;
      this.cartProducts.forEach((product) => {
        this.cartValue += product.prod_price;
      });
    },
  },
  beforeMount() {
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

