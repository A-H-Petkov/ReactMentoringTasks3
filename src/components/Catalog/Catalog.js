import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Figure from 'react-bootstrap/Figure';
import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CatalogControls from './CatalogControls';


function Catalog({ 
  filterOptions, 
  sortingOptions, 
  movieList,
  setOpenModal,
  modalTypes,
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
              movie.isActive &&
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
              { /* <div className="item-dot-menu">...</div> */}
              <Dropdown as={ButtonGroup} className="item-dot-menu">
                <Dropdown.Toggle className="item-dot-menu-trigger">&#8942;</Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item as="button" onClick={() => { setOpenModal(modalTypes.DELETE, movie.id)}}>DELETE</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => { setOpenModal(modalTypes.EDIT, movie.id)}}>EDIT</Dropdown.Item>
                <Dropdown.Item as="button">TODO</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
  setOpenModal: PropTypes.func,
  modalTypes: PropTypes.object,
}

Catalog.defaultProps = {
  filterOptions: [], 
  sortingOptions: [],  
  movieList: [],
  setOpenModal: () => { console.log('default setOpenModal function called')},
  modalTypes: {},
}

export default Catalog;
