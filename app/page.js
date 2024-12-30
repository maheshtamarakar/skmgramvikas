"use client";
import { useMyContext } from "./context/MyContext";
import "./page.module.css";

export default function Home() {
  const isMarathi = useMyContext();
  return (
    <>
      {/* carousel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div
          className="carousel-inner custom-carousel-container"
          data-interval="1000"
        >
          <div className="carousel-item active">
            <img src="/imgs/home1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/imgs/home2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/imgs/home3.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/imgs/home4.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/imgs/slide2.jpeg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* welcome */}
      {isMarathi && (
        <section className="about-section my-5 w-75 mx-auto ">
          <div className="about">
            <h1 className="my-3 text-center">
              श्री केदारेश्वर महाकाली दाभे मोहन ग्राम विकास संस्थेमध्ये आपले
              स्वागत आहे
            </h1>
            <p className="welcome-text">
              श्री केदारेश्वर महाकाली दाभे मोहन ग्राम विकासाच्या स्थापनेमागील
              आशावाद हा आहे की.... मातृभूमीची सेवा! मायदेशातील गरीब शेतकरी
              बंधू-भगिनींच्या जीवनात आनंद आणण्यासाठी, त्यांच्या हक्काच्या मूलभूत
              गरजांसाठी झटण्यासाठी आणि निस्वार्थी कार्यातून त्यांना मिळवून
              देण्यासाठी एक संघटना!
            </p>

            <p className="welcome-text">
              गरिबीचा त्यांच्या शिक्षणात अडथळा येऊ नये, त्यांना त्यांचे योग्य
              शिक्षण मिळावे यासाठी विद्यार्थ्यांना आर्थिक मदत आणि मार्गदर्शनाचे
              स्रोत निर्माण करून ढालप्रमाणे उभी राहणारी संस्था! आर्थिक
              वंचिततेमुळे निराधार, अपंग, हताश वृद्ध महिला/पुरुषांसाठी आधार
              बनण्याच्या उद्देशाने संघटित झालेली संस्था! विभागीय वैद्यकीय समस्या
              स्वत:च्या वैद्यकीय सुविधांच्या अभावामुळे आणि नियोजनामुळे लोकांना
              होणारा त्रास आणि जीवघेण्या घटनांवर काही पर्याय शोधण्यासाठी एकसंघ
              संघटना!
            </p>
          </div>
          <div className="container my-5">
            <div className="table-responsive-container">
              <h2 className="text-center">गावाबद्दलची माहिती</h2>
              <table
                style={{ border: "3px solid #79c0d5" }}
                className="table table-bordered"
              >
                {/* <thead className="table-head-1">
                  <tr>
                    <th>येथून ते येथपर्यंत</th>
                    <th>किलोमीटर</th>
                    <th>वेळ</th>
                  </tr>
                </thead> */}
                <tbody className="table-body-1">
                  <tr>
                    <td>राजेश बाळू जाधव</td>
                    <td>सरपंच</td>
                  </tr>
                  <tr>
                    <td>सुरेश देवजी चव्हाण</td>
                    <td>उप सरपंच</td>
                  </tr>
                  <tr>
                    <td>प्रियांका जगदीश शिंदे</td>
                    <td>पो. पाटील</td>
                  </tr>
                  <tr>
                    <td>जनार्दन देवजी चव्हाण</td>
                    <td>शिपाई</td>
                  </tr>
                </tbody>
              </table>
              <table
                style={{ border: "3px solid #79c0d5" }}
                className="table table-bordered"
              >
                <thead className="table-head-1">
                  <tr>
                    <th>जातिचे वर्गीकरण</th>
                    <th>कुटूंब</th>
                    <th>स्त्रिया</th>
                    <th>पुरुष</th>
                  </tr>
                </thead>
                <tbody className="table-body-1">
                  <tr>
                    <td>जात</td>
                    <td>३</td>
                    <td>६</td>
                    <td>८</td>
                  </tr>
                  <tr>
                    <td>एन.टी.</td>
                    <td>१</td>
                    <td>१</td>
                    <td>१</td>
                  </tr>
                  <tr>
                    <td>सर्वसाधारण</td>
                    <td>२६</td>
                    <td>३३</td>
                    <td>३०</td>
                  </tr>
                  <tr>
                    <td>एकूण</td>
                    <td>३०</td>
                    <td>४०</td>
                    <td>३९</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="container my-5">
            <div className="table-responsive-container">
              <h2 className="text-center">प्रवासाबद्दलची माहिती</h2>
              <table
                style={{ border: "3px solid #79c0d5" }}
                className="table table-bordered"
              >
                <thead className="table-head-1">
                  <tr>
                    <th>येथून ते येथपर्यंत</th>
                    <th>किलोमीटर</th>
                    <th>वेळ</th>
                  </tr>
                </thead>
                <tbody className="table-body-1">
                  <tr>
                    <td>मुंबई ते महाबळेश्वर (NH ६६)</td>
                    <td>२३१.० कि.मी.</td>
                    <td>५ तास १२ मिनिटे</td>
                  </tr>
                  <tr>
                    <td>मुंबई ते दाभे मोहन (महाड मार्ग) (NH ६६)</td>
                    <td>२३४.० कि.मी.</td>
                    <td>५ तास ३५ मिनिटे</td>
                  </tr>
                  <tr>
                    <td>ठाणे ते दाभे मोहन (महाड मार्ग) (NH ६६)</td>
                    <td>२३१.० कि.मी.</td>
                    <td>६ तास ४४ मिनिटे</td>
                  </tr>
                  <tr>
                    <td>मुंबई ते दाभे मोहन (वाई मार्ग) (NH ४८)</td>
                    <td>२९७.०कि.मी.</td>
                    <td>६ तास ३२ मिनिटे</td>
                  </tr>
                  <tr>
                    <td>प्रतापगड ते महाबळेश्वर (SH७२)</td>
                    <td>२o.७ कि.मी.</td>
                    <td>४४ मिनिटे</td>
                  </tr>
                  <tr>
                    <td>दाभे मोहन ते महाबळेश्वर (SH७२)</td>
                    <td>३५.२ कि.मी.</td>
                    <td>१ तास २१ मिनिटे</td>
                  </tr>
                  <tr>
                    <td>दाभे मोहन ते प्रतापगड</td>
                    <td>२५.२ कि.मी.</td>
                    <td>१ तास २ मिनिटे</td>
                  </tr>
                  <tr>
                    <td>ताळगे ते दाभे मोहन</td>
                    <td>४५.७ कि.मी.</td>
                    <td>१ तास ३७ मिनिटे</td>
                  </tr>
                  <tr>
                    <td>मुंबई ते पुणे (NH ४८)</td>
                    <td>१५०.९ कि.मी.</td>
                    <td>४ तास २७ मिनिटे</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
      {!isMarathi && (
        <section className="about-section my-5 w-75 mx-auto ">
          <h1 className="my-3 text-center">
            Welcome to Shree Kedarshwar Mahakali Dabhe Mohan Gramvikas Sanstha
          </h1>
          <p className="welcome-text text-justify">
            The optimism behind the establishment of the SKMDM Gramvikas is
            that... service to the Motherland! An organization united to bring
            joy to the lives of poor farmer brothers and sisters in the
            homeland, to strive for the basic needs of their rights and to get
            them through selfless work!
          </p>

          <p className="text-justify">
            An organization that stands like a shield by creating sources of
            financial help and guidance with students so that poverty does not
            interfere with their education, so that they get their right
            education! An organization united with the intention of becoming a
            support for the destitute, disabled, desperate elderly women/men due
            to financial deprivation! Departmental medical problems. A united
            organization to find some alternatives to the sufferings of people
            and life-threatening events due to lack and planning of their own
            medical facilities!
          </p>
          <div className="container my-5">
            <div className="table-responsive-container">
              <h2 className="text-center">Information about the village</h2>
              <table
                style={{ border: "3px solid #79c0d5" }}
                className="table table-bordered"
              >
                {/* <thead className="table-head-1">
                  <tr>
                    <th>येथून ते येथपर्यंत</th>
                    <th>किलोमीटर</th>
                    <th>वेळ</th>
                  </tr>
                </thead> */}
                <tbody className="table-body-1">
                  <tr>
                    <td>Rajesh Balu Jadhav</td>
                    <td>Sarpanch</td>
                  </tr>
                  <tr>
                    <td>Suresh Devji Chavan</td>
                    <td>Deputy Sarpanch</td>
                  </tr>
                  <tr>
                    <td>Priyanka Jagdish Chavan</td>
                    <td>Police Patil</td>
                  </tr>
                  <tr>
                    <td>Janardhan Devji Chavan</td>
                    <td>Peon</td>
                  </tr>
                </tbody>
              </table>
              <table
                style={{ border: "3px solid #79c0d5" }}
                className="table table-bordered"
              >
                <thead className="table-head-1">
                  <tr>
                    <th>Race Categorization</th>
                    <th>Family</th>
                    <th>Female</th>
                    <th>Male</th>
                  </tr>
                </thead>
                <tbody className="table-body-1">
                  <tr>
                    <td>Caste</td>
                    <td>3</td>
                    <td>6</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>N.T</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>General</td>
                    <td>26</td>
                    <td>33</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>30</td>
                    <td>40</td>
                    <td>39</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
      )}
      {/* contributions */}
      {/* <section
      className="contributions-container"
    >
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom text-center">Contribution</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col text-center ">
            <div className="feature-icon bg-gradient contribution-icon">
              <Image
              width={64}
              height={64}
              src="/imgs/person.svg"
              alt="icon"
              className="cont-icon"
              />
            </div>
            <h2>Individual</h2>
            <p>
              We believe in the power of collective action to drive positive
              change. Every contribution, no matter how big or small, has the
              potential to transform lives and communities. By donating to our
              cause, you become a vital part of our mission.
            </p>
          </div>
          <div className="feature col text-center">
            <div className="feature-icon bg-gradient contribution-icon">
            <Image
              width={64}
              height={64}
              src="/imgs/engineering.svg"
              alt="icon"
              className="cont-icon"
              />
            </div>
            <h2>Corporates</h2>
            <p>
              We believe in the power of collaboration to drive meaningful
              change. By partnering with us, Corporates can make a lasting
              impact on the communities we serve while also demonstrating your
              commitment to corporate social responsibility.
            </p>
          </div>
          <div className="feature col text-center">
            <div className="feature-icon bg-gradient contribution-icon">
            <Image
              width={64}
              height={64}
              src="/imgs/volunteer_activism.svg"
              alt="icon"
              className="cont-icon"
              />
            </div>
            <h2>Volunteer</h2>
            <p>
              Whether you&apos;re an individual looking to make a difference or a
              group seeking opportunities for team building and community
              engagement, we welcome volunteers of all backgrounds and
              abilities.
            </p>
          </div>
        </div>
      </div>
    </section> */}

      {/* donation */}
      {/* <div className="container col-xxl-8 px-4 py-5">
      <div className="row justify-content-center align-items-center g-5 py-5">
        <div className="col-lg-6">
          <h1 className="display-6 fw-bold lh-1 mb-3">
            Let&apos;s donate to needy people for better lives
          </h1>
          <p className="lead">
            Every day, millions of people around the world struggle to meet
            their basic needs. From food and shelter to healthcare and
            education, many individuals and families face formidable challenges
            that hinder their ability to lead healthy, fulfilling lives.
            However, by coming together and lending a helping hand, we can make
            a real difference in the lives of those in need.
          </p>
        </div>
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="/imgs/donation.jpg"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div> */}
    </>
  );
}
