import React from 'react';
import logo from '../../resources/site-logo.png';

const Header = (props) => (
  <header className="App-header">
    <img src={logo} alt="My_movies" className="app-logo" />
    <div className="posters-panel" />
    {props.children}
  </header>   
);

export default Header;
