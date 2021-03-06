import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


const CatalogControls = ({ 
  filterOptions, 
  sortingOptions, 
  sortValue,
  setSortValue,
  filterValue,
  setFilterValue
}) => {

  return (
    <div className="catalog-controls">
      <ButtonGroup toggle="true" aria-label="Basic example">
        {filterOptions.map((radio, idx) => (            
          <ToggleButton
            key={idx}
            type="radio"
            variant="outline-primary"
            name="radio"
            value={radio.value}
            checked={filterValue === radio.value}
            onChange={(e) => setFilterValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <ButtonGroup>          
        <span className="sorting-label">SORT BY: </span>
        <DropdownButton id="dropdown-basic-button" title={sortingOptions[sortValue].name.toUpperCase()}>
          {sortingOptions.map((option, idx) => (
            <Dropdown.Item 
              key={idx}
              value={option.value}
              onChange={(e) => setSortValue(e.currentTarget.value)}
            >
              {option.name.toUpperCase()}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </ButtonGroup>
    </div>    
  );
}

CatalogControls.propTypes = {
  filterOptions: PropTypes.array, 
  sortingOptions: PropTypes.array,  
  sortValue: PropTypes.number,
  setSortValue: PropTypes.func,
  filterValue: PropTypes.string,
  setFilterValue: PropTypes.func,
}

export default CatalogControls;
