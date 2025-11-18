import React from 'react'
import './Carousel.css'
import { useLocation } from 'react-router-dom'

function Carousel() {


    const location = useLocation()

    const showElement = location.pathname === "/";

    return (
        <>


            <section className="home-carousel-section">
                <div className='home-carousel-txts'>
                    <h1 className='carousel-heading'>Excellence in Every Diagnosis, Care in Every Touch</h1>
                    <p className='carousel-para'>Trust us to be your partner in health, guiding you <br /> towards a brighter, healthier future.</p>
                    {showElement &&
                        <button className='carousel-btn'>Book an Appoinment</button>
                    }
                </div>
            </section>



        </>
    )
}

export default Carousel