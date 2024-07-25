import React from 'react';
import './Home.css';
import AboutImg from '../utils/img/about-img.avif';
import { Link } from 'react-router-dom';
import { ContactInfo } from '../components/ContactInfo';
import CarouselComponent from '../components/CarouselComponent';

function Home() {
    return (
        <div className='home-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                            <h2 className='mb-0 text-white fw-bold'>Learning Today,</h2>
                            <h1 className='mb-5 text-white fw-bold text-center text-sm-start'>Leading Tomorrow</h1>
                    </div>
                </div>
            </header>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={AboutImg} className='img-fluid w-50' alt="about img" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Springdale Public School</h2>
                        <p className='mb-5'>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
                        <Link to="/about">
                            <button type='button' className='btn btn-outline-success btn-lg'>More About Us</button>
                        </Link>
                    </div>
                </div>
            </div>

            <CarouselComponent/>

            <h1 className='text-white'>Home</h1>

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

export default Home;