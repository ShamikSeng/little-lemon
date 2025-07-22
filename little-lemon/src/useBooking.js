import { useReducer, useCallback } from 'react';
import { fetchAPI, submitAPI } from './api';
import { useNavigate } from 'react-router-dom';

const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    return fetchAPI(new Date(action.date));
  }
  return state;
};

const initializeTimes = () => fetchAPI(new Date());

export const useBooking = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const dispatchOnDateChange = useCallback((date) => {
    dispatch({ type: 'UPDATE_TIMES', date });
  }, []);

  const submitForm = useCallback(async (formData) => {
    try {
      const success = await submitAPI(formData);
      if (success) {
        navigate('/confirmed');
      } else {
        throw new Error('Booking failed');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('Booking failed. Please try again.');
    }
  }, [navigate]);

  return {
    availableTimes,
    dispatchOnDateChange,
    submitForm
  };
};