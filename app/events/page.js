import React from "react";
import './style.css'
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="py-5">
        <div className="row justify-content-center">
          
        </div>
        <div className="row justify-content-center">
          {/* <!-- Trustee 1 --> */}
          <div className="col-md-4 event-img-box">
          <Image
              width={300}
              height={400}
              src="/imgs/ganpati.jpeg"
              alt="icon"
              />
          </div>
          <div className="col-md-4 event-img-box">
          <p>शिमगा / Holi</p>
          <Image
              width={300}
              height={400}
              src="/imgs/Picture2.jpg"
              alt="icon"
              />
          </div>
          <div className="col-md-4 event-img-box">
            <p>ग्रामसभेला भेट</p>
          <Image
              width={300}
              height={400}
              src="/imgs/Picture3.jpg"
              alt="icon"
              />
          </div>
          <div className="col-md-4 event-img-box">
            <p>गणपती नाच</p>
          <Image
              width={300}
              height={400}
              src="/imgs/Picture4.jpg"
              alt="icon"
              />
          </div>
          <div className="col-md-4 event-img-box">
            <p>बैठक/ Meeting</p>
          <Image
              width={300}
              height={400}
              src="/imgs/Picture5.jpg"
              alt="icon"
              />
          </div>
          <div className="col-md-4 event-img-box">
            <p>निवेदन / Statement</p>
          <Image
              width={300}
              height={400}
              src="/imgs/Picture6.jpg"
              alt="icon"
              />
          </div>
          <div className="col-md-4 event-img-box">
            <p>पारितोषिक / Award</p>
          <Image
              width={300}
              height={400}
              src="/imgs/Picture7.jpg"
              alt="icon"
              />
          </div>
          <div className="col-md-4 event-img-box">
            <p>क्रिकेट आयोजन </p>
          <Image
              width={300}
              height={400}
              src="/imgs/Picture8.jpg"
              alt="icon"
              />
          </div>
          <div className="col-md-4 event-img-box">
            <p>सौर ऊर्जा / Solar Energy  </p>
          <Image
              width={300}
              height={400}
              src="/imgs/Picture2.jpg"
              alt="icon"
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
