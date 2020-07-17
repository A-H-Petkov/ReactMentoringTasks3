import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../resources/site-logo.png';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { moviePrimer } from '../../mockData/data';

const Header = (props) => {

  const { setOpenModal, modalTypes } = props;

  return (
    <React.Fragment>
        <Button 
          className="add-movie-btn" 
          onClick={() => { setOpenModal(modalTypes.ADD, moviePrimer)}}
        >
          + ADD MOVIE
        </Button>
        <div className="search-panel">
          <h3 className="search-panel-title">
            FIND YOUR MOVIE
          </h3>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="What do you want to watch?"
              aria-label="What do you want to watch?"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button id="basic-addon2">SEARCH</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
    </React.Fragment>    
  );
}

Header.propTypes = {
  setOpenModal: PropTypes.func,
  modalTypes: PropTypes.object,
}

Header.defaultProps = {
  setOpenModal: () => { console.log('default setOpenModal function called')},
  modalTypes: {},
}

export default Header;
