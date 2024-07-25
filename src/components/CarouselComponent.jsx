// CarouselComponent.js
import React from 'react';
import './CarouselComponent.css'
import { Carousel } from 'react-bootstrap';
import carousel1 from '../utils/img/carousel1.avif';
import carousel2 from '../utils/img/caarousel2.avif';
import carousel3 from '../utils/img/carousel3.avif';

const CarouselComponent = () => {
  return (
    <div className="mt-5">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block h-50 w-100"
              src={carousel1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{ color: "black" }}>Annual Sports Day</h3>
              <p style={{ color: "black", fontWeight: "bold" }}>
                Celebrating Excellence in Sports.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block h-50 w-100"
              src={carousel2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 style={{ color: "black" }}>Science Exhibition</h3>
              <p style={{ color: "black", fontWeight: "bold" }}>
                Showcasing Student Innovations.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block h-50 w-100"
              src={carousel3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 style={{ color: "black" }}>Cultural Festival</h3>
              <p style={{ color: "black", fontWeight: "bold" }}>
                Embracing Diversity and Creativity.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>

  );
}

export default CarouselComponent;