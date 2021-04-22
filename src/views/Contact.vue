<template>
    <div class="container">
    <section class="mb-4">
        <h2 class="h1-responsive font-weight-bold text-center my-5">Contact Us</h2>
        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of minutes to help you.</p>

        <div class="row">
            <div class="col-md-9 mb-md-0 mb-5">
                <form id="contactform">

                    <div class="row">
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" name="name" class="form-control">
                                <label for="name">Your Name</label>
                            </div>
                            
                        </div>

                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" name="email" class="form-control">
                                <label for="email">Your Email</label>
                            </div>
                            
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="md-form mb-0">
                                <input type="text" name="subject" class="form-control">
                                <label for="subject">Subject</label>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="md-form">
                                <textarea type="text" name="message" rows="3" class="form-control md-textarea"></textarea>
                                <label for="message">Your Message</label>
                                
                            </div>
                            
                        </div>
                        
                    </div>

                    <div class="text-center text-md-left">
                        <button class="btn btn-primary" type="submit">Send</button>
                        
                    </div>
                    
                </form>
                
            </div>

            <div class="col-md-3 text-center text-primary">
                <ul class="list-unstyled mb-0">
                    <li><i class="fas fa-map-marker-alt fa-2x"></i>
                        <p class="text-dark">DHARMAVARAM , 6-61-8 MAIN BAZAAR ANANTAPUR DISTRIC, ANDHRA PRADESH</p></li>

                    <li><i class="fas fa-phone mt-4 fa-2x"></i>
                        <p class="text-dark">+ 999999999999</p></li>

                    <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                        <p class="text-dark">info@vijayalakshmisilks.com</p></li>
                    
                </ul>
                
            </div>
            
        </div>
         </section>
    
</div>
</template>

<script>
export default {
    name : "contact"
    
}
</script>

<style scoped>
.container{
     
        background-image: radial-gradient(circle farthest-corner at 10% 20%, rgba(234 , 249,251,0.63) 0.1%, rgba(239,249,251,0.63) 90.1%);
    
}
</style>