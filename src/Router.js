import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/Catalog';
import SupportPage from './pages/SupportPage';
import MoviePage from './pages/MoviePage';
import Navigation from './components/shared/Navigation';
import Footer from './components/shared/Footer';
import ErrorPage from './pages/ErrorPage';
import './App.css';

const Router = () => {
  return(
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/catalog" component={CatalogPage} />
        <Route path="/support" component={SupportPage} />
        <Route path="/movie/:id" component={MoviePage} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Router;

