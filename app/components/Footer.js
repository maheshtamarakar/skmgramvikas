import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './style.css'

const Footer = () => {
  return (
    <section className="footer-container">
    <div className="container">
      <footer className="row py-5 mt-5 border-top footer-content">
        <div className="col-8 mb-3">
          <Image width={128} height={128} className="footer-logo" src="/imgs/logo-removebg-preview.png" alt="logo" />
          <p>
            Room No. 8, E-1-4 A, Adarsh Apartment Owners Association,
            Sector-2, Neral, Navi Mumbai, Maharashtra - 400 705.
          </p>
          <p>
            +91 98204 10465, +91 99203 79123, +91 98697 73299
          </p>
          <p>
            swarajf001@gmail.com, info@swarajyafoundation.co.in
          </p>
        </div>

        <div className="col-4 mb-3">
          <h5>MENU</h5>
          <ul className="nav flex-column footer-menu">
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 ">Home</Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 "
                >Features</Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 ">Pricing</Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 ">FAQs</Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 ">About</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </section>
  )
}

export default Footer