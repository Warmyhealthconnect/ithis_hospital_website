import './Home.css'
import { IoSearch } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { FiClock, FiAlertTriangle, FiClipboard, FiActivity } from "react-icons/fi";
import { LuHeartHandshake } from "react-icons/lu";
import { PiHandHeart } from "react-icons/pi";

function Home() {


  const department = [
    {
      name: "Pediatric"
    },
    {
      name: "Orthopedics"
    },
    {
      name: "Dental Care"
    },
    {
      name: "General Surgery"
    },
    {
      name: "General Medicine"
    },
  ]

  const facilities = [
    {
      title: "24 Hours Pharmacy",
      image: '/home/pharmacy.jpg'
    },
    {
      title: "Laboratory Diagnostics",
      image: '/home/lab.jpg'
    },
    {
      title: "Dental Care",
      image: '/home/dental.jpg'
    },
  ]

  const points = [
    {
      icon: <FiClock />,
      text: "24/7 expert obstetricians and paediatricians",
    },
    {
      icon: <FiAlertTriangle />,
      text: "Emergency support for potential complications.",
    },
    {
      icon: <FiClipboard />,
      text: "Transparent and Ethical Treatment.",
    },
    {
      icon: <FiActivity />,
      text: "High–Risk Pregnancy Management",
    },
    {
      icon: <LuHeartHandshake />,
      text: "State of the Art healthcare facilities in a patient-friendly environment",
    },
    {
      icon: <PiHandHeart />,
      text: "Advanced tertiary care and transfer facilities.",
    },
  ];

  return (
    <>

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
              Ithis Hospital offers Epidural Delivery, providing mothers with a safe and effective way to experience a pain-free and comfortable childbirth. Our skilled anesthesiologists administer the epidural with precision, ensuring minimal discomfort while allowing mothers to remain fully aware and involved throughout labor.
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

      <section className='department-section'>
        <h1 style={{ fontSize: '50px' }}>Our Specialized Departments</h1>
        <div className="d-flex justify-content-between align-items-end">
          <div className='disc mt-5'>
            <p>We offer top-tier medical services with empathy, respect, and personalized care. Our experienced healthcare professionals ensure your well-being with advanced technology, comprehensive treatment plans, and compassionate care. Trust us to guide you towards a healthier future</p>
          </div>

          <div className="btn-sec">
            <button className='btn-view-more'>View More</button>
          </div>
        </div>

        <div className="departments">
          {department.map(item => (
            <button className='dep-box'>{item.name}</button>

          ))
          }
        </div>

      </section>

      <section className="pediatric-wrapper">
        <div className="pediatric-left">
          <h1 className="pediatric-title">
            Specialized Care for <br /> Every Child
          </h1>

          <p className="pediatric-desc">
            Pediatric specialists provide expert care for infants, children,
            and adolescents, focusing on growth, development, and overall
            well-being through compassionate and advanced medical support.
          </p>

          <hr className="divider" />

          <div className="feature">
            <div className="icon-check">✔</div>
            <div>
              <span className="feature-title">Pediatric Care</span>
              <span className="feature-desc">
                : Pediatric care ensures healthy growth through expert and
                compassionate treatment
              </span>
            </div>
          </div>

          <div className="feature">
            <div className="icon-check">✔</div>
            <div>
              <span className="feature-title">Child Wellness:</span>
              <span className="feature-desc">
                Promoting healthy growth and development through expert child care.
              </span>
            </div>
          </div>
        </div>

        <div className="pediatric-right">
          <img
            src="/home/pediatric.jpg"
            alt="Doctor examining child"
            className="pediatric-image"
          />
        </div>
      </section>

      <section className='facilities-section'>
        <p style={{ fontSize: "30px" }}>Our Facilities</p>
        <div className='d-flex justify-content-between align-items-end'>
          <div className='fac-heading'>
            <h1>Where Advanced Technology Meets Trusted Care Building a Better Healthcare Experience for All.</h1>
          </div>

          <div className="fac-btn">
            <button className='btn-view-more-fac'>View More</button>
          </div>
        </div>

        <div className="cards-container">
          {facilities.map(item => (
            <div className="service-card">
              <img
                src={item.image}
                alt="24 Hours Pharmacy"
                className="service-image"
              />
              <div className="service-title">{item.title}</div>
            </div>
          ))


          }
        </div>
      </section>

      <section className="why-wrapper">
        <div className="why-left">
          <p className="why-sub">Why ithis</p>
          <h2 className="why-title">
            Because we provide safe, <br />
            quality care with a patient <br />
            first approach
          </h2>
        </div>

        <div className="why-right">
          {points.map((item, index) => (
            <div className="why-card" key={index}>
              <span className="why-icon">{item.icon}</span>
              <p className="why-text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home