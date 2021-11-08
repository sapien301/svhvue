<template>
  <div>
    <Header />
    <div>
      {{ Sresults }}
      <h1>You Searched for {{ router }}</h1>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import axios from "axios";
export default {
  name: "SearchResults",
  components: {
    Header,
  },
  data() {
    return {
      Sresults: null,
      router: this.$route.params.key_id,
    };
  },
  methods: {
    getSResults() {
      const body = {
        keyword: this.router,
      };
      //  console.log(b)
      axios.post("http://localhost:3000/api/sProducts", body).then((response) => {
       
          //console.log(response.data.data);
          this.Sresults = response.data.data;
        
      });
    },
  },
  created() {
    this.getSResults();
  },
};
</script>