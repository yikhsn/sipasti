import React, { useState } from 'react';
import styles from './styles.module.css';

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.leftArrow} onClick={prevSlide} aria-label="Previous Slide">
        &#10094;
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className={styles.image} />
      <button className={styles.rightArrow} onClick={nextSlide} aria-label="Next Slide">
        &#10095;
      </button>
      <div className={styles.indicators}>
        {images.map((_, idx) => (
          <span 
            key={idx} 
            className={`${styles.dot} ${currentIndex === idx ? styles.active : ''}`} 
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
