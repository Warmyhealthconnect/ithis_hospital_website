import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className='row px-5 py-4'>

        <div className="col">
          <h5 className="footer-title">Quick Links</h5>
          <ul className="navbar-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Facilities</Link></li>
            <li><Link to="/">Doctors</Link></li>
          </ul>
        </div>

        <div className="col">
          <h5 className="footer-title">Services</h5>
          <ul className="navbar-list">
            <li><Link to="/">Specialities</Link></li>
            <li><Link to="/">Home Care Service</Link></li>
            <li><Link to="/">Birth Companion Suite</Link></li>
            <li><Link to="/">Gallery</Link></li>
          </ul>
        </div>

        <div className="col">
          <h5 className="footer-title">More</h5>
          <ul className="navbar-list">
            <li><Link to="/">Career</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Mom to Be</Link></li>
            <li><Link to="/">Mother Hood</Link></li>
          </ul>
        </div>

        <div className="col">
          <h5 className="footer-title">Contact Info</h5>
          <ul className="navbar-list">
            <li><Link to="/">ithishospital@gmail.com</Link></li>
            <li><Link to="/">+91 483 3500300</Link></li>
            <li><Link to="/">Vengara Road, Kizhakkethala, Malappuram, Kerala, 676505</Link></li>
          </ul>
        </div>

      </div>
    </footer>

  )
}