import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Figure from 'react-bootstrap/Figure';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CatalogControls from './CatalogControls';
import { Link } from 'react-router-dom'

function Catalog({ 
  movieList,
  setOpenModal,
  modalTypes,
  openDetailed,
  filterBy,
  sortBy,
  setFilter,
  setSorting,
}) {

  const [catalogMovies, setCatalogMovies] = useState(movieList);

  useEffect(() => {

    if ( filterBy.name !== 'ALL') {
      console.log('filtering');
      const filteredMovies = movieList.filter((mov) => mov.genres.indexOf(filterBy.name) > -1 );
      setCatalogMovies(filteredMovies)
    }
    else {
      setCatalogMovies(movieList)
    }
  },[filterBy, setCatalogMovies, movieList] )
  
  // ToDo improve sorting with ascending/descending options
  const sortParam = sortBy.value;
  catalogMovies.sort((a, b) => a[sortParam] - b[sortParam] );

  return (
      <main>
        <CatalogControls
          filterValue={filterBy}
          sortValue={sortBy}
          setFilter={setFilter}
          setSorting={setSorting}
        />
        <div>
          <span className="sorting-label">
          <b>{catalogMovies.length}</b> MOVIES FOUND
          </span>
        </div>
        <div className="catalog-container">
            {catalogMovies.map((movie, idx) => (
              movie.isActive &&
              <Figure key={idx} className="catalog-item">
                <Link to={`/movie/${movie.id}`}>
              <Figure.Image
                alt="171x180"
                src={movie.poster}
                //toDo generic image when poster is not provided
              />
              </Link>
              <Figure.Caption>
                <div className="movie-title-row">
                  <h6>{movie.title}</h6>
                  <span>{movie.year}</span>
                </div>
                <div>
                  {movie.genres.join(', ')}
                </div>
              </Figure.Caption>
              <Dropdown as={ButtonGroup} className="item-dot-menu">
                <Dropdown.Toggle className="item-dot-menu-trigger">&#8942;</Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item as="button" onClick={() => { setOpenModal(modalTypes.DELETE, movie)}}>DELETE</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => { setOpenModal(modalTypes.EDIT, movie)}}>EDIT</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => { openDetailed(movie)}}>DETAILS</Dropdown.Item> 
                </Dropdown.Menu>
              </Dropdown>
            </Figure>
            ))}
        </div>
      </main>
  );
}

Catalog.propTypes = {
  movieList: PropTypes.array,  
  setOpenModal: PropTypes.func,
  modalTypes: PropTypes.object,
  openDetailed: PropTypes.func,
  setFilter: PropTypes.func,
  setSorting: PropTypes.func,
}

Catalog.defaultProps = {
  filterOptions: [], 
  sortingOptions: [],  
  movieList: [],
  setOpenModal: () => { console.log('default setOpenModal function called')},
  modalTypes: {},
  openDetailed: () => { console.log('default openDetailed function called')},
}

export default Catalog;
