import React from 'react'
import './style.css'

const page = () => {
  return (
    <section className="contact-section">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h2 className="mb-4">Contact</h2>
                <form>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" placeholder="Message..." rows="5"></textarea>
                    </div>
                    <button type="submit" className="common-button">SEND</button>
                </form>
            </div>
            <div className="col-md-6">
                <p>
                    We&apos;d love to hear from you! Whether you have questions, feedback, or 
                    would like to explore partnership opportunities, don&apos;t hesitate to reach out. 
                    Our dedicated team is here to assist you. Please feel free to contact us 
                    via email or by filling out the form. We look forward to connecting 
                    with you and working together to make a positive impact.
                </p>
                <address>
                    <p>
                        <i className="fas fa-map-marker-alt"></i> Room No. 8, E-1-4 A, Adarsh Apartment Owners Association,
                        Sector-2, Neral, Navi Mumbai, Maharashtra - 400 705.
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i> swarajf001@gmail.com, info@swarajyafoundation.co.in
                    </p>
                    <p>
                        <i className="fas fa-phone"></i> +91 98204 10465, +91 99203 79123, +91 98697 73299
                    </p>
                </address>
            </div>
        </div>
    </div>
</section>
  )
}

export default page