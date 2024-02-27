import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import pc from '../../assets/armadas.webp';

const CarouselContainer = () => {
    useEffect(() => {
        const preloadImages = async () => {
            await Promise.all([pc].map(async (imageSrc) => {
                const img = new Image();
                img.src = imageSrc;
                await img.decode();
            }));
        };
        preloadImages();
    }, []);

    return (
        <div className="Carousel">
            <Carousel prevIcon={null} nextIcon={null}
                touch={false} 
                keyboard={false} 
                slide={false} 
                indicators={false} 
            >
                {[pc].map((src, index) => (
                    <Carousel.Item key={index}>
                        <img className="d-block w-100" src={src} alt={`Slide ${index + 1}`} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default CarouselContainer;
