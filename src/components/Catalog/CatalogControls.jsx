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
  setFilter,
}) => (
  <div className="catalog-controls">
    <ButtonGroup toggle="true" aria-label="Basic example">
      {filterOptions.map((radio, idx) => (
        <ToggleButton
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          type="radio"
          variant="outline-primary"
          name="radio"
          value={radio.value}
          checked={filterValue.name === radio.name}
          onChange={() => { setFilter(radio); }}
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
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            value={option.value}
            onClick={() => { setSorting(option); }}
          >
            {option.name.toUpperCase()}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </ButtonGroup>
  </div>
);

CatalogControls.propTypes = {
  sortValue: PropTypes.shape({
    name: PropTypes.string,
  }),
  setSorting: PropTypes.func,
  filterValue: PropTypes.shape({
    name: PropTypes.string,
  }),
  setFilter: PropTypes.func,
};

CatalogControls.defaultProps = {
  sortValue: {},
  setSorting: () => {},
  filterValue: {},
  setFilter: () => {},
};

export default CatalogControls;
