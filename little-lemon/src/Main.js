import React, { useReducer } from "react";
import BookingForm from './components/BookingForm';
import ConfirmedBooking from './components/ConfirmedBooking';
import { Routes, Route, useNavigate } from "react-router-dom";

// Ensure fetchAPI and submitAPI are pulled from global scope
const fetchAPI = window.fetchAPI || (() => []);
const submitAPI = window.submitAPI || (() => false);

// Reducer to update times
const updateTimes = (state, action) => fetchAPI(new Date(action));

// Initialize with today's available times
const initializeTimes = () => fetchAPI(new Date());

const Main = () => {
  const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed');
    } else {
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <main>
      <Routes>
        <Route
          path="/booking"
          element={
            <BookingForm
              availableTimes={availableTimes}
              dispatchOnDateChange={dispatchOnDateChange}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
