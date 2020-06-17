import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { filterOptions } from '../mockData/data';


class MovieForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      movie: props.stagedMovie,
    }
  };

  resetForm = (e) => {
    e.preventDefault();
    this.setState({ movie: this.props.stagedMovie, })
  }

  updateForm = (e) => {
    e.preventDefault();
    this.setState({ movie: { ...this.state.movie, [e.target.name] : e.target.value}})
  }

  updateMovieGenres = (e) => {
    // e.preventDefault(); causes a checkbox bug
    const clicked = e.target.id;
    const { movie: { genres: genresList }} = this.state;
    const changedGenres = genresList.indexOf(clicked) < 0 
      ? [...genresList, clicked] 
      : genresList.filter(g => g !== clicked);
      this.setState({ movie: { ...this.state.movie, genres: changedGenres}});
    
  }

  submitForm = (e) => {
    e.preventDefault();
    const { movie } = this.state;
    this.props.confirmModal(movie);
  }

  render() {
    const {
      title, 
      poster, 
      year,
      overview, 
      runtime,
      genres,
      url, } = this.state.movie; 

    return (
      <Form>
        <Form.Group controlId="formMovieTitle">
          <Form.Label>TITLE</Form.Label>
          <Form.Control type="text" placeholder="Enter movie title" className="form-input" value={title} onChange={this.updateForm} name="title"/>
          {/* ToDo input validation and error messages
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>

        <Form.Group controlId="formMovieDate">
          {/* ToDO use Datepicker ? */}
          <Form.Label>RELEASE YEAR</Form.Label>
          <Form.Control type="number" placeholder="2020" className="form-input" value={year} onChange={this.updateForm} name="year" />
        </Form.Group>

        <Form.Group controlId="formMovieUrl">
          {/* ToDo input validation and error messages */}
          <Form.Label>MOVIE URL</Form.Label>
          <Form.Control type="text" placeholder="www.movie.com" className="form-input" value={url} onChange={this.updateForm} name="url" />
        </Form.Group>

        <Form.Group controlId="formMoviePoster">
          {/* ToDo input validation and error messages */}
          <Form.Label>MOVIE POSTER</Form.Label>
          <Form.Control type="text" placeholder="www.movie.com/image.jpg" className="form-input" value={poster} onChange={this.updateForm} name="poster" />
        </Form.Group>

        <Form.Group controlId="formMovieOverview">
          {/* ToDo input validation and error messages */}
          <Form.Label>OVERVIEW</Form.Label>
          <Form.Control type="text" placeholder="Plot, characters, no spoilers..." className="form-input" value={overview} onChange={this.updateForm} name="overview" />
        </Form.Group>

        <Form.Group controlId="formMovieTime">
          {/* ToDO use Datepicker ? */}
          <Form.Label>RUNTIME</Form.Label>
          <Form.Control type="number" placeholder="120min" className="form-input" value={runtime} onChange={this.updateForm} name="runtime" />
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
                  checked={genres.indexOf(genre.name) >= 0} 
                  onChange={this.updateMovieGenres}
                />
              )
            })
          }
        </Form.Group>
        
        <Button variant="primary" type="submit" className="modal-form-submit" onClick={this.submitForm}>
          SUBMIT
        </Button>

        <Button variant="outline-primary" type="reset" className="modal-form-reset" onClick={this.resetForm}>
          RESET
        </Button>
      </Form>
    );
  }
}

MovieForm.propTypes = {
  confirmModal: PropTypes.func,
  stagedMovie: PropTypes.object,
}

MovieForm.defaultProps = {
  confirmModal: () => { console.log('default confirmModal function called')},
  stagedMovie: {},
}

export default MovieForm;
