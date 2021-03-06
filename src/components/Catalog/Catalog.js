import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Figure from 'react-bootstrap/Figure';
import CatalogControls from './CatalogControls';


function Catalog({ 
  filterOptions, 
  sortingOptions, 
  movieList 
}) {
  const [filterValue, setFilterValue] = useState('1');
  const [sortValue, setSortValue] = useState(0);

  return (
      <main>
        <CatalogControls
          filterOptions={filterOptions}
          sortingOptions={sortingOptions}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          sortValue={sortValue}
          setSortValue={setSortValue}
        />
        <div>
          <span className="sorting-label">
            <b>39</b> MOVIES FOUND
          </span>
        </div>
        <div className="catalog-container">
            {movieList.map((movie, idx) => (
              <Figure key={idx} className="catalog-item">
              <Figure.Image
                // width={171}
                // height={180}
                alt="171x180"
                src={movie.poster}
              />
              <Figure.Caption>
                <div className="movie-title-row">
                  <h6>{movie.title}</h6>
                  <span>{movie.year}</span>
                </div>
                <div>
                  {movie.genres.join(', ')}
                </div>
              </Figure.Caption>
              <div className="item-dot-menu">...</div>
            </Figure>
            ))}
        </div>
      </main>
  );
}

Catalog.propTypes = {
  filterOptions: PropTypes.array, 
  sortingOptions: PropTypes.array,  
  movieList: PropTypes.array,  
}

Catalog.defaultProps = {
  filterOptions: [], 
  sortingOptions: [],  
  movieList: [],
}

export default Catalog;
