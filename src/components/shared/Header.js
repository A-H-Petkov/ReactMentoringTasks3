import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../resources/site-logo.png';
// import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
// import { moviePrimer } from '../../mockData/data';

const Header = (props) => {

  // const { setOpenModal, modalTypes } = props;

  return (
    <React.Fragment>
      <header className="App-header">
        <img src={logo} alt="My_movies" className="app-logo" />
        <div className="posters-panel"></div>
        {props.children}
      </header>  
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
