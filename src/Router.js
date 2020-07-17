import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/Catalog';
import SupportPage from './pages/SupportPage';
import Navigation from './components/shared/Navigation';
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
      <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;

