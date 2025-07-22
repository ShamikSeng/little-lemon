// src/Main.js

import React from 'react';

function Main() {
  return (
    <main>
      <h2>Welcome to Little Lemon</h2>
      <div className="section-row">
        <div className="card">
          <h3>Reserve a Table</h3>
          <p>Book your favorite spot online now!</p>
        </div>
        <div className="card">
          <h3>Our Menu</h3>
          <p>Explore our fresh Mediterranean flavors.</p>
        </div>
        <div className="card">
          <h3>Reviews</h3>
          <p>What our customers say about us.</p>
        </div>
      </div>
    </main>
  );
}

export default Main;
