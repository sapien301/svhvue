<template>
  <div>
    <div v-if="this.$store.state.isAdmin">
      <div>
        <b-navbar variant="info" type="light">
          <b-navbar-brand tag="h1" class="mb-0"
            ><router-link to="/admin" style="color: black"
              >Admin Dashboard</router-link
            ></b-navbar-brand
          >

          <b-navbar-item
            ><b-button variant="danger" style="margin-right: 10px"
              ><router-link to="/products" style="color: white"
                >Products</router-link
              ></b-button
            ></b-navbar-item
          >
          <b-navbar-item
            ><b-button @click="logout()">Sign Out</b-button></b-navbar-item
          >
        </b-navbar>
      </div>
      <div
        class="accordion"
        style="margin-top: 20px; margin-bottom-10px"
        role="tablist"
      >
        <b-button block v-b-toggle.accordion-2 variant="warning"
          >Pending Orders</b-button
        >

        <b-collapse
          id="accordion-2"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <div>
            <div v-for="(item, index) in orders" :key="index">
              <b-container>
                <b-row class="space align-item-center">
                  <b-col-2 style="margin-top: 10px">{{ index + 1 }}</b-col-2>
                  <b-col
                    ><img
                      :src="item.prod_image"
                      alt="product_image"
                      width="100px"
                    />
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
                  <b-col>
                    <div v-if="item.tracking_id && item.delivery">
                      <h5 style="margin-bottom: 10px">
                        Delivery Partner :{{ item.delivery }}<br />
                        Tracking Id : {{ item.tracking_id }}
                      </h5>
                      <br />
                      <form @submit.prevent="handleSubmit1(item)">
                        <div class="row" style="margin-bottom: 10px">
                          <b-form-checkbox
                            v-model="form1.Dstatus"
                            value="1"
                            unchecked-value="0"
                            required
                          >
                            Order Delivered?
                          </b-form-checkbox>
                          <b-form-textarea
                            v-model="form1.comment"
                            placeholder="Enter a message for the customer"
                            rows="3"
                            max-rows="6"
                          ></b-form-textarea>
                        </div>
                        <div class="row" style="margin-top: 10px">
                          <button type="submit" class="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                    <div v-else>
                      <div class="row g-3">
                        <form @submit.prevent="handleSubmit(item)">
                          <div class="row" style="margin-bottom: 10px">
                            <b-form-group
                              label="Select Delivery Partner"
                              v-slot="{ ariaDescribedby }"
                            >
                              <b-form-radio
                                v-model="form.delivery"
                                :aria-describedby="ariaDescribedby"
                                name="some-radios"
                                value="The Professional Couriers"
                                >The Professional Couriers</b-form-radio
                              >
                              <b-form-radio
                                v-model="form.delivery"
                                :aria-describedby="ariaDescribedby"
                                name="some-radios"
                                value="E-kart Logistics"
                                >E-kart Logistics</b-form-radio
                              >
                            </b-form-group>

                            <!-- <input
                        type="text"
                        v-model="form.delivery"
                        class="form-control"
                        placeholder="Enter Delivery Partner"
                        required
                      /> -->
                          </div>
                          <div class="row" style="margin-top: 10px">
                            <input
                              type="text"
                              v-model="form.tracking_id"
                              class="form-control"
                              placeholder="Enter Tracking Id"
                              required
                            />
                          </div>
                          <div class="row" style="margin-top: 10px">
                            <button type="submit" class="btn btn-primary">
                              Update
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </div>
        </b-collapse>
      </div>

      <div >
        <div class="accordion" style="margin-top: 20px" role="tablist">
          <b-button block v-b-toggle.accordion-1 variant="success"
            >Completed Orders</b-button
          >

          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <div>
              <b-table striped hover :items="items" :fields="fields"></b-table>
            </div>
          </b-collapse>
        </div>
      </div>
    </div>
    <div v-else>
      <h3 class="text-center" style="margin-top: 200px">Access Restricted</h3>
      <p class="text-center">
        <router-link to="/">Go To Homepage</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  name: "admin",
  data() {
    return {
      orders: null,
      form: {
        delivery: "",
        tracking_id: "",
      },
      form1: {
        Dstatus: Number,
        comment: "",
      },
      items: null,
      fields: [
        {
          key: "name",
        },
        {
          key: "city",
        },
        {
          key: "prod_name",
          label: "Product Name",
        },
        {
          key: "prod_price",
          label: "Price(INR)",
        },

        {
          key: "delivery",
          label: "Delivery Partner",
        },
        {
          key: "day",
          label: "Order Placed On",
        },

        {
          key: "dday",
          label: "Order Delivered On",
        },
      ],
    };
  },
  methods: {
    handleSubmit: function (item) {
      const dDetails = {
        o_id: item.o_id,
        t_id: this.form.tracking_id,
        dp: this.form.delivery,
      };
      axios
        .post("http://localhost:3000/api/uDDetails", dDetails)
        .then((response) => {
          if (response.data.data) {
            // console.log(response.data.data);
            this.getOrders();
            this.$alert("success");
          } else {
            this.$alert("Some error has occurred");
          }
        });
    },
    handleSubmit1: function (item) {
      const dstat = {
        o_id: item.o_id,
        stat: this.form1.Dstatus,
        comment: this.form1.comment,
        date: new Date().toDateString(),
      };
      //console.log(dstat);
      axios.post("http://localhost:3000/api/dstat", dstat).then((response) => {
        if (response.data.data) {
          this.getOrders();
          this.getCOrders();
          this.$alert("success");
        } else {
          this.$alert("Some error has occurred");
        }
      });
    },
    getOrders() {
      axios.get(`http://localhost:3000/api/orders`).then((response) => {
        this.orders = response.data.data;
      });
    },
    getCOrders() {
      axios.get(`http://localhost:3000/api/corders`).then((response) => {
        this.items = response.data.data;
      });
    },
    ...mapMutations(["LOGOUT"]),

    logout() {
      this.LOGOUT();
      this.$router.push("/login");
    },
  },
  mounted() {
    axios.get(`http://localhost:3000/api/orders`).then((response) => {
      this.orders = response.data.data;
    });

    axios.get(`http://localhost:3000/api/corders`).then((response) => {
      this.items = response.data.data;
    });
  },
};
</script>

<style >
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