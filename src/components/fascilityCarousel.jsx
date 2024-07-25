// CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../utils/img/scilab.avif';
import carousel2 from '../utils/img/classroom.avif';
import carousel3 from '../utils/img/library.avif';
import carousel4 from '../utils/img/sport.avif';

const fascilityCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block h-50 w-100"
          src={carousel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: 'black' }}>"State-of-the-art science and computer labs"</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block h-50 w-100"
          src={carousel2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: 'black' }}>"Spacious and well-equipped classrooms"</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block h-50 w-100"
          src={carousel3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: 'black'}}>"Library with a vast collection of books and digital resources"</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block h-50 w-100"
          src={carousel4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: 'black' }}>"Sports facilities including a playground, gymnasium, and swimming pool"</h3>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default fascilityCarousel;