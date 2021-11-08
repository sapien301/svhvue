<template>
<div>
    <Header />
    <div class="container">

    <section class="mb-4">
        <h2 class="h1-responsive font-weight-bold text-center my-5">Contact Us</h2>
        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. </p>

        <div  >
           

            <!-- <div class="col-md-3 text-center text-primary">
                <ul class="list-unstyled mb-0">
                    <li><i class="fas fa-map-marker-alt fa-2x"></i>
                        <p class="text-dark">DHARMAVARAM , 6-61-8 MAIN BAZAAR ANANTAPUR DISTRIC, ANDHRA PRADESH</p></li>

                    <li><b-icon-phone></b-icon-phone>
                        +91 921659458</li>

                    <li><b-icon-mailbox></b-icon-mailbox>
                        info@vijayalakshmisilks.com</li>
                    
                </ul>
                
            </div> -->

            <div class="text-center">
                WhatsApp - +91 787553329<br>
                Phone    - +91 921659458<br>
                mail     - info@vijayalakshmisilks.com
            </div>

            
        </div>
         </section>
    
</div>
<div>
      <footer-bar />
    </div>
</div>

</template>

<script>

import Header from "../components/Header.vue";
import FooterBar from "../components/FooterBar.vue"


export default {
    name : "contact",
    components : {
        Header,
        FooterBar
    },
    
}
</script>

<style scoped>
.container{
     
        background-image: radial-gradient(circle farthest-corner at 10% 20%, rgba(234 , 249,251,0.63) 0.1%, rgba(239,249,251,0.63) 90.1%);
    
}
</style>