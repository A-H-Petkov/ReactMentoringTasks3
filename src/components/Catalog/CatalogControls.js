import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { 
  filterOptions, 
  sortingOptions, 
} from '../../mockData/data';


const CatalogControls = ({  
  sortValue,
  setSorting,
  filterValue,
  setFilter
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
            checked={filterValue.name === radio.name}
            onChange={(e) => { setFilter(radio)}}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <ButtonGroup>          
        <span className="sorting-label">SORT BY: </span>
        <DropdownButton id="dropdown-basic-button" title={sortValue.name.toUpperCase()}>
          {sortingOptions.map((option, idx) => (
            <Dropdown.Item 
              key={idx}
              value={option.value}
              onClick={(e) => { console.log(option, 'seting sort'); setSorting(option)}}
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
  sortValue: PropTypes.object,
  setSorting: PropTypes.func,
  filterValue: PropTypes.object,
  setFilter: PropTypes.func,
}

export default CatalogControls;
