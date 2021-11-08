<template>
  <div style="margin-top: 50px;">
    <div class="container-fluid" style="background-color: #ffd1b3; padding: 50px">
      <div class="row">
        <div class="col-4" style="display: flex ;justify-content: center">
          <h4 style="font-size : 24px">Links</h4>
          <br>
          <br>
          <ul style="list-style-type : none;">
            <router-link to="/"><li style="margin:10px">Home</li></router-link>
             <router-link to="#"><li style="margin:10px">About</li></router-link>
           <!-- <router-link to="/"> <li style="margin:10px">Products</li></router-link> -->
            <router-link to="/contact"> <li style="margin:10px">Contact</li></router-link>
          </ul>
        </div>
        <div class="col-4" >
          <h4>Our Address</h4>  
          <address style="text-size: 80%">
            Dharmavaram, 6-61-8 Main Bazaar<br />
            Anantapur District<br />
            Andra Pradesh, India<br />
           
            <b-icon-phone></b-icon-phone> 9977374572<br />

            <b-icon-mailbox></b-icon-mailbox>
            <a href="mailto:info@vijayalakshmisilks.com"
              >info@vijayalakshmisilks.com</a
            >
          </address>
        </div>
        <div class="col-4">
            <p style="text-align:center"> Developed by PVJ technologies</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBar",
};
</script>

<style>
</style>
