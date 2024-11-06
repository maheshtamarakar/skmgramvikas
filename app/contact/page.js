"use client";
import React from "react";
import "./style.css";
import { useMyContext } from "../context/MyContext";

const page = () => {
  const isMarathi = useMyContext();
  if (isMarathi) {
    return (
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mb-4">संपर्क</h2>
              {/* <form>
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
                </form> */}
            </div>
            <div>
              <p>
              आम्हाला तुमच्याकडून ऐकायला आवडेल! तुम्हाला प्रश्न असतील, अभिप्राय असतील किंवा भागीदारीच्या संधी एक्सप्लोर करायच्या असतील, संपर्क करण्यास अजिबात संकोच करू नका. आमची समर्पित टीम तुम्हाला मदत करण्यासाठी येथे आहे. कृपया ईमेलद्वारे किंवा फॉर्म भरून मोकळ्या मनाने आमच्याशी संपर्क साधा. आम्ही तुमच्याशी कनेक्ट होण्यासाठी आणि सकारात्मक प्रभाव पाडण्यासाठी एकत्र काम करण्यास उत्सुक आहोत.
              </p>
              <address>
                <p>
                  <i className="fas fa-map-marker-alt"></i> रशिका राजेश चव्हाण, रु.न.24 दर्या सागर रहिवाशी संघ, महालक्ष्मी मंदिर कंपाऊंड, बुलाभाई देसाई रोड, हजी अली, महालक्ष्मी, मुंबई-400 026.
                </p>
                <p>
                  <i className="fas fa-envelope"></i> shreekedareshwarmahakaligvs@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone"></i> +91 9833026017, +91
                  8652865255, +91 9870980082
                </p>
                <p>
                  <span>Youtube: </span>{" "}
                  <a href="https://dabhemohan.com/" target="_blank">
                    https://dabhemohan.com/
                  </a>
                </p>
                <p>(महाराष्ट्र /मुंबई नोंदणी क्र.390/2021 जी.बी.बी.एस.डी.)</p>
              </address>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mb-4">Contact</h2>
              {/* <form>
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
                </form> */}
            </div>
            <div>
              <p>
                We&apos;d love to hear from you! Whether you have questions,
                feedback, or would like to explore partnership opportunities,
                don&apos;t hesitate to reach out. Our dedicated team is here to
                assist you. Please feel free to contact us via email or by
                filling out the form. We look forward to connecting with you and
                working together to make a positive impact.
              </p>
              <address>
                <p>
                  <i className="fas fa-map-marker-alt"></i> c/o Rashika Rajesh
                  chavhan, Basement darya sagar, hutments Mahalaxmi Mandir marg,
                  B Desai Road samor Haji Ali Kambala Hill, Mumbai- 400026
                </p>
                <p>
                  <i className="fas fa-envelope"></i> shreekedareshwarmahakaligvs@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone"></i> +91 9833026017, +91
                  8652865255, +91 9870980082
                </p>
                <p>
                  <span>Youtube: </span>{" "}
                  <a href="https://dabhemohan.com/" target="_blank">
                    https://dabhemohan.com/
                  </a>
                </p>
                <p>(महाराष्ट्र /मुंबई नोंदणी क्र.390/2021 जी.बी.बी.एस.डी.)</p>
              </address>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default page;
