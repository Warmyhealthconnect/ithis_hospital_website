import './Home.css'
import { IoSearch } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";

function Home() {
  return (
    <>

      <section className="home-carousel-section">
        <div className='home-carousel-txts'>
          <h1 className='carousel-heading'>Excellence in Every Diagnosis, Care in Every Touch</h1>
          <p className='carousel-para'>Trust us to be your partner in health, guiding you <br /> towards a brighter, healthier future.</p>
          <button className='carousel-btn'>Book an Appoinment</button>
        </div>
      </section>


      <section className="search-section">
        <h2 className="search-section__heading">
          Find Trusted Specialists <br />
          Dedicated to Your Well-being
        </h2>

        <div className="search-section__input-group">
          <div className="search-section__input search-section__input--doctors">
            <span className="icon"> <IoSearch size={25} /> </span>
            <input type="text" placeholder="Search Doctors" />
          </div>
          <div className="search-section__input search-section__input--specialties">
            <span className="icon"> <FaClipboardList size={25} /> </span>
            <input type="text" placeholder="Search Specialties...." />
          </div>
          <button className="search-section__button">
            Book an Appointment
          </button>
        </div>

        <div className='hospital-disc-container'>
          <div className='hospital-disc'>
            <p>Ithis Hospital is a trusted healthcare destination for mothers and children, offering advanced care in gynecology, laparoscopy, pediatrics, neonatology, and more — delivered by expert specialists with a commitment to excellence</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-section__inner">

          {/* Image Column */}
          <div className="about-section__image-col">
            {/* Replace with your actual image path */}
            <img
              src="/home/ithis.png"
              alt="Ithis Hospital Building"
              className="about-section__image"
            />
          </div>

          {/* Content Column */}
          <div className="about-section__content-col">
            <p className="about-section__text">
              Ithis Hospital is a trusted healthcare destination for mothers and children, offering advanced care in gynecology, laparoscopy, pediatrics, neonatology, and more — delivered by expert specialists with a commitment to excellence
            </p>

            <div className="about-section__stats">
              {/* Stat 1 */}
              <div className="stat">
                <h3 className="stat__number">5</h3>
                <p className="stat__label">Years Experience</p>
              </div>

              <hr className="stat__divider" />

              {/* Stat 2 */}
              <div className="stat">
                <h3 className="stat__number">1000+</h3>
                <p className="stat__label">Happy Patients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="maternity-section">
        <div className="maternity-section__inner">

          {/* 1. Content Column (Left Side) */}
          <div className="maternity-section__content-col">
            <h2 className="maternity-section__heading">
              Ease the Journey of Motherhood <br />
              with Epidural Support
            </h2>
            <p className="maternity-section__text">
              Ithis Hospital offers **Epidural Delivery**, providing mothers with a safe and effective way to experience a pain-free and comfortable childbirth. Our skilled anesthesiologists administer the epidural with precision, ensuring minimal discomfort while allowing mothers to remain fully aware and involved throughout labor.
            </p>
          </div>

          {/* 2. Image Column (Right Side) */}
          <div className="maternity-section__image-col">
            {/* Replace with your actual image path */}
            <img
              src="/home/mom.png"
              alt="Mother holding newborn baby"
              className="maternity-section__image"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home