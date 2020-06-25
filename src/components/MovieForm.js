import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { filterOptions, moviePrimer } from '../mockData/data';


const MovieForm = ({ stagedMovie, confirmModal }) => {
  const [movie, setMovie] = useState(moviePrimer)

  useEffect(() => {
    setMovie(stagedMovie)
  }, [stagedMovie]);


  const resetForm = useCallback((e) => {
    e.preventDefault();
    setMovie(stagedMovie);
  })

  const updateForm = useCallback((e) => {
    e.preventDefault();
    setMovie({ ...movie, [e.target.name] : e.target.value});
  })

  const updateMovieGenres = useCallback((e) => {
    // e.preventDefault(); causes a checkbox bug
    const clicked = e.target.id;
    const { genres } = movie;
    const changedGenres = genres.indexOf(clicked) < 0 
      ? [...genres, clicked] 
      : genres.filter(g => g !== clicked);
      setMovie({ ...movie, genres: changedGenres });
    
  })

  const submitForm = useCallback((e) => {
    e.preventDefault();
    confirmModal(movie);
  })

    return (
      <Form>
        <Form.Group controlId="formMovieTitle">
          <Form.Label>TITLE</Form.Label>
          <Form.Control type="text" placeholder="Enter movie title" className="form-input" value={movie.title} onChange={updateForm} name="title"/>
          {/* ToDo input validation and error messages
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>

        <Form.Group controlId="formMovieDate">
          {/* ToDO use Datepicker ? */}
          <Form.Label>RELEASE YEAR</Form.Label>
          <Form.Control type="number" placeholder="2020" className="form-input" value={movie.year} onChange={updateForm} name="year" />
        </Form.Group>

        <Form.Group controlId="formMovieUrl">
          {/* ToDo input validation and error messages */}
          <Form.Label>MOVIE URL</Form.Label>
          <Form.Control type="text" placeholder="www.movie.com" className="form-input" value={movie.url} onChange={updateForm} name="url" />
        </Form.Group>

        <Form.Group controlId="formMoviePoster">
          {/* ToDo input validation and error messages */}
          <Form.Label>MOVIE POSTER</Form.Label>
          <Form.Control type="text" placeholder="www.movie.com/image.jpg" className="form-input" value={movie.poster} onChange={updateForm} name="poster" />
        </Form.Group>

        <Form.Group controlId="formMovieOverview">
          {/* ToDo input validation and error messages */}
          <Form.Label>OVERVIEW</Form.Label>
          <Form.Control type="text" placeholder="Plot, characters, no spoilers..." className="form-input" value={movie.overview} onChange={updateForm} name="overview" />
        </Form.Group>

        <Form.Group controlId="formMovieTime">
          {/* ToDO use Datepicker ? */}
          <Form.Label>RUNTIME</Form.Label>
          <Form.Control type="number" placeholder="120min" className="form-input" value={movie.runtime} onChange={updateForm} name="runtime" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox" >
          {
            filterOptions.map(genre => {
              return (
                genre.name !== 'ALL' &&
                <Form.Check 
                  key={genre.name} 
                  id={genre.name} 
                  name="genres" 
                  type="checkbox" 
                  inline 
                  label={genre.name} 
                  checked={movie.genres.indexOf(genre.name) >= 0} 
                  onChange={updateMovieGenres}
                />
              )
            })
          }
        </Form.Group>
        
        <Button variant="primary" type="submit" className="modal-form-submit" onClick={submitForm}>
          SUBMIT
        </Button>

        <Button variant="outline-primary" type="reset" className="modal-form-reset" onClick={resetForm}>
          RESET
        </Button>
      </Form>
    );
}

MovieForm.propTypes = {
  confirmModal: PropTypes.func,
  stagedMovie: PropTypes.object,
}

MovieForm.defaultProps = {
  // confirmModal: () => { console.log('default confirmModal function called')},
  stagedMovie: {},
}

export default MovieForm;
