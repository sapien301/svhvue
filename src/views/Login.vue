<template>
  <div>
    <h1 style="margin-left: 600px">Login</h1>
    <b-alert variant="danger" show>{{ message }}</b-alert>
    <b-container>
      <form @submit="submitLForm" @reset="resetLForm">
        <div class="form-group">
          <label for="mobile">Mobile Number</label>
          <input
            type="text"
            v-model="LForm.mobile"
            id="mobile"
            name="mobile"
            class="form-control"
            :class="{ 'is-invalid': submitted && $v.LForm.mobile.$error }"
          />
          <div
            v-if="submitted && $v.LForm.mobile.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.LForm.mobile.required"
              >Mobile Number is required</span
            >
          </div>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            v-model="LForm.password"
            id="password"
            name="password"
            class="form-control"
            :class="{ 'is-invalid': submitted && $v.LForm.password.$error }"
          />
          <div
            v-if="submitted && $v.LForm.password.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.LForm.password.required">Password is required</span>
          </div>
        </div>

        <b-row>
          <b-col
            ><b-button type="submit" variant="primary">Login</b-button></b-col
          >
          <b-col
            ><router-link to="/SignUp">Create an account</router-link></b-col
          >
          <b-col
            ><b-button type="reset" variant="danger" @click="resetLForm"
              >Reset</b-button
            ></b-col
          >
        </b-row>
      </form>
    </b-container>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { required } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  name: "Login",

  data() {
    return {
      LForm: {
        mobile: "",
        password: "",
      },
      submitted: false,

      message: "",
    };
  },
  validations: {
    LForm: {
      mobile: { required },
      password: { required },
    },
  },

  methods: {
    ...mapMutations(["ADD_LOGGED_USER", "GET_CART_PRODUCTS"]),

    submitLForm(event) {
      event.preventDefault();
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        axios
          .post("http://localhost:3000/api/userLogin", this.LForm)
          .then((response) => {
            this.message = response.data.message;
            if (response.data.data) {
              this.ADD_LOGGED_USER(response.data.data);
              this.GET_CART_PRODUCTS(response.data.data);
              this.$router.push("/");
            }
          });
      }
    },
    resetLForm(event) {
      event.preventDefault();

      this.LForm.mobile = "";
      this.LForm.password = "";
    },
  },
};
</script>

<style scoped>
.alert {
  text-align: center;
}
</style>