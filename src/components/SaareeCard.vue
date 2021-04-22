<template>



<div class="le">
  <router-link :to="{name: 'SaareeDetail', params: { saaree_id : saaree.saaree_id },}">
  <b-card
    v-bind:title="saaree.saaree_name"
    v-bind:img-src="saaree.image1"
    
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
     <h3>Rs {{saaree.price}}</h3>
     <h5>{{saaree.description}}</h5>
    </b-card-text>
    <!-- <b-button href="#" variant="primary">View</b-button> -->

  </b-card>
  </router-link>
</div>






 
</template>

<script>

export default {
  name: "SaareeCard",

  props : {
      saaree : Object
  }
}


</script>



<style  >

/* .le{
  float: right;
} */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
 
  box-sizing:border-box;
    float: left;
    width: 23%;
    margin: 10px;
    
    display: block;

   text-align: center;
   font-family: arial;

}




</style>