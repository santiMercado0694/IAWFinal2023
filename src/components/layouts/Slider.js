import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import gamer1 from '../../assets/Gamer1.webp';
import gamer2 from '../../assets/Gamer2.webp';
import placa from '../../assets/placa.webp';
import silla from '../../assets/silla.webp';
import pc from '../../assets/armadas.webp';
import notebooks from '../../assets/notebooks.webp';

const CarouselContainer = () => {
    useEffect(() => {
        const preloadImages = async () => {
            await Promise.all([gamer1, gamer2, placa, silla, pc, notebooks].map(async (imageSrc) => {
                const img = new Image();
                img.src = imageSrc;
                await img.decode();
            }));
        };
        preloadImages();
    }, []);

    return (
        <div className="Carousel">
            <Carousel>
                {[gamer1, gamer2, placa, silla, notebooks, pc].map((src, index) => (
                    <Carousel.Item key={index}>
                        <img className="d-block w-100" src={src} alt={`Slide ${index + 1}`} loading="lazy" />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default CarouselContainer;