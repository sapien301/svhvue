<template>
  <div class="le">
    <router-link
      :to="{ name: 'SaareeDetail', params: { saaree_id: saaree.saaree_id } }"
    >
      <b-card 
        
        v-bind:img-src="saaree.image1"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          <h3 style="color:Black">{{saaree.saaree_name}}</h3>
          <h4>Rs {{ saaree.price }}</h4>
          <h5 style="color : Black">View <b-icon-arrow-right></b-icon-arrow-right></h5>
        </b-card-text>
        <!-- <b-button href="#" variant="primary">View</b-button> -->
      </b-card>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SaareeCard",

  props: {
    saaree: Object,
  },
};
</script>



<style  >
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  box-sizing: border-box;
  float: left;
  width: 23%;
  margin: 10px;
transition: transform .2s;
  display: block;
  
  text-align: center;
  font-family: arial;
  margin : 10px
}

.card:hover {
  transform: scale(1.05);
}
</style>