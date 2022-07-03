import React from 'react';
import '../App.css';
import { Carousel} from 'react-bootstrap';
import about from "../assets/about.png";

const CarouselContainer = () => {
    return (
             <div className="Carousel">
                 <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-under-header/mejores-precios-main-top.webp"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={about}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                 </Carousel>
             </div>
            )
}



export default CarouselContainer;