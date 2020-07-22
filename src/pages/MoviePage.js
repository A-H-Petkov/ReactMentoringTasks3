import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { getMovieById } from '../actions/actions';

const moviesURL = 'http://my-json-server.typicode.com/A-H-Petkov/movies/movieList';

const MoviePage = (props) => {
  const { id } = useParams();
  const { moviePreview, getMovieById } = props;

  useEffect(() => {
    if(moviePreview === null){
      axios.get(`${moviesURL}/${id}`)
      .then(res => { getMovieById(res.data)})
      .catch(err => { console.log(err) })
    }

  }, [moviePreview, id, getMovieById])


  // console.log(movieData, id, props);

    return (
      moviePreview ?
      <div className="movie-page">
        <img src={moviePreview.poster} alt="My_movies" className="app-logo details-poster" />
        <h4 className="details-title">{moviePreview.title.toUpperCase()}</h4>
        <p className="color-sienna">{moviePreview.genres.join(', ')}</p>
        <p className="detail-stats">
          <span>YEAR: {moviePreview.year}</span>
          <span>RUNTIME {moviePreview.runtime} min.</span>
          <span>RATING: 4.2/5</span>
        </p>
        <p className="details-overview">{moviePreview.overview}</p>
        <div className="posters-panel"></div>
        
      </div>
      :
      <h2 style={{color: 'white', textAlign: 'center' }}>Movie not found</h2>
    )
}

const mapStateToProps = (state) => {
  return {
    moviePreview: state.previewedMovie,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieById: (movie) => { dispatch(getMovieById(movie))}, 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
