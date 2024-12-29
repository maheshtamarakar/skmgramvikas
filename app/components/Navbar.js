"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './style.css'

const Navbar = ({ sendData }) => {
  const [isMarathi, setIsMarathi] = useState(true);
  useEffect(()=> {
    sendData(isMarathi); // Send data to parent
  }, [isMarathi]);

  const handleClick = () => {  
    setIsMarathi(!isMarathi)
  };
  if (!isMarathi) {
    return (
      <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          <Image width={48} height={48} src="/imgs/logo-removebg-preview.png" alt=""/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-sm-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/events">Event</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/notice">Notice</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/certificate">Certificate</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/news">News</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/donate">Donate</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/contribute"
                >Contribute</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/contact"
                >Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/enquiry">Enquiry</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/compliant">Compliant</Link>
            </li>
          </ul>
          <div className="d-flex">
            <div className="form-check me-2">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"  
                checked={isMarathi}
                onChange={() => handleClick()}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                मराठी
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onChange={() => handleClick()}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                English
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
    )
  } else {
    return (
      <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          <Image width={48} height={48} src="/imgs/logo-removebg-preview.png" alt=""/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-sm-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">मुख्यपृष्ठ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/about">आमच्या बदल</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/events">कार्यक्रम</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/notice">जाहिरात</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/certificate">प्रमाणपत्र</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/news">बातम्या</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/donate">देणगी</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/contribute"
                >योगदानकता</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/contact"
                >संपर्क</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/enquiry">चौकशी</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/compliant">तक्रार</Link>
            </li>
          </ul>
          <div className="d-flex">
            <div className="form-check me-2">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2" 
                checked={isMarathi}
                onChange={() => handleClick()}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                मराठी
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onChange={() => handleClick()}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                English
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
    )
  }

}

export default Navbar