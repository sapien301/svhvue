
<template>
  <div>
    <Header />
<div v-if="this.loggedUser.name">

<div v-if="orders.length == 0">
    <h3 class="text-center" style="margin-top: 200px;">You've no orders </h3>
      <p class="text-center">
        <router-link to="/">Continue Shopping</router-link>
      </p>
</div>
    <div v-else>
      <!-- <p>{{ orders[0] }}</p> -->
      <div v-for="(item, index) in orders" :key="index">
        <b-container>
          <b-row class="space align-item-center">
            <b-col-2 style="margin-top: 10px">{{ index + 1 }}</b-col-2>
            <b-col
              ><img :src="item.prod_image" alt="product_image" width="100px" />
              <h5>{{ item.prod_name }}</h5>
              <h4>Rs {{ item.prod_price }}</h4>
              <p>
                Order Placed On <br />
                {{ item.day }}
              </p></b-col
            >

            <b-col>
              <p>{{ item.name }}</p>
              <p>{{ item.Address1 }}</p>
              <p>{{ item.Address2 }}</p>
              <p>{{ item.city }},{{ item.state }}</p>
              <p>{{ item.pincode }}</p>
              <p>Mobile : {{ item.mobile }}</p>
            </b-col>
            <b-col
              ><div v-if="item.dstatus">
                <p>Product Delivered On {{ item.dday }}</p> <br> <br>
                <p>Message from the seller : <br>
                {{item.comment}}</p>
              </div>
              <div v-else-if="item.tracking_id && item.delivery">
                
                  Delivery Partner :{{ item.delivery }}<br>
                   Tracking Id : {{ item.tracking_id }} <br>
                  <div v-if="item.delivery == 'E-kart Logistics'">
                  <span> 
                  <a href="https://ekartlogistics.com/" target="_blank">Go to order tracking</a>

                  </span>
                  </div>
                  <div v-else>
                    <span> 
                  <a href="https://www.tpcglobe.com/" target="_blank">Go to order tracking</a>

                  </span>
                  </div>
                  
               
              </div>
              <div v-else>
                <p>The delivery details and tracking ID will be updated soon.</p>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
  <div v-else>
    <h3 class="text-center" style="margin-top: 200px;">User Not Logged In</h3>
      <p class="text-center">
        <router-link to="/login">Login</router-link>
      </p>
  </div>
  <div>
      <footer-bar />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { mapState } from "vuex";
import axios from "axios";
import FooterBar from "../components/FooterBar.vue"

export default {
  name: "orders",
  components: {
    Header,
    FooterBar,
  },
  data() {
    return {
      orders: null,
    };
  },
  computed: {
    ...mapState(["loggedUser"]),
  },
  methods: {
    getMyOrders: function (user_id) {
      const Mo = {
        user_id: user_id,
      };
      axios.post("http://localhost:3000/api/myorders", Mo).then((response) => {
        if (response.data.data) {
          this.orders = response.data.data;
        }
      });
    },
  },

  mounted() {
    this.getMyOrders(this.loggedUser.id);
  },
};
</script>

<style>
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