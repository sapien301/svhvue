<template>
  <div>
    <!-- <p>{{ this.cop[0] }}</p> -->
    <Header />
    <b-container>
      <b-row class="space align-item-center">
        <b-col
          ><img :src="this.cop[0].prod_image" alt="product_image" width="100px"
        /></b-col>
        <b-col
          ><h5>{{ this.cop[0].prod_name }}</h5></b-col
        >
        <b-col
          ><h4>Rs {{ this.cop[0].prod_price }}</h4>
        </b-col>
      </b-row>
    </b-container>

    <!-- <div v-if="!this.loggedUser.Address1" style="margin-left: 45px"> -->
      <h4 class="text-center">Enter Shipping Details</h4>
      <b-container>
        <form @submit="handleSubmit">
          <div class="form-group">
            <label for="Add1">Address 1</label>
            <input
              type="text"
              v-model="user.Add1"
              id="Add1"
              name="Add1"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.Add1.$error }"
            />
            <div
              v-if="submitted && $v.user.Add1.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.user.Add1.required">Address1 is required</span>
            </div>
          </div>
          <div class="form-group">
            <label for="Add2">Address 2</label>
            <input
              type="text"
              v-model="user.Add2"
              id="Add2"
              name="Add2"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.Add2.$error }"
            />
            <div
              v-if="submitted && $v.user.Add2.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.user.Add2.required">Address2 is required</span>
            </div>
          </div>
          <div class="form-group">
            <label for="city">City</label>
            <input
              type="text"
              v-model="user.city"
              id="city"
              name="city"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.city.$error }"
            />
            <div
              v-if="submitted && $v.user.city.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.user.city.required">City is required</span>
            </div>
          </div>
          <div class="form-group">
            <label for="state">State</label>
            <input
              type="text"
              v-model="user.state"
              id="state"
              name="state"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.state.$error }"
            />
            <div
              v-if="submitted && $v.user.state.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.user.state.required">State is required</span>
            </div>
          </div>
          <div class="form-group">
            <label for="pincode">Pincode</label>
            <input
              type="text"
              v-model="user.pincode"
              id="pincode"
              name="pincode"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.pincode.$error }"
            />
            <div
              v-if="submitted && $v.user.pincode.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.user.pincode.required">Pincode is required</span>
              <span
                v-if="
                  !$v.user.pincode.minLength ||
                  !$v.user.pincode.numeric ||
                  !$v.user.pincode.maxLength
                "
                >Enter a valid pincode</span
              >
            </div>
          </div>
          <h4>Payment Details</h4>
          <p>
            Our Delivery Parter Will Collect The Order Amount through Cash,Card
            or UPI payment.
          </p>
          <div class="form-group">
            <button class="btn btn-primary">Place Order</button>
          </div>
        </form>
      </b-container>
    <!-- </div> -->

    <!-- <div  style="margin-left: 45px" v-else>
      <h3 style="margin-left: 45px">Shipping Details</h3>

      <p style="margin-left: 45px">{{ this.loggedUser.Address1 }}</p>
      <p style="margin-left: 45px">{{ this.loggedUser.Address2 }}</p>
      <p style="margin-left: 45px">
        {{ this.loggedUser.city }} ,{{ this.loggedUser.state }} -
        {{ this.loggedUser.pincode }}
      </p> -->

    <!-- <b-button style="margin-left: 45px" variant="warning" v-on:click="formshow()">Update Address</b-button> -->
    <!-- </div> -->

    <!-- <div v-if="show">
      <b-container>
        <form @submit="handleSubmit">
          <div class="form-group">
            <label for="Add1">Address 1</label>
            <input
              type="text"
              v-model="user.Add1"
              id="Add1"
              name="Add1"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.Add1.$error }"
            />
            <div
              v-if="submitted && $v.user.Add1.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.user.Add1.required">Address is required</span>
            </div>
          </div>
          <div class="form-group">
            <label for="Add2">Address 2</label>
            <input
              type="text"
              v-model="user.Add2"
              id="Add2"
              name="Add2"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.Add2.$error }"
            />
            <div
              v-if="submitted && $v.user.Add2.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.user.Add2.required">Address is required</span>
            </div>
          </div>
          <div class="form-group">
            <label for="city">City</label>
            <input
              type="text"
              v-model="user.city"
              id="city"
              name="city"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.city.$error }"
            />
            <div
              v-if="submitted && $v.user.city.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.user.city.required">City is required</span>
            </div>
          </div>
          <div class="form-group">
            <label for="state">State</label>
            <input
              type="text"
              v-model="user.state"
              id="state"
              name="state"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.state.$error }"
            />
            <div
              v-if="submitted && $v.user.state.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.user.state.required">State is required</span>
            </div>
          </div>
          <div class="form-group">
            <label for="pincode">Pincode</label>
            <input
              type="text"
              v-model="user.pincode"
              id="pincode"
              name="pincode"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.pincode.$error }"
            />
            <div
              v-if="submitted && $v.user.pincode.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.user.pincode.required">Pincode is required</span>
              <span
                v-if="
                  !$v.user.pincode.minLength ||
                  !$v.user.pincode.numeric ||
                  !$v.user.pincode.maxLength
                "
                >Enter a valid pincode</span
              >
            </div>
          </div>
        </form>
      </b-container>
    
    </div> -->
    <div>
      <footer-bar />
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  numeric,
  maxLength,
} from "vuelidate/lib/validators";
import { mapState } from "vuex";
import axios from "axios";
import Header from "../components/Header.vue";
import FooterBar from "../components/FooterBar.vue"


export default {
  name: "Shipping",
  components: {
    Header,
    FooterBar
  },

  data() {
    return {
      user: {
        Add1: "",
        Add2: "",
        city: "",
        state: "",
        pincode: "",
      },
      submitted: false,
      //show: false,
    };
  },
  validations: {
    user: {
      Add1: { required },
      Add2: { required },
      city: { required },
      state: { required },
      pincode: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(6),
        numeric,
      },
    },
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        const sD = {
          user_id: this.loggedUser.id,
          o_id: this.cop[0].o_id,
          p_id : this.cop[0].prod_id,
          name: this.loggedUser.name,
          mobile: this.loggedUser.mobile,

          Add1: this.user.Add1,
          Add2: this.user.Add2,
          city: this.user.city,
          state: this.user.state,
          pincode: this.user.pincode,
          date: new Date().toDateString(),
        };
        axios.post("http://localhost:3000/api/shipD", sD).then((response) => {
          if (response.data.data) {
            this.$alert("Order Placed").then(() => {
              this.$router.push("/");
            });
          } else {
            this.$alert("Some error occurred");
          }
        });
      }
    },
    // formshow() {
    //   this.show = true;
    // },
  },

  computed: {
    ...mapState(["loggedUser", "cop"]),
  },
};
</script>

<style>
</style>
