import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './ErrorBoundary';
import Catalog from './components/Catalog/Catalog';
import Header from './components/Header';
import Footer from './components/Footer';
import { 
  filterOptions, 
  sortingOptions, 
  movieList 
} from './mockData/data';
import './App.css';

/* ToDo - 
1. Split into separate components (use fragments) 
2. Pass mock data as Props and use PropTypes
3. Use error-boundery
4. Add funtionality and fix style issues*/

function App() {

  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <Catalog 
          filterOptions={filterOptions}
          sortingOptions={sortingOptions}
          movieList={movieList}
        />      
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
