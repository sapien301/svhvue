<template>
  <div class="home">
    
     <h1>{{this.loggedUser}}</h1>

  
     
     <SaareeCard v-for="saaree in saarees" :key="saaree.saaree_id" :saaree="saaree" /> 
         
     <div>

  </div>
   
   </div>
</template>

<script>
import axios from "axios";
import SaareeCard from "@/components/SaareeCard.vue";





import { mapState } from "vuex";
//import { HTTP } from "@/http-common.js"




export default {
  name: "Home",
  components: {
    SaareeCard,
   
    
    
  },

  data() {
    return {
      saarees : null,
      
    }
  },
  computed : {
    ...mapState(["loggedUser"]),
  
},

//   mounted : function() {
//     axios.get('http://localhost:3000/api/saarees')
//     .then(response => {this.saarees = response.data});
//   }

// }  

async mounted() {
  
 const response = await axios.get(`http://localhost:3000/api/saarees`)
  this.saarees = response.data
}

}



</script>
