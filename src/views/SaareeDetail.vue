<template>
  <div>
    <Header />
    
    <!-- {{this.related_products}} -->
    <b-container style="margin-top: 20px">
      <b-row>
        <div class="col-4">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="0"
            controls
            indicators
            background="#ababab"
            img-width="100px"
            img-height="200px"
            style="text-shadow: 1px 1px 2px #333"
          >
            <b-carousel-slide
              v-bind:img-src="saaree.image1"
              img-width="100px"
              img-height="200px"
            ></b-carousel-slide>
            <b-carousel-slide
              v-bind:img-src="saaree.image2"
              img-width="100px"
              img-height="600px"
            ></b-carousel-slide>
            <b-carousel-slide
              v-bind:img-src="saaree.image3"
              img-width="100px"
              img-height="200px"
            ></b-carousel-slide>
          </b-carousel>
        </div>

        <b-col>
          <b-container>
            <br />
            <h1 style="color: #009900">{{ saaree.saaree_name }}</h1>
            <br />
            <h3>Price : Rs {{ saaree.price }}</h3>

            <p>{{ saaree.description }}</p>
            <h5><i>Addtional Details</i></h5>
            <p><b>Material</b> : {{ saaree.material }}</p>
              
            <p><b>Wash</b> : {{ saaree.wash }}</p> 
            <div v-if="saaree.stock > 1" >
              <p style="color: green">In Stock</p>
              <p>The product will be delivered within 3-7 days</p>
              <b-row>
                <b-col
                  ><b-button
                    variant="outline-primary"
                    v-on:click="add_to_cart()"
                    >Add To Cart</b-button
                  >
                </b-col>
              </b-row>
            </div>
            <div v-else style="color: red">
              <p>Out of Stock</p>
            </div>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  <div>
    <footer-bar />
  </div>
  </div>
  
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";
import Header from "../components/Header.vue";
import FooterBar from "../components/FooterBar.vue";

export default {
  components: { Header,FooterBar },
  name: "SaareeDetail",
  data() {
    return {
      saaree: null,
      router: this.$route.params.saaree_id,
      //related_products : null,


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
       // this.related_products = this.saaree.keywords
        // let response2 = await this.$http.post(`http://localhost:3000/api/rProducts`,{ key :this.saaree.keywords});
        // this.related_products = response2.data.data

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