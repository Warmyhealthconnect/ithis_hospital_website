import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero__inner">
          <h1>Excellence in Every Diagnosis, Care in Every Touch</h1>
          <p>Compassionate care meets cutting-edge technology.</p>
          <div className="hero__actions">
            <button className="btn btn--primary">Book Appointment</button>
          </div>
        </div>
      </section>

      <section className="search">
        <div className="container search__inner">
          <h2>Find Trusted Specialists</h2>
          <div className="search__bar">
            <input placeholder="Search by doctor, department or service" />
            <button className="btn btn--primary">Search</button>
          </div>
          <p className="search__note">Ithis Hospital is a trusted healthcare destination for modern, safe procedures with a focus on patient-first care.</p>
        </div>
      </section>

      <section className="hospitalCard">
        <div className="container hospitalCard__grid">
          <img className="hospitalCard__img" src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop" alt="Hospital" />
          <div className="hospitalCard__content">
            <h3>Modern Infrastructure, Expert Care</h3>
            <p>Equipped with advanced diagnostics and operated by experienced specialists.</p>
            <div className="stats">
              <div className="stat"><span className="stat__num">5</span><span className="stat__label">Centers</span></div>
              <div className="stat"><span className="stat__num">1000+</span><span className="stat__label">Patients</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="motherhood">
        <div className="container motherhood__grid">
          <div className="motherhood__content">
            <h3>Embrace the Journey of Motherhood with Expert Support</h3>
            <p>Comprehensive antenatal, delivery and postnatal care.</p>
            <ul className="bullets">
              <li>Experienced obstetricians and neonatologists</li>
              <li>Compassionate nursing and lactation support</li>
              <li>State-of-the-art NICU</li>
            </ul>
            <button className="btn">Know More</button>
          </div>
          <div className="motherhood__images">
            <img src="https://images.unsplash.com/photo-1586055497430-3e85f8d9f4f5?q=80&w=600&auto=format&fit=crop" alt="" />
            <img src="https://images.unsplash.com/photo-1607093810173-3c7c3da042a3?q=80&w=600&auto=format&fit=crop" alt="" />
          </div>
        </div>
      </section>

      <section className="departments">
        <div className="container">
          <div className="departments__header">
            <h3>Our Specialized Departments</h3>
            <button className="btn btn--ghost">Explore All</button>
          </div>
          <div className="pillRow">
            <button className="pill">Cardiology</button>
            <button className="pill">Orthopedics</button>
            <button className="pill">Gynecology</button>
            <button className="pill">Pediatrics</button>
            <button className="pill">Dermatology</button>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h3>Our Facilities</h3>
          <div className="cardGrid">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1584820927498-cfe4b1a96774?q=80&w=400&auto=format&fit=crop" alt="" />
              <div className="card__title">24x7 Pharmacy</div>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=400&auto=format&fit=crop" alt="" />
              <div className="card__title">Laboratory Diagnostics</div>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1554050857-c2cd5b0976d3?q=80&w=400&auto=format&fit=crop" alt="" />
              <div className="card__title">Dental Care</div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyus">
        <div className="container whyus__grid">
          <div className="whyus__content">
            <h3>Why Us</h3>
            <p>We provide safe, reliable, and patient-first care.</p>
            <ul className="checklist">
              <li>Highly trained doctors and nurses</li>
              <li>Advanced diagnostic technologies</li>
              <li>Clean, comfortable facilities</li>
              <li>Transparent pricing</li>
              <li>Emergency care available 24x7</li>
            </ul>
          </div>
          <img className="whyus__img" src="https://images.unsplash.com/photo-1576085898867-3b4d8d99c4f0?q=80&w=800&auto=format&fit=crop" alt="" />
        </div>
      </section>
    </main>
  )
}