import React from 'react';
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import './Faculty.css';
import Person1 from '../utils/img/person1.jpg';
import Person2 from '../utils/img/person2.jpg';
import Person3 from '../utils/img/person3.jpg';
import Person4 from '../utils/img/person4.jpg';
import './Academics.css';
import { ContactInfo } from '../components/ContactInfo';
import { Link } from 'react-router-dom';


function Faculty() {
    return (
      <div className="menu-page">
        <header className="mt-5">
          <div className="container h-100 d-flex align-items-center justify-content-center">
            <h1 className="text-light">Faculties</h1>
          </div>
        </header>

        <div className="reviews-section container">
          <div className="row g-4">
          <h1 className='text-white'>Faculties</h1>
            <div className="col-lg-6">
              <Card className="h-100 shadow">
                <CardBody>
                  <div className="p-4">
                    <CardText>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Excepturi iste culpa perspiciatis. Magnam, explicabo
                      cumque.
                    </CardText>
                  </div>
                </CardBody>
                <CardFooter className="d-flex align-items-center">
                  <img
                    src={Person1}
                    className="img-fluid rounded-circle mx-3 shadow"
                    alt=""
                  />
                  <CardTitle className="text-success">John Mike</CardTitle>
                </CardFooter>
              </Card>
            </div>
            <div className="col-lg-6">
              <Card className="h-100 shadow">
                <CardBody>
                  <div className="p-4">
                    <CardText>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolores, mollitia?
                    </CardText>
                  </div>
                </CardBody>
                <CardFooter className="d-flex align-items-center">
                  <img
                    src={Person2}
                    className="img-fluid rounded-circle mx-3 shadow"
                    alt=""
                  />
                  <CardTitle className="text-success">Maria Cruz</CardTitle>
                </CardFooter>
              </Card>
            </div>
            <div className="col-lg-6">
              <Card className="h-100 shadow">
                <CardBody>
                  <div className="p-4">
                    <CardText>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam dolor itaque reprehenderit minus tempore. Iste
                      quibusdam facilis excepturi nihil maiores!
                    </CardText>
                  </div>
                </CardBody>
                <CardFooter className="d-flex align-items-center">
                  <img
                    src={Person3}
                    className="img-fluid rounded-circle mx-3 shadow"
                    alt=""
                  />
                  <CardTitle className="text-success">Anna Gold</CardTitle>
                </CardFooter>
              </Card>
            </div>
            <div className="col-lg-6">
              <Card className="h-100 shadow">
                <CardBody>
                  <div className="p-4">
                    <CardText>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Rerum et voluptate minus error suscipit officiis placeat
                      repudiandae quibusdam officia tempora, reprehenderit,
                      enim, quidem exercitationem laborum!
                    </CardText>
                  </div>
                </CardBody>
                <CardFooter className="d-flex align-items-center">
                  <img
                    src={Person4}
                    className="img-fluid rounded-circle mx-3 shadow"
                    alt=""
                  />
                  <CardTitle className="text-success">Nick Burn</CardTitle>
                </CardFooter>
              </Card>
            </div>
            <div className="col-lg-6">
              <Card className="h-100 shadow">
                <CardBody>
                  <div className="p-4">
                    <CardText>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam dolor itaque reprehenderit minus tempore. Iste
                      quibusdam facilis excepturi nihil maiores!
                    </CardText>
                  </div>
                </CardBody>
                <CardFooter className="d-flex align-items-center">
                  <img
                    src={Person3}
                    className="img-fluid rounded-circle mx-3 shadow"
                    alt=""
                  />
                  <CardTitle className="text-success">Anna Gold</CardTitle>
                </CardFooter>
              </Card>
            </div>
            <div className="col-lg-6">
              <Card className="h-100 shadow">
                <CardBody>
                  <div className="p-4">
                    <CardText>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam dolor itaque reprehenderit minus tempore. Iste
                      quibusdam facilis excepturi nihil maiores!
                    </CardText>
                  </div>
                </CardBody>
                <CardFooter className="d-flex align-items-center">
                  <img
                    src={Person3}
                    className="img-fluid rounded-circle mx-3 shadow"
                    alt=""
                  />
                  <CardTitle className="text-success">Anna Gold</CardTitle>
                </CardFooter>
              </Card>
            </div>
            <h1 className='text-white'>Faculties</h1>
          </div>
        </div>

        <div className="bg-dark text-light py-5 shadow">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
                <ContactInfo />
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <ul>
                  <Link href="/" className="active text-uppercase">
                    <li>Home</li>
                  </Link>
                  <Link href="/about" className="text-uppercase">
                    <li>About</li>
                  </Link>
                  <Link href="/academics" className="text-uppercase">
                    <li>Academics</li>
                  </Link>
                  <Link href="/menu" className="text-uppercase">
                    <li>Admissions</li>
                  </Link>
                  <Link href="/menu" className="text-uppercase">
                    <li>Faculty</li>
                  </Link>
                  <Link href="/menu" className="text-uppercase">
                    <li>Students</li>
                  </Link>
                  <Link href="/ImageGallery" className="text-uppercase">
                    <li>Gallary</li>
                  </Link>
                  <Link href="/contact" className="text-uppercase">
                    <li>Contact</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Faculty;