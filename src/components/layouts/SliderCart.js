import React from 'react';
import '../../App.css';
import { Carousel } from 'react-bootstrap';
import about from '../../assets/about.webp';
import precio from '../../assets/precios.webp';

const CarouselContainer = () => (
    <div className="Carousel">
        <Carousel>
            {[about, precio].map((src, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-100" src={src} alt={`Slide ${index + 1}`} />
                </Carousel.Item>
            ))}
        </Carousel>
    </div>
);

export default CarouselContainer;
