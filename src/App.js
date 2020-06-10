import React, { useState } from 'react';
import logo from './resources/site-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Figure from 'react-bootstrap/Figure';
import './App.css';

/* ToDo - 
1. Split into separate components (use fragments) 
2. Pass mock data as Props and use PropTypes
3. Use error-boundery
4. Add funtionality and fix style issues*/

const radios = [
  { name: 'ALL', value: '1' },
  { name: 'COMEDY', value: '2' },
  { name: 'DRAMA', value: '3' },
  { name: 'CRIME', value: '4' },
  { name: 'HORROR', value: '5' },
  { name: 'ACTION', value: '6' },
  { name: 'DOCUMENTARY', value: '7' },
];

const sortingOptions = [
  { name: 'Release date', value: 1 },
  { name: 'Rating', value: 2 },
  { name: 'Runtime', value: 3 }
]

const movieList = [
  { title: 'Black widow', poster: 'https://cdn.collider.com/wp-content/uploads/2020/03/black-widow-poster.jpg', year: '2020', genres: ['Action']},
  { title: 'Interstellar', poster: 'https://i.pinimg.com/originals/c6/d4/e2/c6d4e2803a467b99ede238fee57441a7.jpg', year: '2015', genres: ['Action', 'Drama']},
  { title: 'Movie 3', poster: 'https://cdn.shopify.com/s/files/1/1416/8662/products/mad_max_fury_road_2015_advance_original_film_artB_69310cd2-a499-45fc-a12d-df89480c4c99_2000x.jpg?v=1573593327', year: '2020', genres: ['Action']},
  { title: 'Blade runner 2049', poster: 'https://cdn.shopify.com/s/files/1/1416/8662/products/blade_runner_2049_2017_advance_original_film_art_9eeddf62-08a7-4bb2-9e09-9f21f318c14c_2000x.jpg?v=1578262145', year: '2020', genres: ['Action']},
  { title: 'Doctor Sleep', poster: 'https://image.tmdb.org/t/p/original/ohS07RD5jpfUjEkYBC4q6MKaA6E.jpg', year: '2020', genres: ['Action', 'Horror']},
  { title: 'Movie 6', poster: 'https://cdn.collider.com/wp-content/uploads/2014/02/jodorowskys-dune-poster.jpg', year: '2016', genres: ['Documentary']},
]

function App() {
  const [radioValue, setRadioValue] = useState('1');
  const [sortValue, setSortValue] = useState(0);

  return (
    <div className="App">
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
      <main>
        <div className="catalog-controls">
        <ButtonGroup toggle="true" aria-label="Basic example">
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="outline-primary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
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
      <footer className="app-footer">
        <img src={logo} alt="My_movies" className="app-footer-logo" />
        <div className="posters-panel"></div>
      </footer>
    </div>
  );
}

export default App;
