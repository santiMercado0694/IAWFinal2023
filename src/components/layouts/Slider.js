import React from 'react';
import { Carousel } from 'react-bootstrap';
import gamer1 from "../../assets/Gamer1.webp";
import gamer2 from "../../assets/gamer2.webp";

const CarouselContainer = () => {
    return (
        <div className="Carousel">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={gamer1}
                        alt="First slide"
                        loading="lazy"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={gamer2}
                        alt="Second slide"
                        loading="lazy"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/a-nvidia-rtx-2022.webp"
                        alt="Third slide"
                        loading="lazy"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/a-silla-nuevo-precio3.webp"
                        alt="Fourth slide"
                        loading="lazy"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/A-Notebooks-nuevo.webp"
                        alt="Fifth slide"
                        loading="lazy"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/pc-armadas-gamer.webp"
                        alt="Sixth slide"
                        loading="lazy"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselContainer;
