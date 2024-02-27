import React, { useState, useEffect } from 'react';

const LazyImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageRef, setImageRef] = useState(null);

  useEffect(() => {
    let observer;
    let didCancel = false;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
          setImageSrc(src);
          observer.unobserve(imageRef);
        }
      });
    };

    if (imageRef && !imageSrc) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(handleIntersection, { threshold: 0.01, rootMargin: '75%' });
        observer.observe(imageRef);
      } else {
        setImageSrc(src);
      }
    }

    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  return <img ref={setImageRef} src={imageSrc} alt={alt} />;
};

export default LazyImage;
