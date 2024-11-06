"use client";
import React from "react";
import "./style.css";
import Image from "next/image";
import { useMyContext } from "../context/MyContext";

const Donate = () => {
  const isMarathi = useMyContext();
  if (isMarathi) {
    return (
      <>
        <div className="donate-header">देणगी</div>
        {/* <!-- donation  --> */}
        <div className="container col-xxl-11 px-4 py-5">
          <div className="row justify-content-center align-items-center g-5 py-5">
            <div className="col-lg-7 ">
              <p className="lead">
              दररोज, जगभरातील लाखो लोक त्यांच्या मूलभूत गरजा पूर्ण करण्यासाठी संघर्ष करतात. अन्न आणि निवारा पासून ते आरोग्यसेवा आणि शिक्षणापर्यंत, अनेक व्यक्ती आणि कुटुंबांना भयंकर आव्हानांना सामोरे जावे लागते जे त्यांच्या निरोगी, परिपूर्ण जीवन जगण्याच्या क्षमतेत अडथळा आणतात. तथापि, एकत्र येऊन आणि मदतीचा हात देऊन, आपण गरजूंच्या जीवनात खरा बदल घडवू शकतो.
              </p>
            </div>
            <div className="col-10 col-sm-8 col-lg-5">
              <Image
                src="/imgs/donate2.jpg"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width={500}
                height={300}
                loading="lazy"
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-md-4">
              <Image
                src="/imgs/QR_CODE.jpg"
                alt="image"
                width={600}
                height={800}
                className="img-fluid"
              />
            </div>
            <div className="col-md-8 mt-4">
              <p>
                <b>बँक तपशील खाते नाव: </b>SHRI KEDARESHWAR MAHAKALI DABHE
                MOHAN GRAMVIKAS SANSTHA
              </p>
              <p>
                <b>खाते क्रमांक: </b>60449511928
              </p>
              <p>
                <b>शाखा: </b>MUMBAI SAYANI RD
              </p>
              {/* <p><b>IFS Code: </b>SBIN0001975</p>
                        <p><b>Swift Code: </b>SBININBB518</p>
                        <p><b>A/C.: </b>0539102000019451</p>
                        <p><b>UPI ID: </b>1000221201000456</p> */}
              <p>
                <b>आयएफएससी कोड: </b>MAHB0000588
              </p>
            </div>
          </div>
          <div className="why-donate">
            <div className="h2">देणगी का?</div>
            <p>
            तातडीच्या गरजा पूर्ण करा: तुमची देणगी भूक, बेघर किंवा वैद्यकीय आणीबाणीचा सामना करणाऱ्या व्यक्ती आणि कुटुंबांना तात्काळ आराम देऊ शकते. अत्यावश्यक सेवा आणि सहाय्य प्रदान करणाऱ्या संस्थांना योगदान देऊन, तुम्ही संकटाच्या वेळी कोणीही मागे राहणार नाही याची खात्री करण्यात मदत करू शकता. 
            </p>
            <p>
            सशक्तीकरण बदल: देणगी देणे म्हणजे केवळ तात्काळ गरजा पूर्ण करणे नव्हे; हे चिरस्थायी बदल निर्माण करण्याबद्दल देखील आहे. गरिबी आणि असमानतेची मूळ कारणे दूर करणाऱ्या उपक्रमांना पाठिंबा देऊन, तुम्ही व्यक्ती आणि समुदायांना स्वत:साठी आणि भावी पिढ्यांसाठी चांगले भविष्य निर्माण करण्यासाठी सक्षम करू शकता. 
            </p>
            <p>
            आशा पसरवा: तुमची उदारता संकटाचा सामना करणाऱ्यांना आशेचा एक शक्तिशाली संदेश पाठवते. एकता आणि सहानुभूती दाखवून, तुम्ही आत्मे उत्थान करू शकता, प्रतिष्ठा पुनर्संचयित करू शकता आणि इतरांना अधिक न्याय्य आणि न्याय्य जग निर्माण करण्याच्या प्रयत्नात सामील होण्यासाठी प्रेरित करू शकता. 
            </p>
          </div>

          <i className="text-center d-block">
          गरजूंना मदतीचा हात पुढे करण्यात आमच्यात सामील व्हा. एकत्रितपणे, आपण असे जग निर्माण करू शकतो जिथे प्रत्येकाला भरभराटीची आणि परिपूर्ण जीवन जगण्याची संधी असेल. आज बदल घडवण्यासाठी दान करूया.
          </i>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="donate-header">Donate</div>
        {/* <!-- donation  --> */}
        <div className="container col-xxl-11 px-4 py-5">
          <div className="row justify-content-center align-items-center g-5 py-5">
            <div className="col-lg-7 ">
              <p className="lead">
                Every day, millions of people around the world struggle to meet
                their basic needs. From food and shelter to healthcare and
                education, many individuals and families face formidable
                challenges that hinder their ability to lead healthy, fulfilling
                lives. However, by coming together and lending a helping hand,
                we can make a real difference in the lives of those in need.
              </p>
            </div>
            <div className="col-10 col-sm-8 col-lg-5">
              <Image
                src="/imgs/donate2.jpg"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width={500}
                height={300}
                loading="lazy"
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-md-4">
              <Image
                src="/imgs/QR_CODE.jpg"
                alt="image"
                width={600}
                height={800}
                className="img-fluid"
              />
            </div>
            <div className="col-md-8 mt-4">
              <p>
                <b>Bank Details Acc. Name: </b>SHRI KEDARESHWAR MAHAKALI DABHE
                MOHAN GRAMVIKAS SANSTHA
              </p>
              <p>
                <b>Acc. No.: </b>60449511928
              </p>
              <p>
                <b>Branch: </b>MUMBAI SAYANI RD
              </p>
              {/* <p><b>IFS Code: </b>SBIN0001975</p>
                        <p><b>Swift Code: </b>SBININBB518</p>
                        <p><b>A/C.: </b>0539102000019451</p>
                        <p><b>UPI ID: </b>1000221201000456</p> */}
              <p>
                <b>IFSC CODE: </b>MAHB0000588
              </p>
            </div>
          </div>
          <div className="why-donate">
            <div className="h2">Why Donate?</div>
            <p>
              Meet Urgent Needs: Your donation can provide immediate relief to
              individuals and families facing hunger, homelessness, or medical
              emergencies. By contributing to organizations that provide
              essential services and support, you can help ensure that no one is
              left behind in times of crisis.
            </p>
            <p>
              Empower Change: Donating isn&apos;t just about meeting immediate
              needs; it&apos;s also about creating lasting change. By supporting
              initiatives that address the root causes of poverty and
              inequality, you can empower individuals and communities to build
              better futures for themselves and future generations.
            </p>
            <p>
              Spread Hope: Your generosity sends a powerful message of hope to
              those facing adversity. By showing solidarity and compassion, you
              can uplift spirits, restore dignity, and inspire others to join in
              the effort to create a more just and equitable world.
            </p>
          </div>

          <i className="text-center d-block">
            Join us in extending a helping hand to those in need. Together, we
            can create a world where everyone has the opportunity to thrive and
            lead fulfilling lives. Let&apos;s donate to make a difference today.
          </i>
        </div>
      </>
    );
  }
};

export default Donate;
