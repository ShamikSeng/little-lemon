import React from 'react';
import Nav from './Nav';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header-content">
        <h1 className="logo">Little Lemon 🍋</h1>
        <Nav />
      </div>
    </div>
  </header>
);

export default Header;