import React, { useState } from 'react';
import './Slideshow.scss';

interface SlideshowProps {
  pictures: string[];
  title: string;
}

const Slideshow: React.FC<SlideshowProps> = ({ pictures, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const showArrows = pictures.length > 1;

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`${title} - Image ${currentIndex + 1}`}
        className="slideshow__image"
      />

      {showArrows && (
        <>
          <button
            className="slideshow__arrow slideshow__arrow--left"
            onClick={prevSlide}
            aria-label="Image précédente"
          >
            ‹
          </button>
          <button
            className="slideshow__arrow slideshow__arrow--right"
            onClick={nextSlide}
            aria-label="Image suivante"
          >
            ›
          </button>
          <div className="slideshow__counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;