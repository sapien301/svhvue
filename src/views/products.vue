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
      <div class="container-fluid">
        <div class="row">
          <div class="col-6">
            <h3 class="text-center">Products</h3>

            <div v-for="(item, index) in this.sarees" :key="index">
              <b-list-group>
                <b-list-group-item class="d-flex align-items-center">
                  <span style="margin-right: 20px">{{ item.saaree_id }}</span>
                  <b-avatar
                    class="mr-3"
                    :src="item.image1"
                    size="100px"
                    style="margin-right: 20px"
                  ></b-avatar>
                  <span class="mr-auto" style="margin-right: 20px">{{
                    item.saaree_name
                  }}</span>
                  <span style="margin-right: 20px"> Rs {{ item.price }}</span>
                  <span style="margin-right: 20px">{{ item.stock }}</span>
                  <span style="margin-right: 20px"
                    ><b-button
                      variant="danger"
                      v-on:click="remove_product(item)"
                      >Remove Product</b-button
                    ></span
                  >
                </b-list-group-item>
              </b-list-group>
            </div>
          </div>
          <div class="col-6">
            <h3 class="text-center">Add Product</h3>
            <br />
            <b-container>
              <form @submit.prevent="handleSubmit">
                <div class="form-group">
                  <label for="sname">Saree name</label>
                  <input
                    type="text"
                    v-model="form.sname"
                    id="sname"
                    name="sname"
                    class="form-control"
                    :class="{ 'is-invalid': submitted && $v.form.sname.$error }"
                  />
                  <div
                    v-if="submitted && $v.form.sname.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.sname.required"
                      >Saree name is required</span
                    >
                    <span v-if="!$v.form.sname.minLength"
                      >Saree name must be at least 3 characters</span
                    >
                  </div>
                </div>
                <div class="form-group">
                  <label for="price">Price</label>
                  <input
                    type="text"
                    v-model="form.price"
                    id="price"
                    name="price"
                    class="form-control"
                    :class="{ 'is-invalid': submitted && $v.form.price.$error }"
                  />
                  <div
                    v-if="submitted && $v.form.price.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.price.required"
                      >price is required</span
                    >
                    <span v-if="!$v.form.price.numeric">Enter Number Only</span>
                  </div>
                </div>
                <div class="form-group">
                  <label for="description">Description</label>
                  <input
                    type="text"
                    v-model="form.description"
                    id="description"
                    name="description"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.form.description.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.form.description.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.description.required"
                      >Description name is required</span
                    >
                    <span v-if="!$v.form.description.minLength"
                      >Description must be at least 3 characters</span
                    >
                  </div>
                </div>
                <div class="form-group">
                  <label for="stock">Stock</label>
                  <input
                    type="text"
                    v-model="form.stock"
                    id="stock"
                    name="stock"
                    class="form-control"
                    :class="{ 'is-invalid': submitted && $v.form.stock.$error }"
                  />
                  <div
                    v-if="submitted && $v.form.stock.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.stock.required"
                      >Stock Value is required</span
                    >
                    <span v-if="!$v.form.stock.numeric">Enter Number Only</span>
                  </div>
                </div>
                <div>
                  <form
                    @submit.prevent="onUpload"
                    enctype="multipart/form-data"
                  >
                    <label>Image1</label> <br />
                    <input type="file" ref="picture" @change="onFileSelected" />
                    <b-button type="submit">Upload</b-button>
                    <p style="color: green">{{ message }}</p>
                  </form>
                </div>
                <div>
                  <form
                    @submit.prevent="onUpload2"
                    enctype="multipart/form-data"
                  >
                    <label>Image2</label> <br />
                    <input
                      type="file"
                      ref="picture2"
                      @change="onFileSelected2"
                    />
                    <b-button type="submit">Upload</b-button>
                    <p style="color: green">{{ message1 }}</p>
                  </form>
                </div>

                <div>
                  <form
                    @submit.prevent="onUpload3"
                    enctype="multipart/form-data"
                  >
                    <label>Image3</label> <br />
                    <input
                      type="file"
                      ref="picture3"
                      @change="onFileSelected3"
                    />
                    <b-button type="submit">Upload</b-button>
                    <p style="color: green">{{ message2 }}</p>
                  </form>
                </div>
                
                <div class="form-group">
                  <button class="btn btn-primary">Add</button>
                </div>
              </form>
            </b-container>
          </div>
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
import { required, minLength, numeric } from "vuelidate/lib/validators";
export default {
  name: "products",

  data() {
    return {
      sarees: null,
      form: {
        sname: "",
        price: "",
        description: "",
        stock: "",
      },
      submitted: false,
      picture: null,
      picture2: null,
      picture3: null,
      message: "",
      message1: "",
      message2: "",

      image1: "",
      image2: "",
      image3: "",
      
    };
  },
  validations: {
    form: {
      sname: { required, minLength: minLength(3) },
      price: { required, numeric },
      description: { required, minLength: minLength(3) },
      stock: { required, numeric },
    },
  },
   mounted() {
    this.getProducts();
  },
  methods: {
    ...mapMutations(["LOGOUT"]),

async getProducts(){
    const response = await axios.get(`http://localhost:3000/api/saarees`);
    this.sarees = response.data;
},

    logout() {
      this.LOGOUT();
      this.$router.push("/login");
    },
    remove_product: function (product) {
      this.$confirm("Remove this product?").then(() => {
        const prod = {
          prod_id: product.saaree_id,
        };
       // console.log(prod.prod_id);
        axios
          .post("http://localhost:3000/api/removeproduct", prod)
          .then((response) => {
            if (response.data.data) {
              this.getProducts();
              this.$alert("Product Removed");
            } else {
              this.$alert("Something Went Wrong");
            }
          });
      });
    },
    onFileSelected() {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const file = this.$refs.picture.files[0];

      if (!allowedTypes.includes(file.type)) {
        this.message = "Only images are allowed";

        return;
      }

      this.picture = file;
    },
    onFileSelected2() {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const file = this.$refs.picture2.files[0];

      if (!allowedTypes.includes(file.type)) {
        this.message = "Only images are allowed";

        return;
      }

      this.picture2 = file;
    },
    onFileSelected3() {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const file = this.$refs.picture3.files[0];

      if (!allowedTypes.includes(file.type)) {
        this.message = "Only images are allowed";

        return;
      }

      this.picture3 = file;
    },
    onUpload() {
      const fd = new FormData();
      fd.append("picture", this.picture);

      axios.post("http://localhost:3000/api/getPic", fd).then((response) => {
        this.message = response.data.message;

        this.image1 = response.data.fname;
      });
    },

    onUpload2() {
      const fd1 = new FormData();
      fd1.append("picture", this.picture2);

      axios.post("http://localhost:3000/api/getPic", fd1).then((response) => {
        this.message1 = response.data.message;

        this.image2 = response.data.fname;
      });
    },
    onUpload3() {
      const fd2 = new FormData();
      fd2.append("picture", this.picture3);

      axios.post("http://localhost:3000/api/getPic", fd2).then((response) => {
        this.message2 = response.data.message;

        this.image3 = response.data.fname;
      });
    },
    handleSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
      if (this.image1 && this.image2 && this.image3) {
        const details = {
          name: this.form.sname,
          price: this.form.price,
          description: this.form.description,
          stock: this.form.stock,
          image1: "http://localhost:3000/images/" + this.image1,
          image2: "http://localhost:3000/images/" + this.image2,
          image3: "http://localhost:3000/images/" + this.image3,
        };
        //console.log(details);
        axios.post("http://localhost:3000/api/addProduct",details)
        .then((res)=>{
          if(res.data.data){
            this.$alert(res.data.report)
            this.getProducts();
            this.resetForm();
          }else{
            this.$alert(res.data.report)
          }
        })
      } else {
        this.$alert("Upload images") 
      }
      } 
    },
    resetForm(){
      this.form.sname = "";
      this.form.price = "";
      this.form.description = "";
      this.form.stock = "";

      this.submitted= false;
      this.picture=null;
      this.picture2= null;
      this.picture3= null;
      this.message= "";
      this.message1= "";
      this.message2= "";

      this.image1= "";
      this.image2= "";
      this.image3= "";
      
    }
  },
};
</script>

<style>
</style>