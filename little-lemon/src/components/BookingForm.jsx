import React, { useState, useEffect, useMemo } from 'react';

const OCCASIONS = [
  { value: 'Birthday', label: 'Birthday' },
  { value: 'Anniversary', label: 'Anniversary' },
  { value: 'Date', label: 'Date Night' },
  { value: 'Business', label: 'Business Meeting' },
  { value: 'Other', label: 'Other' }
];

const INITIAL_FORM_DATA = {
  date: '',
  time: '',
  guests: 1,
  occasion: 'Birthday',
};

const BookingForm = ({ availableTimes = [], dispatchOnDateChange, submitForm }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});

  // Memoize form validation
  const isFormValid = useMemo(() => {
    return formData.date !== '' &&
           formData.time !== '' &&
           formData.guests >= 1 &&
           formData.guests <= 10 &&
           formData.occasion !== '';
  }, [formData]);

  // Get today's date for min date restriction
  const today = useMemo(() => new Date().toISOString().split('T')[0], []);

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'date':
        if (!value) {
          newErrors.date = 'Date is required';
        } else if (new Date(value) < new Date(today)) {
          newErrors.date = 'Please select a future date';
        } else {
          delete newErrors.date;
        }
        break;
      case 'time':
        if (!value) {
          newErrors.time = 'Time is required';
        } else {
          delete newErrors.time;
        }
        break;
      case 'guests':
        const guestCount = parseInt(value);
        if (!guestCount || guestCount < 1) {
          newErrors.guests = 'At least 1 guest is required';
        } else if (guestCount > 10) {
          newErrors.guests = 'Maximum 10 guests allowed';
        } else {
          delete newErrors.guests;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const processedValue = name === 'guests' ? parseInt(value) || '' : value;

    setFormData(prev => ({
      ...prev,
      [name]: processedValue,
    }));

    validateField(name, processedValue);

    if (name === 'date' && dispatchOnDateChange) {
      dispatchOnDateChange(value);
      // Reset time when date changes
      setFormData(prev => ({ ...prev, time: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields before submission
    Object.keys(formData).forEach(key => {
      validateField(key, formData[key]);
    });

    if (isFormValid && Object.keys(errors).length === 0) {
      submitForm(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form" noValidate>
      <fieldset>
        <legend>
          <h2>Reserve Your Table</h2>
        </legend>

        <div className="form-group">
          <label htmlFor="date">Choose date *</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={today}
            required
            aria-describedby={errors.date ? 'date-error' : undefined}
            className={errors.date ? 'error' : ''}
          />
          {errors.date && (
            <span id="date-error" className="error-message" role="alert">
              {errors.date}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="time">Choose time *</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            aria-describedby={errors.time ? 'time-error' : undefined}
            className={errors.time ? 'error' : ''}
          >
            <option value="">Select a time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && (
            <span id="time-error" className="error-message" role="alert">
              {errors.time}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of guests *</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
            required
            aria-describedby={errors.guests ? 'guests-error' : undefined}
            className={errors.guests ? 'error' : ''}
          />
          {errors.guests && (
            <span id="guests-error" className="error-message" role="alert">
              {errors.guests}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion *</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            required
          >
            {OCCASIONS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <button
            type="submit"
            disabled={!isFormValid || Object.keys(errors).length > 0}
            className="submit-button"
          >
            Make Reservation
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default BookingForm;