import React from 'react'
import './Header.css'

export default function Header() {
  return (
      <header className="header row px-5 mt-4">
        <div className="col-4">
          <img src="/logo 1.png" className='img-fluid' alt="" />
        </div>
        <div className="col">
          <div className="row gap-2">
            {/* Left Column */}
            <div className="col leftlist border rounded-3 d-flex py-2 px-0">
              <ul className="navbar-list d-flex justify-content-between my-auto w-100">
                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Specialities</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Doctors</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Birth companion suite</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Home Care Service</a></li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="col-2 btn d-flex justify-content-center align-items-center rounded-3 contact-btn">  
              <span className="text-white bold">Contact Us</span>
            </div>

          </div>

        </div>
      </header>
  )
}