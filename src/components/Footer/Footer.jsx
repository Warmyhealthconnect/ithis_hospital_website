import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Departments</h4>
          <ul>
            <li><a href="#">Cardiology</a></li>
            <li><a href="#">Orthopedics</a></li>
            <li><a href="#">Pediatrics</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <p>+91 00000 00000</p>
          <p>info@ithis.com</p>
          <p>123 Health Street</p>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottomInner">
          <div className="footer__brand">
            <span className="brand__logo">i</span><span className="brand__text">this</span>
          </div>
          <div className="footer__copy">© 2025 Ithis Hospital</div>
        </div>
      </div>
    </footer>
  )
}