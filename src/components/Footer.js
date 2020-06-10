import React from 'react';
import logo from '../resources/site-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {

  return (
    <footer className="app-footer">
      <img src={logo} alt="My_movies" className="app-footer-logo" />
      <div className="posters-panel"></div>
    </footer>
  );
}

export default Footer;
