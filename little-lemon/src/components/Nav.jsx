import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav role="navigation" aria-label="Main navigation">
    <ul className="nav-list">
      <li>
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/booking" className={({ isActive }) => isActive ? 'active' : ''}>
          Book Table
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu" className={({ isActive }) => isActive ? 'active' : ''}>
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;