import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => (
    <nav className="app-navigation">
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/support">Support</Link>
    </nav>
);

export default Navigation;
