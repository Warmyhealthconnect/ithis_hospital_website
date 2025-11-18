import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className="header row px-md-5 mt-4 mx-0">

      {/* Logo */}
      <div className="col-2 d-flex align-items-center">
        <img src="/logo 1.png" className='img-fluid h-50' alt="" />
      </div>

      {/* Desktop Menu */}
      <div className="col d-none d-md-block">
        <div className="row gap-2">
          <div className="col-1"></div>

          <div className="col leftlist border d-flex py-2 px-0">
            <ul className="navbar-list d-flex justify-content-between my-auto w-100">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/specialities">Specialities</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/doctors">Doctors</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/birth-companion-suite">Birth Companion Suite</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/home-care-service">Home Care Service</Link></li>

            </ul>
          </div>

          <div className="col-2 btn d-flex justify-content-center align-items-center contact-btn">
            <span className="text-white bold">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Mobile Hamburger (visible only on mobile) */}
      <div className="col d-flex justify-content-end align-items-center d-md-none">
        <button
          className="hamburger-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobileMenu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="collapse mobile-menu mt-3" id="mobileMenu">
        <ul className="mobile-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Specialities</a></li>
          <li><a href="#">Doctors</a></li>
          <li><a href="#">Birth companion suite</a></li>
          <li><a href="#">Home Care Service</a></li>
          <li className="mobile-contact">Contact Us</li>
        </ul>
      </div>

    </header>

  )
}