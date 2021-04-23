<template>
  <div>
    <b-container>
      <h1>{{ this.loggedUser.name }}</h1>

      <b-row>
        <b-col>
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="0"
            controls
            indicators
            background="#ababab"
            img-width="200px"
            img-height="100px"
            style="text-shadow: 1px 1px 2px #333"
          >
            <b-carousel-slide v-bind:img-src="saaree.image1"></b-carousel-slide>
            <b-carousel-slide v-bind:img-src="saaree.image2"></b-carousel-slide>
            <b-carousel-slide v-bind:img-src="saaree.image3"></b-carousel-slide>
          </b-carousel>
        </b-col>

        <b-col>
          <b-container>
            {{ saaree }}
            <br /><br /><br />
            <h1>{{ saaree.saaree_name }}</h1>

            <h1>Price : Rs {{ saaree.price }}</h1>

            <p>{{ saaree.description }}</p>

            <br />
            <br />
            <b-row>
              <b-col
                ><b-button variant="outline-primary" v-on:click="add_to_cart()"
                  >Add To Cart</b-button
                >
              </b-col>
              <b-col><b-button variant="primary">Buy Now</b-button></b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";

export default {
  components: {},
  name: "SaareeDetail",
  data() {
    return {
      saaree: null,
      router: this.$route.params.saaree_id,
    };
  },
  mounted() {
    this.getCompany();
  },
  computed: {
    ...mapState(["loggedUser"]),
  },
  methods: {
    ...mapMutations(["GET_CART_PRODUCTS"]),

    async getCompany() {
      try {
        let response = await this.$http.get(
          `http://localhost:3000/api/saarees`
        );

        this.saaree = response.data.find(
          (saaree) => saaree.saaree_id === this.router
        );
      } catch (error) {
        console.log(error.response);
      }
    },
    add_to_cart: function () {
      const cart = {
        user_id: this.loggedUser.id,
        prod_id: this.saaree.saaree_id,
        prod_name: this.saaree.saaree_name,
        prod_image: this.saaree.image1,

        prod_price: this.saaree.price,
      };
      //console.log(cart);

      axios
        .post("http://localhost:3000/api/addtocart", cart)
        .then((response) => {
          if (response.data.data) {
            this.GET_CART_PRODUCTS(this.loggedUser);
            this.$alert("Added to Cart").then(() => {
              this.$router.replace("/cart");
            });
          } else {
            this.$alert("Please Login");

            this.$router.push("/Login");
          }
        });
    },
  },
};
</script>

<style>
</style>