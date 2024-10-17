import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './style.css'

const Navbar = () => {
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
            <Link className="nav-link active" aria-current="page" href="/contribute"
              >Contribute</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="#">Donate</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="#">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="#">Event</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="/contact"
              >Contact</Link>
          </li>
        </ul>
        <div className="d-flex">
          <div className="form-check me-2">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Marathi
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
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

export default Navbar