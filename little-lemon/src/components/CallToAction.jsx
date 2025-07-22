import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => (
  <section className="hero-section">
    <div className="container">
      <div className="hero-content">
        <h2>Welcome to Little Lemon</h2>
        <p className="hero-description">
          Experience authentic Mediterranean cuisine in the heart of Chicago. 
          Book your table now and enjoy our delicious seasonal specials!
        </p>
        <Link to="/booking" className="cta-button">
          Reserve Your Table
        </Link>
      </div>
    </div>
  </section>
);

export default CallToAction;