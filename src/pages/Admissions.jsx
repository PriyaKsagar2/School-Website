import React from 'react';
import './Academics.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import processImg from '../utils/img/admissionprocess.png';
import criteriaImg from '../utils/img/criteria.jpg';
import datesImg from '../utils/img/impdates.jpg';
import { ContactInfo } from '../components/ContactInfo';
import { Link } from 'react-router-dom';

const breakfast = [
    {
        id: 1,
        description: ' "Admission forms are available for download. Submit the completed form along with required documents at the school office."',
    },
    {
        id: 2, 
        description: '"Application packets can be downloaded. Please return the filled forms with the necessary documentation to the admissions office."',
       
    },
    {
        id: 3,
        description: '"You can download the enrollment forms. Submit the filled-out forms along with all required paperwork to the school administration office."',
    }
];
const lunch = [
    {
        id: 1,
        description: '"Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades."',
    },
    {
        id: 2, 
        description: '"Enrollment depends on academic performance and seat availability. Certain grade levels might require qualifying exams."',
       
    },
    {
        id: 3,
        description: '"Acceptance is determined by academic merit and seat capacity. Entrance assessments may be necessary for specific grades."',
    }
];

const dinner = [
    {
        id: 1,
        name: 'Admission Form Availability:',
        description: 'March 1st',
    },
    {
        id: 2,
        name: 'Last Date for Submission:',
        description: ' March 31st',
    },
    {
        id: 3,
        name: 'Entrance Test:',
        description: ' April 15th',
    },
    {
        id: 4,
        name: 'Announcement of Results:',
        description: 'April 30th',
    }
];

function Admissions() {
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Admissions</h1>
                </div>
            </header>

            <div className='breakfast my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-black text-uppercase fw-bold text-success'>Process</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={processImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {breakfast.map((breakfast) => (
                                <div key={breakfast.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {breakfast.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {breakfast.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {breakfast.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='lunch bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Criteria</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {lunch.map((lunch) => (
                                <div key={lunch.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {lunch.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {lunch.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {lunch.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={criteriaImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='dinner my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-black text-uppercase fw-bold text-success'>Important dates</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={datesImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dinner.map((dinner) => (
                                <div key={dinner.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dinner.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dinner.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dinner.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
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

export default Admissions;