import React from 'react'
import './style.css'

const page = () => {
  return (
    <section class="contact-section">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2 class="mb-4">Contact</h2>
                <form>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Name"/>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="Email"/>
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control" placeholder="Message..." rows="5"></textarea>
                    </div>
                    <button type="submit" class="common-button">SEND</button>
                </form>
            </div>
            <div class="col-md-6">
                <p>
                    We&apos;d love to hear from you! Whether you have questions, feedback, or 
                    would like to explore partnership opportunities, don&apos;t hesitate to reach out. 
                    Our dedicated team is here to assist you. Please feel free to contact us 
                    via email or by filling out the form. We look forward to connecting 
                    with you and working together to make a positive impact.
                </p>
                <address>
                    <p>
                        <i class="fas fa-map-marker-alt"></i> Room No. 8, E-1-4 A, Adarsh Apartment Owners Association,
                        Sector-2, Neral, Navi Mumbai, Maharashtra - 400 705.
                    </p>
                    <p>
                        <i class="fas fa-envelope"></i> swarajf001@gmail.com, info@swarajyafoundation.co.in
                    </p>
                    <p>
                        <i class="fas fa-phone"></i> +91 98204 10465, +91 99203 79123, +91 98697 73299
                    </p>
                </address>
            </div>
        </div>
    </div>
</section>
  )
}

export default page