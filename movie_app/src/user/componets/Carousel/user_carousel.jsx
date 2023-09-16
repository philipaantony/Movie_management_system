import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const UserCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
    >
      <div className="carousel-slide">
        <img src="assets/explore/a1.jpg" alt="Slide 1" />
        <div className="carousel-caption">
          <h3 className="carousel-title">Beautiful Scenery</h3>
          <p>Explore amazing landscapes</p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
      <div className="carousel-slide">
        <img src="assets/explore/a2.jpg" alt="Slide 2" />
        <div className="carousel-caption">
          <h3 className="carousel-title">Adventure Awaits</h3>
          <p>Discover new horizons</p>
          <button className="btn btn-primary">Explore Now</button>
        </div>
      </div>
      <div className="carousel-slide">
        <img src="assets/explore/a3.jpg" alt="Slide 3" />
        <div className="carousel-caption">
          <h3 className="carousel-title">Relax and Unwind</h3>
          <p>Find your peaceful retreat</p>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </Carousel>
  );
};

export default UserCarousel;
