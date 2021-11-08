<template>
  <div>
    <Header />

    <div v-if="this.loggedUser.name">
      <div v-if="this.cartValue != 0" style="margin-top: 20px">
        <div class="container-fluid">
          <div class="row">
            <div class="col-8">
              <h3 class="text-center">Cart</h3>

              <div
                class="col-md-4"
                v-for="(item, index) in this.cartProducts"
                :key="index"
              >
                <b-list-group>
                  <b-list-group-item class="d-flex align-items-center">
                    <span
                     
                      style="margin-right: 20px"
                      >{{ index + 1 }}</span
                    >
                    <b-avatar
                      class="mr-3"
                      :src="item.prod_image"
                      size="150px"
                      style="margin-right: 20px"
                    ></b-avatar>
                    <span class="mr-auto" style="margin-right: 40px"
                      ><h3>{{ item.prod_name }}</h3>
                      <br />
                      <h4>Rs {{ item.prod_price }}</h4>
                    </span>
                    <span style="margin-right: 20px"
                      ><b-button
                        variant="danger"
                        v-on:click="remove_from_cart(item)"
                        >Remove
                      </b-button></span
                    >
                    <span style="margin-right: 20px"
                      ><b-button
                        variant="success"
                        v-on:click="order_product(item)"
                        >Buy
                      </b-button></span
                    >
                  </b-list-group-item>
                </b-list-group>
              </div>
            </div>
            <div class="col-4">
              <br> <br> <br>
              
              <h2>SubTotal : Rs. {{ this.cartValue }}</h2>
            </div>
          </div>
        </div>

        >
        <!-- <b-col
            ><span><b-button variant="success">Buy Now</b-button></span></b-col
          > -->
      </div>
      <div v-else>
        <h3 class="text-center" style="margin-top: 200px; ">The Cart Is Empty</h3>
        <p class="text-center" style="margin-bottom: 100px">
          <router-link to="/">Continue Shopping</router-link>
        </p>
      </div>
    </div>
    <div v-else>
      <h3 class="text-center" style="margin-top: 200px; ">User Not Logged In</h3>
      <p class="text-center" style="margin-bottom: 100px">
        <router-link to="/login">Login</router-link>
      </p>
    </div>
    <div>
      <footer-bar />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";
import Header from "../components/Header.vue";
import FooterBar from '../components/FooterBar.vue';

export default {
  name: "cart",
  components: {
    Header,
    FooterBar,
  },
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
    ...mapMutations(["GET_CART_PRODUCTS", "GET_CURRENT_OP"]),

    calulateTotalPrice() {
      this.cartValue = 0;
      this.cartProducts.forEach((product) => {
        this.cartValue += product.prod_price;
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
    order_product: function (product) {
      //console.log(product);
      this.remove_from_cart(product);
      axios
        .post("http://localhost:3000/api/order", product)
        .then((response) => {
          if (response.data.data) {
            this.GET_CURRENT_OP(product);
            this.$router.push("/Shipping");
            // console.log(response.data.data)
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
</style>

