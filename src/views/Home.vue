<template>
  <div class="home">
    <!-- <p> {{ this.loggedUser }}</p> -->
    <div >
    <Header />
    <header1 />
    </div>

    <!-- <div>
      <input type="text" v-model="search" placeholder="Search Products"/>
    </div> -->
   
      <SaareeCard
        v-for="saaree in saarees"
        :key="saaree.saaree_id"
        :saaree="saaree"
      />
      <!-- <SaareeCard
        v-for="saaree in filteredProducts"
        :key="saaree.saaree_id"
        :saaree="saaree"
      /> -->
    

    <!-- <div class="footer">
        Hello
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import SaareeCard from "@/components/SaareeCard.vue";
import Header from "../components/Header.vue";
import header1 from "../components/header1.vue";

import { mapState } from "vuex";
//import { HTTP } from "@/http-common.js"

export default {
  name: "Home",
  components: {
    SaareeCard,
    Header,
    header1,
  
  },

  data() {
    return {
      saarees: [],
      
     
    };
  },
  computed: {
    ...mapState(["loggedUser"]),

    // filteredProducts: function(){
    //   return this.saarees.filter((product) =>{
    //     return product.saaree_name.match(this.search)
    //   });
    // }
  },

  async mounted() {
    const response = await axios.get(`http://localhost:3000/api/saarees`);
    this.saarees = response.data;
  },
};
</script>

<style >
.footer {
  height: 20px;
 
  width: 100%;
  /* position: fixed; */
  left: 0;
  bottom: 0;
 
  background-color: rgba(243, 156, 57, 0.657);
  color: white;
  text-align: center;
}


</style>