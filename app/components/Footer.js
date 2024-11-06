import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './style.css'
import { useMyContext } from '../context/MyContext'

const Footer = () => {
  const isMarathi = useMyContext();
  console.log('footer isMarathi', isMarathi);
  
  if(isMarathi){
    return (
      <section className="footer-container">
      <div className="container">
        <footer className="row py-5 mt-5 border-top footer-content">
          <div className="col-8 mb-3">
            <Image width={128} height={128} className="footer-logo" src="/imgs/logo-removebg-preview.png" alt="logo" />
            <p>
            रशिका राजेश चव्हाण, रु.न.24 दर्या सागर रहिवाशी संघ, महालक्ष्मी मंदिर कंपाऊंड, बुलाभाई देसाई रोड, हजी अली, महालक्ष्मी, मुंबई-400 026.
            </p>
            <p>
              +91 98204 10465, +91 99203 79123, +91 98697 73299
            </p>
            <p>
              shreekedareshwarmahakaligvs@gmail.com
            </p>
          </div>
  
          <div className="col-4 mb-3">
            <h5>मेनू</h5>
            <ul className="nav flex-column footer-menu">
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0 ">मुख्यपृष्ठ</Link>
              </li>
              <li className="nav-item mb-2">
              <Link className="nav-link p-0" aria-current="page" href="/about">आमच्या बदल</Link>
              </li>
              {/* <li className="nav-item mb-2">
              <Link className="nav-link p-0" aria-current="page" href="/contribute"
                >Contribute</Link>
              </li> */}
              {/* <li className="nav-item mb-2">
              <Link className="nav-link p-0" aria-current="page" href="/donate">Donate</Link>
              </li> */}
              <li className="nav-item mb-2">
              <Link className="nav-link p-0" aria-current="page" href="#">कार्यक्रम</Link>
              </li>
            <li className="nav-item mb-2">
              <Link className="nav-link p-0" aria-current="page" href="/donate">देणगी</Link>
            </li>
              <li className="nav-item mb-2">
              <Link className="nav-link p-0" aria-current="page" href="/contact"
                >संपर्क</Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
    )
  }else {
  return (
    <section className="footer-container">
    <div className="container">
      <footer className="row py-5 mt-5 border-top footer-content">
        <div className="col-8 mb-3">
          <Image width={128} height={128} className="footer-logo" src="/imgs/logo-removebg-preview.png" alt="logo" />
          <p>
          c/o Rashika Rajesh chavhan, Basement darya sagar, hutments Mahalaxmi Mandir marg, B Desai Road samor Haji Ali Kambala Hill, Mumbai- 400026
          </p>
          <p>
            +91 98204 10465, +91 99203 79123, +91 98697 73299
          </p>
          <p>
            shreekedareshwarmahakaligvs@gmail.com
          </p>
        </div>

        <div className="col-4 mb-3">
          <h5>MENU</h5>
          <ul className="nav flex-column footer-menu">
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 ">Home</Link>
            </li>
            <li className="nav-item mb-2">
            <Link className="nav-link p-0" aria-current="page" href="/about">About</Link>
            </li>
            {/* <li className="nav-item mb-2">
            <Link className="nav-link p-0" aria-current="page" href="/contribute"
              >Contribute</Link>
            </li> */}
            {/* <li className="nav-item mb-2">
            <Link className="nav-link p-0" aria-current="page" href="/donate">Donate</Link>
            </li> */}
            <li className="nav-item mb-2">
            <Link className="nav-link p-0" aria-current="page" href="#">Event</Link>
            </li>
          <li className="nav-item mb-2">
            <Link className="nav-link p-0" aria-current="page" href="/donate">Donate</Link>
          </li>
            <li className="nav-item mb-2">
            <Link className="nav-link p-0" aria-current="page" href="/contact"
              >Contact</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </section>
  )
  }
}

export default Footer