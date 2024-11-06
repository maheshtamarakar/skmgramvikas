"use client";
import React from "react";
import './style.css'
import Image from "next/image";
import { useMyContext } from '../context/MyContext'

const About = () => {  
  const isMarathi = useMyContext();
  if(isMarathi){
    return (
      <>
       <div className="about-header">एस के एम ग्रामविकास बद्दल</div>
        {/* <!-- donation  --> */}
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row justify-content-center align-items-center g-5 py-5">
            <div className="col-lg-6">
              <h1 className="display-6 fw-bold lh-1 mb-3">
                चला गरजू लोकांना चांगल्या आयुष्यासाठी देणगी देऊ
              </h1>
              <p className="lead">
                दररोज, जगभरातील कोट्यावधी लोक भेटण्यासाठी संघर्ष करतात
                त्यांच्या मूलभूत गरजा. अन्न आणि निवारा पासून आरोग्य सेवा आणि
                शिक्षण, बर्‍याच व्यक्ती आणि कुटूंबांना मोठा सामना करावा लागतो
                निरोगी नेतृत्व करण्याच्या त्यांच्या क्षमतेस अडथळा आणणारी आव्हाने
                जीवन. तथापि, एकत्र येऊन मदतीचा हात देऊन आम्ही
                गरजू लोकांच्या जीवनात खरोखर फरक पडू शकतो
              </p>
            </div>
            <div className="col-10 col-sm-8 col-lg-6">
              <Image
                width={450}
                height={300}
                src="/imgs/donate3.jpg"
                alt="icon"
                />
            </div>
          </div>
        </div>
  
        <ul className="custom-list">
          <li>सामाजिक, शैक्षणिक, सांस्कृतिक, कला क्रिडा क्षेत्रात गौरवास्पद कामगिरी केल्याबद्दल संबंधीत कर्तबगार नागरीकांचा सत्कार करणे.</li>
          <li>शिक्षणाचा प्रसार करणे त्यासाठी शैक्षणिक दृष्ट्या गोर गरीबांच्या मुलांसाठी अंगणवाडी, बालवाडी, प्राथमिक शाळा, माध्यमिक महाविद्यालये, मेडीकल कॉलेज, इंजिनिअरींग कॉलेज, बोर्डीग हायस्कूल, मुला-मुलींचे स्वतंत्र वस्तीगृह, अनाथश्रम, विधवाश्रम, अपंग व मुकबधीर विद्यालये स्थापन करणे, तसेच शिक्षणाची सोय उपलब्ध करुन देणे.</li>
          <li>गोरगरीब विद्यार्थी/विद्यार्थ्यांना व अनाथ/अपंग लोकांसाठी तसेच गोर-गरीब विद्यार्थ्यांना शिक्षणासाठी मदत करणे त्यांना शालेय साहित्य गणवेश, पुस्तके इत्यादी व शिष्यवृती देणे व गुणवंत विदयार्थ्यांसाठी पारितोषिके देणे व हुशार विद्यार्थ्यांना उच्च शिक्षणासाठी मदत करणे, बालसंस्कार व संगणक प्रशिक्षणाबाबत मार्गदर्शन करणे.</li>
          <li>भरतकाम विनकाम इत्यादी प्रकारे महिलांना प्रशिक्षण देणे व सुशिक्षित बेरोजगार व गरीब गरजू महिलांना, छोटयाशा उद्योगधंदयाची माहिती करुन देणे, लघुउद्योग, कुटीर उद्योग, कुकुटपालन, महिला उद्योग यांचे प्रशिक्षण देऊन स्वावलंबी बनविणे.</li>
          <li>विद्यार्थी/विद्यार्थीना संगणकाचे महत्व पटवून सांगणे व संगणकाचे प्रशिक्षण वर्ग सुरु करुन व त्यांना स्वावलंबी बनविणे.</li>
          <li>नैसर्गिक/भुकंपग्रस्त/पुरग्रस्त/अतिपर्जन्य, दुष्काळ, आग, भुकंपग्रस्त लोकांना वेळोवेळी मदत करणे. </li>
          <li>शासनाच्या पर्यावरण संरक्षण आणि संवर्धन योजना मध्ये सहभागी होणे, त्याचा प्रचार करणे, पर्यावरण संरक्षण आणि संवर्धन या संबंधीच्या साहित्याचे प्रकाशन करणे, जाहिरात करणे, व्याख्याने, शिबिरे, प्रदर्शन, स्पर्धा आयोजित करणे. </li>
          <li>जेथे गरज असेल तेथे विहीर, बोरवेल, तलाव, धरण, बंधारे, पाण्याची टाकी, नळपाणी, पावसाळी पाणी, साठवणूक आणि पाणी पुनर्वापर यंत्रणा यांची उभारणी करणे किंवा त्यासाठी आर्थिक मदत करणे.</li>
          <li>ग्रामसभेत सादर होणारा ग्रापपंचायतीचा वार्षिक अहवालाचे अध्ययन करून ग्रामपंचायत / नगरपालिका यांनी पूर्ण केलेल्या किंवा जाहीर केलेल्या योजनांचा पाठपुरावा करणे. त्याचबरोबर त्या वेळेत व उत्तम प्रतीने पूर्ण व्हाव्यात यासाठी पाठपुरावा करणे शक्य असल्यास त्या पूर्ण होण्यास मदत करणे.</li>
          <li>कलेद्वारे सामाजिक समस्यांचे महत्त्व पटवून देणे व कलेची जोपासना करणे, त्यासाठी स्टेज शो. नाटक असे सांस्कृतिक कार्यक्रम आयोजित करणे व त्याद्वारे प्रबोधन करुन प्रशिक्षण केंद्रे स्थापन करुन व कलावतांना संस्थेतर्फे प्रोत्साहन देणे.</li>
          <li>गोरगरीब गरजूना वैद्यकीय मदत करणे, रुग्णांना रुग्णवाहिकेची सोय उपलब्ध करणे त्यासाठी विनामूल्य दवाखाले स्थापन करणे व कॅन्सर, एड्स, टी. बी. रोगाबाबत वैद्यकीय शिबिरे तसेच नेत्रदान, रक्तदान शिबिरे आयोजित करुन त्यांना सर्व प्रकारचे सहाय्य मदत करणे व त्याबाबत मार्गदर्शन करणे.</li>
          <li>युवक/युवती मध्ये देशी विदेशी खेळाबद्दल आवड निर्माण करण्यासाठी क्रिडा शिबिरे स्पर्धा प्रशिक्षण वर्ग आयोजित करणे, क्रिडा साहित्य उपलब्ध करुन देणे, खेळाबद्दल, स्पर्धा/सामने आयोजित करून खेळाडूस पारितोषिके देणे.</li>
          <li>निरनिराळे राष्ट्रीय सण, थोर पुरुषांच्या जयंत्या, पुण्यतिथी, सार्वजनिक उत्सव साजरे करणे.</li>
          <li>गरीब व होतकरु विद्यार्थ्यांना, शालेय उपयोगी लेखन सामग्री तसेच त्यांना आर्थिक शैक्षणिक मदत करणे.</li>
          <li>महिलांच्या सर्वागिण विकासासाठी मार्गदर्शन शिबिरे आयोजित करणे व अनाथ निराश्रित व परिसरातील गरीब गरजू महिलांच्या विकासासाठी व उन्नतीसाठी प्रयत्न करणे.</li>
          <li>गोर गरीब, गरजु लोकांना कायदेशीर मोफत सल्ला देणे, तसेच मार्गदर्शन करणे.</li>
          <li>महिलांना, विमा संरक्षण योजनेसारख्या योजनांचे महत्व पटवुन देणे, प्रशिक्षण देणे, प्रोत्साहन देणे.</li>
        </ul>
  
        {/* description */}
        {/* <p className="about-description">
          A social organization of young activists who have entered the field with
          the spirit of truth and sincerity to move the life cycle of the people
          from depression to positivity by insisting on education, internet,
          communication and health to go beyond food, clothing and health, and to
          take the life cycle of the people from depression to positivity by
          studying for it.....
        </p> */}
  
        {/* mission vision */}
  
        {/* <section className="mission-vision">
          <div className="container px-4 py-5" id="featured-3">
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 justify-content-around">
              <div className="feature col text-center">
                <div className="feature-icon bg-gradient">
                  <img
                    className="about-mission-vision-img"
                    src="/imgs/target.svg"
                    alt=""
                  />
                </div>
                <h2>Mission</h2>
                <p>
                  We believe in the power of collaboration to drive meaningful
                  change. By partnering with us, Corporates can make a lasting
                  impact on the communities we serve while also demonstrating your
                  commitment to corporate social responsibility.
                </p>
              </div>
              <div className="feature col text-center">
                <div className="feature-icon bg-gradient">
                  <img
                    className="about-mission-vision-img"
                    src="/imgs/eye.svg"
                    alt=""
                  />
                </div>
                <h2>Vision</h2>
                <p>
                  Whether you&apos;re an individual looking to make a difference
                  or a group seeking opportunities for team building and community
                  engagement, we welcome volunteers of all backgrounds and
                  abilities.
                </p>
              </div>
            </div>
          </div>
        </section> */}
  
        {/* Trustees */}
        <div className="py-5 trustees-container">
          <div className="row justify-content-center">
            <div className="col-12 text-center trustee-title">
              <h2>Trustees</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* <!-- Trustee 1 --> */}
            <div className="col-md-2 trustee-box">
              <h6>Rajesh Balu Jadhav</h6>
              <p>SARPANCH</p>
            </div>
            {/* <!-- Trustee 2 --> */}
            <div className="col-md-2 trustee-box">
              <h6>Sushila Vitthal Shinde</h6>
              <p>SARPANCH</p>
            </div>
            {/* <!-- Trustee 3 --> */}
            <div className="col-md-2 trustee-box">
              <h6>Satish Anand Chavan</h6>
              <p>DEPUTY</p>
            </div>
            {/* <!-- Trustee 4 --> */}
            <div className="col-md-2 trustee-box">
              <h6>Bharati Sampat Chavhan</h6>
              <p>GRAMPANCHAYAT SADASYA</p>
            </div>
            {/* <!-- Trustee 5 --> */}
            <div className="col-md-2 trustee-box">
              <h6>Subhadra Chimajinchavhan</h6>
              <p>GRAMPANCHAYAT SADASYA</p>
            </div>
            {/* <!-- Trustee 6 --> */}
            <div className="col-md-2 trustee-box">
              <h6>Vitthal Ramji Shinde</h6>
              <p>GRAMPANCHAYAT SADASYA</p>
            </div>
          </div>
        </div>
      </>
    )
  }else{
    return (      
      <>
       <div className="about-header">About Skmgram Vikas</div>
        {/* <!-- donation  --> */}
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row justify-content-center align-items-center g-5 py-5">
            <div className="col-lg-6">
              <h1 className="display-6 fw-bold lh-1 mb-3">
                Let&apos;s donate to needy people for better lives
              </h1>
              <p className="lead">
                Every day, millions of people around the world struggle to meet
                their basic needs. From food and shelter to healthcare and
                education, many individuals and families face formidable
                challenges that hinder their ability to lead healthy, fulfilling
                lives. However, by coming together and lending a helping hand, we
                can make a real difference in the lives of those in need.
              </p>
            </div>
            <div className="col-10 col-sm-8 col-lg-6">
              <Image
                width={450}
                height={300}
                src="/imgs/donate3.jpg"
                alt="icon"
                />
            </div>
          </div>
        </div>
  
        <ul className="custom-list">
          <li>To felicitate the meritorious citizens concerned for their meritorious achievements in social, educational, cultural, arts and sports fields. </li>
          <li>Establishment of Anganwadis, Kindergartens, Primary Schools, Secondary Colleges, Medical Colleges, Engineering Colleges, Boarding High Schools, Separate Hostels for Boys and Girls, Orphanages, Widow&apos;s Homes, Handicapped and Disabled Schools for educationally poor children, as well as providing facilities for education. to make available. </li>
          <li>Helping poor students/students and orphans/disabled people as well as poor-poor students in education by providing them with school materials uniforms, books etc. and scholarships and giving prizes for meritorious students and helping bright students for higher education, providing guidance in childcare and computer training. </li>
          <li>To train women in needlework etc. and to educate unemployed and poor needy women, to make them self-reliant by providing training in small scale industries, cottage industries, poultry farming, women&apos;s industries. </li>
          <li>Convincing the importance of computer to students/students and making them self-reliant by starting computer training classes.</li>
          <li>To help the people affected by natural/earthquake/flood/excessive rainfall, drought, fire, earthquake from time to time. </li>
          <li>To participate in the government&apos;s environmental protection and conservation schemes, to promote the same, to publish materials related to environmental protection and conservation, to advertise, to organize lectures, camps, exhibitions, competitions. </li>
          <li>Construction of wells, bore wells, ponds, dams, embankments, water tanks, tap water, rain water, storage and water recycling systems wherever required or provide financial support for the same. </li>
          <li>To study the annual report of the Gram Panchayat presented in the Gram Sabha and follow up the schemes completed or announced by the Gram Panchayat / Municipality. At the same time, follow up to ensure that they are completed in time and with good quality, if possible, help in their completion. </li>
          <li>Stage shows for promoting and nurturing social issues through art. To organize cultural programs like drama and through it by establishing training centers and encouraging the arts by the organization.</li>
          <li>Providing medical assistance to the poor, providing ambulance facilities to the patients, establishing free clinics and treating cancer, AIDS, T. B. To provide all kinds of assistance and guidance to them by organizing medical camps as well as eye donation, blood donation camps regarding the disease. </li>
          <li>Conducting sports camps competition training classes, providing sports material, about sports, organizing competitions/matches and awarding prizes to sportsmen to create interest in local and foreign sports among the youth. </li>
          <li>Celebrating various national festivals, anniversaries of great men, death anniversaries, public festivals. </li>
          <li>To provide financial educational assistance to poor and promising students, useful school writing materials. </li>
          <li>To organize guidance camps for the all-round development of women and to strive for the development and up liftment of orphans destitute and poor needy women in the area. </li>
          <li>Providing free legal advice and guidance to poor, needy people. </li>
          <li>Convincing the importance of schemes such as insurance scheme, training and promotion to women.</li>
        </ul>
  
        {/* description */}
        {/* <p className="about-description">
          A social organization of young activists who have entered the field with
          the spirit of truth and sincerity to move the life cycle of the people
          from depression to positivity by insisting on education, internet,
          communication and health to go beyond food, clothing and health, and to
          take the life cycle of the people from depression to positivity by
          studying for it.....
        </p> */}
  
        {/* mission vision */}
  
        {/* <section className="mission-vision">
          <div className="container px-4 py-5" id="featured-3">
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 justify-content-around">
              <div className="feature col text-center">
                <div className="feature-icon bg-gradient">
                  <img
                    className="about-mission-vision-img"
                    src="/imgs/target.svg"
                    alt=""
                  />
                </div>
                <h2>Mission</h2>
                <p>
                  We believe in the power of collaboration to drive meaningful
                  change. By partnering with us, Corporates can make a lasting
                  impact on the communities we serve while also demonstrating your
                  commitment to corporate social responsibility.
                </p>
              </div>
              <div className="feature col text-center">
                <div className="feature-icon bg-gradient">
                  <img
                    className="about-mission-vision-img"
                    src="/imgs/eye.svg"
                    alt=""
                  />
                </div>
                <h2>Vision</h2>
                <p>
                  Whether you&apos;re an individual looking to make a difference
                  or a group seeking opportunities for team building and community
                  engagement, we welcome volunteers of all backgrounds and
                  abilities.
                </p>
              </div>
            </div>
          </div>
        </section> */}
  
        {/* Trustees */}
        <div className="py-5 trustees-container">
          <div className="row justify-content-center">
            <div className="col-12 text-center trustee-title">
              <h2>Trustees</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* <!-- Trustee 1 --> */}
            <div className="col-md-2 trustee-box">
              <h6>Rajesh Balu Jadhav</h6>
              <p>SARPANCH</p>
            </div>
            {/* <!-- Trustee 2 --> */}
            <div className="col-md-2 trustee-box">
              <h6>Sushila Vitthal Shinde</h6>
              <p>SARPANCH</p>
            </div>
            {/* <!-- Trustee 3 --> */}
            <div className="col-md-2 trustee-box">
              <h6>Satish Anand Chavan</h6>
              <p>DEPUTY</p>
            </div>
            {/* <!-- Trustee 4 --> */}
            <div className="col-md-2 trustee-box">
              <h6>Bharati Sampat Chavhan</h6>
              <p>GRAMPANCHAYAT SADASYA</p>
            </div>
            {/* <!-- Trustee 5 --> */}
            <div className="col-md-2 trustee-box">
              <h6>Subhadra Chimajinchavhan</h6>
              <p>GRAMPANCHAYAT SADASYA</p>
            </div>
            {/* <!-- Trustee 6 --> */}
            <div className="col-md-2 trustee-box">
              <h6>Vitthal Ramji Shinde</h6>
              <p>GRAMPANCHAYAT SADASYA</p>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default About;
