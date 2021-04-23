<template>
  <div>
    <h1>Register</h1>

    <!-- <pre>
        {{ JSON.stringify(user, null, 2) }}
      </pre
    > -->
    <b-alert variant="danger" show>{{ message }}</b-alert>

    <b-container>
      <form @submit="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            v-model="user.name"
            id="name"
            name="name"
            class="form-control"
            :class="{ 'is-invalid': submitted && $v.user.name.$error }"
          />
          <div v-if="submitted && $v.user.name.$error" class="invalid-feedback">
            <span v-if="!$v.user.name.required">name is required</span>
            <span v-if="!$v.user.name.minLength"
              >name must be at least 3 characters</span
            >
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email </label>
          <input
            type="email"
            v-model="user.email"
            id="email"
            name="email"
            class="form-control"
            :class="{ 'is-invalid': submitted && $v.user.email.$error }"
          />
          <div
            v-if="submitted && $v.user.email.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.user.email.required">Email is required</span>
            <span v-if="!$v.user.email.email">Enter Vaild email</span>
          </div>
        </div>
        <div class="form-group">
          <label for="mobile">Mobile Number</label>
          <input
            type="text"
            v-model="user.mobile"
            id="mobile"
            name="mobile"
            class="form-control"
            :class="{ 'is-invalid': submitted && $v.user.mobile.$error }"
          />
          <div
            v-if="submitted && $v.user.mobile.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.user.mobile.required"
              >Mobile Number is required</span
            >
          </div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            v-model="user.password"
            id="password"
            name="password"
            class="form-control"
            :class="{ 'is-invalid': submitted && $v.user.password.$error }"
          />
          <div
            v-if="submitted && $v.user.password.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.user.password.required">Password is required</span>
            <span v-if="!$v.user.password.minLength"
              >Password must be at least 6 characters</span
            >
          </div>
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            v-model="user.confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            class="form-control"
            :class="{
              'is-invalid': submitted && $v.user.confirmPassword.$error,
            }"
          />
          <div
            v-if="submitted && $v.user.confirmPassword.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.user.confirmPassword.required"
              >Confirm Password is required</span
            >
            <span v-else-if="!$v.user.confirmPassword.sameAsPassword"
              >Passwords must match</span
            >
          </div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Register</button>
        </div>
      </form>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import { required, minLength, sameAs, email } from "vuelidate/lib/validators";

export default {
  name: "SignUp",

  data() {
    return {
      user: {
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
      },
      submitted: false,
      message: "",
    };
  },
  validations: {
    user: {
      name: { required, minLength: minLength(3) },
      email: { required, email },
      mobile: { required },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
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
        axios
          .post("http://localhost:3000/api/user", this.user)
          .then((response) => (this.message = response.data.message));
      }
    },
  },
};
</script>

<style scoped>
.alert {
  text-align: center;
}
</style>