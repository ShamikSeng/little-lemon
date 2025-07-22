import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => (
  <div className="app-layout">
    <Header />
    <main role="main">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;