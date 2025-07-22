import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => (
  <div className="confirmation-page">
    <div className="container">
      <div className="confirmation-content">
        <div className="success-icon">✅</div>
        <h2>Booking Confirmed!</h2>
        <p>Thank you for choosing Little Lemon. Your reservation has been successfully submitted.</p>
        <p>We look forward to serving you!</p>
        <div className="confirmation-actions">
          <Link to="/" className="button button-primary">
            Back to Home
          </Link>
          <Link to="/booking" className="button button-secondary">
            Make Another Reservation
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default ConfirmedBooking;