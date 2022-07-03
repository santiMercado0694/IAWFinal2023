import React from 'react';
import '../App.css';
import { Carousel} from 'react-bootstrap';

const CarouselContainer = () => {
    return (
             <div className="Carousel">
                 <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1636982341171-home-sliderdesktop2x.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://http2.mlstatic.com/D_NQ_917752-MLA50446386694_062022-OO.webp"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/a-nvidia-rtx-2022.webp"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/a-silla-nuevo-precio3.webp"
                            alt="fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/A-Notebooks-nuevo.webp"
                            alt="fifth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/pc-armadas-gamer.webp"
                            alt="sixth slide"
                        />
                    </Carousel.Item>
                 </Carousel>
             </div>
            )
}



export default CarouselContainer;