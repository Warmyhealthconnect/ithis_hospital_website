import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className='row'>
        <div className="col">
          <ul className="navbar-list ">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Specialities</Link></li>
            <li><Link to="/">Doctors</Link></li>
          </ul>
        </div>
        <div className="col">
          <ul className="navbar-list ">
            <li><Link to="/">Specialities</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Specialities</Link></li>
            <li><Link to="/">Doctors</Link></li>
          </ul>
        </div>
        <div className="col">
          <ul className="navbar-list ">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Specialities</Link></li>
            <li><Link to="/">Doctors</Link></li>
          </ul>
        </div>
        <div className="col">
          <ul className="navbar-list ">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Specialities</Link></li>
            <li><Link to="/">Doctors</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}