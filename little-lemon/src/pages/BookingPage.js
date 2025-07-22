import React from 'react';
import BookingForm from '../components/BookingForm';
import { useBooking } from '../useBooking';

const BookingPage = () => {
  const { availableTimes, dispatchOnDateChange, submitForm } = useBooking();

  return (
    <div className="booking-page">
      <div className="container">
        <h1>Book Your Table</h1>
        <p>Reserve your spot at Little Lemon and enjoy an unforgettable dining experience.</p>
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitForm={submitForm}
        />
      </div>
    </div>
  );
};

export default BookingPage;