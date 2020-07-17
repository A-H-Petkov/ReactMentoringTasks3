import React from 'react';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'

const Navigation = (props) => {

  return (
    <nav className="app-navigation">
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/support">Support</Link>
    </nav>
  );
}

export default Navigation;
