import React from "react";
import './style.css'

const About = () => {
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
            <img
              src="/imgs/donate3.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* description */}
      <p className="about-description">
        A social organization of young activists who have entered the field with
        the spirit of truth and sincerity to move the life cycle of the people
        from depression to positivity by insisting on education, internet,
        communication and health to go beyond food, clothing and health, and to
        take the life cycle of the people from depression to positivity by
        studying for it.....
      </p>

      {/* mission vision */}

      <section className="mission-vision">
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
      </section>

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
            <h6>Sanjay Jadhav</h6>
            <p>President</p>
          </div>
          {/* <!-- Trustee 2 --> */}
          <div className="col-md-2 trustee-box">
            <h6>Sandeep Utekar</h6>
            <p>Vice President</p>
          </div>
          {/* <!-- Trustee 3 --> */}
          <div className="col-md-2 trustee-box">
            <h6>Sanjay Utekar</h6>
            <p>Vice President</p>
          </div>
          {/* <!-- Trustee 4 --> */}
          <div className="col-md-2 trustee-box">
            <h6>Rajesh Jadhav</h6>
            <p>Secretary</p>
          </div>
          {/* <!-- Trustee 5 --> */}
          <div className="col-md-2 trustee-box">
            <h6>Govind Shinde</h6>
            <p>Vice Secretary</p>
          </div>
        </div>
        <div className="row justify-content-center">
          {/* <!-- Trustee 6 --> */}
          <div className="col-md-2 trustee-box">
            <h6>Laxman Jadhav</h6>
            <p>Chief Marketing Officer</p>
          </div>
          {/* <!-- Trustee 7 --> */}
          <div className="col-md-2 trustee-box">
            <h6>Arun Shinde</h6>
            <p>Treasurer</p>
          </div>
          {/* <!-- Trustee 8 --> */}
          <div className="col-md-2 trustee-box">
            <h6>Santosh Jadhav</h6>
            <p>Vice Treasurer</p>
          </div>
          {/* <!-- Trustee 9 --> */}
          <div className="col-md-2 trustee-box">
            <h6>Arjun Chavan</h6>
            <p>Executive Chairman</p>
          </div>
          {/* <!-- Trustee 10 --> */}
          <div className="col-md-2 trustee-box">
            <h6>Gopesh Utekar</h6>
            <p>Member</p>
          </div>
        </div>
        <div className="row justify-content-center">
          {/* <!-- Trustee 11 --> */}
          <div className="col-md-2 trustee-box">
            <h6>Anil Utekar</h6>
            <p>Member</p>
          </div>
          {/* <!-- Trustee 12 --> */}
          <div className="col-md-2 trustee-box">
            <h6>Suraj Kadam</h6>
            <p>Member</p>
          </div>
          {/* <!-- Trustee 13 --> */}
          <div className="col-md-2 trustee-box">
            <h6>Ajay Jadhav</h6>
            <p>Member</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
