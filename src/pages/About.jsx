import React from 'react';
import './About.css';
import AboutImg from '../utils/img/history.jpg';
import { ContactInfo } from '../components/ContactInfo';
import { Link } from 'react-router-dom';
import Fascility from '../components/fascilityCarousel';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About</h1>
                </div>
            </header>

    <div className='container my-5'>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='img-wrapper my-4'>
            <img src={AboutImg} className='img-fluid' alt="" />
            <div className='text-overlay'>
              <h1>HISTORY</h1>
              <p>"Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students."</p>
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='img-wrapper my-4'>
            <img src={AboutImg} className='img-fluid' alt="" />
            <div className='text-overlay'>
              <h1>VISION</h1>
              <p>"To create a learning environment that fosters academic excellence, critical thinking, and ethical values."</p>
            </div>
          </div>
        </div>

        <div className='col-lg-6'>
          <div className='img-wrapper my-4'>
            <img src={AboutImg} className='img-fluid' alt="" />
            <div className='text-overlay'>
              <h1>MISSION</h1>
              <p>"To empower students with the knowledge, skills, and values needed to thrive in a dynamic world."</p>
            </div>
          </div>
        </div>

      </div>
    </div>

            <div className='bg-dark text-light'>
                <Fascility />
            </div>

            <h2 className='opacity-0'>Space</h2>

            <div className='bg-dark text-light py-5 shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                            <ContactInfo />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <ul>
                                <Link href='/' className='active text-uppercase'><li>Home</li></Link>
                                <Link href='/about' className='text-uppercase'><li>About</li></Link>
                                <Link href='/academics' className='text-uppercase'><li>Academics</li></Link>
                                <Link href='/menu' className='text-uppercase'><li>Admissions</li></Link>
                                <Link href='/menu' className='text-uppercase'><li>Faculty</li></Link>
                                <Link href='/menu' className='text-uppercase'><li>Students</li></Link>
                                <Link href='/ImageGallery' className='text-uppercase'><li>Gallary</li></Link>
                                <Link href='/contact' className='text-uppercase'><li>Contact</li></Link>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default About;