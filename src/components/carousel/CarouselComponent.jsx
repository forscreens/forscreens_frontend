import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './Carousel.module.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ImageCarousel = () => {
  console.log('Rendering Carousel.js');
  const images = [
    { url: 'https://source.unsplash.com/random/800x600?actor', text: 'For Actors' },
    { url: 'https://source.unsplash.com/random/800x600?backstage', text: 'For Creators' },
    { url: 'https://source.unsplash.com/random/800x600?event', text: 'For Influencers' },
    { url: 'https://source.unsplash.com/random/800x600?movie', text: 'For Models' },
    { url: 'https://source.unsplash.com/random/800x600?serial', text: 'For Musicians' },
    { url: 'https://source.unsplash.com/random/800x600?theatre', text: 'For Theatre' },
    { url: 'https://source.unsplash.com/random/800x600?performance', text: 'For Performances' }
  ];

  return (
    
    <div className="App">
      <h2 className={styles.carouselHeader}>Discover Backstage for talent</h2>
      
      <Carousel 
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass={styles.carouselItem}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.carouselItemContent}>
            <div className={styles.carouselItemInner}>
              <a href={`/page${index + 1}`}>
                <img src={image.url} alt={`carousel ${index + 1}`} className={styles.carouselImage} />
              </a>
            </div>
            <div className={styles.carouselText}>{image.text}</div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
