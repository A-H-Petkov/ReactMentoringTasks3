import React from 'react';
import logo from '../resources/site-logo.png';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


const Header = () => {

  // throw new Error('test');

  return (
    <React.Fragment>
      <header className="App-header">
        <img src={logo} alt="My_movies" className="app-logo" />
        <Button className="add-movie-btn">+ ADD MOVIE</Button>
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
        <div className="posters-panel"></div>
      </header>  
    </React.Fragment>    
  );
}

export default Header;
