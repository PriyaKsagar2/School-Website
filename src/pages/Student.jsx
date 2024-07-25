import React from 'react';
import './Academics.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import ExtracurricularImg from '../utils/img/extracurriculum.jpg';
import AchievementsImg from '../utils/img/achivements.jpg';
import StuCouncilImg from '../utils/img/studentCouncil.png';
import { ContactInfo } from '../components/ContactInfo';
import { Link } from 'react-router-dom';

const breakfast = [
    {
        id: 1,
        name: 'Extracurricular Activities',
        description: '"Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club"',
    },
    {
        id: 2,
        name: 'Clubs and Societies',
        description: '"Literary Society, Environmental Club, Astronomy Club, Coding Club"',   
    }
];

const lunch = [
    {
        id: 1,
        name: 'John Smith -',
        description: '"National Level Math Olympiad Winner"',
    },
    {
        id: 2,
        name: 'Sarah Lee -',
        description: '"Gold Medalist in State Swimming Championship"',
    },
    {
        id: 3,
        name: 'Tech Innovators Club -',
        description: '" Winners of Inter-School Robotics Competition"',
    }
];

const dinner = [
    {
        id: 1,
        name: 'President',
        description: 'Amy Parker, Grade 12',
    },
    {
        id: 2,
        name: 'Vice President',
        description: 'Rajiv Mehta, Grade 11',
    },
    {
        id: 3,
        name: 'Secretary',
        description: 'Lisa Wong, Grade 10',
    }
];

function Student() {
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Students' Life</h1>
                </div>
            </header>

            <div className='breakfast my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-black text-uppercase fw-bold text-success'>Life at Springdale</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={ExtracurricularImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
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
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Achievements</h2>
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
                            <img src={AchievementsImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='dinner my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase text-black fw-bold text-success'>Student Council</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={StuCouncilImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
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

export default Student;