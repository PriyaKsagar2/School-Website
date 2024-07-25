import React from "react";
import Gallery1 from '../utils/img/gallery1.avif';
import Gallery2 from '../utils/img/gallery2.avif';
import Gallery3 from '../utils/img/gallery3.avif';
import Gallery4 from '../utils/img/gallery4.avif';
import Gallery5 from '../utils/img/gallery5.avif';
import Gallery6 from '../utils/img/gallery6.avif';
import { ContactInfo } from '../components/ContactInfo';
import { Link } from 'react-router-dom';


export function ImageGallery() {
    return (
        <div className="container py-5">
             <h1 className="text-white">Gallary</h1>
            <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">Image Gallary</h2>
            <div className="row">
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={Gallery1} className="img-fluid" alt="" />
                    </div>
                    <div className="my-3">
                        <img src={Gallery2} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={Gallery3} className="img-fluid" alt="" />
                    </div>
                    <div className="my-3">
                        <img src={Gallery4} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={Gallery5} className="img-fluid" alt="" />
                    </div>
                    <div className="my-3">
                        <img src={Gallery6} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>

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
                                <Link href='/menu' className='text-uppercase'><li>Academics</li></Link>
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