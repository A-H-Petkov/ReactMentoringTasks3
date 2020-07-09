// import { defaultMovieList } from '../mockData/data';
import { actionTypes } from '../actions/actions';

const defaultState = {
    previewedMovie: null,
    movies: []
}

const rootReducer = (state = defaultState, action) => {
    switch(action.type){
        case actionTypes.getMovies:
            return {
                ...state,
                movies: action.data
            }
        case actionTypes.getMovieById:
            const requestedMovie = state.movies.find(movie => movie.id === action.id) || null;
            return {
                ...state,
                previewedMovie: requestedMovie
            } 
        case actionTypes.deleteMovie:
            const reducedMovies = state.movies.map(movie => (
                movie.id === action.id ?
                { ...movie, isActive: false} :
                movie
            ))
            return {
                ...state,     
                movies: reducedMovies
            }    
        case actionTypes.addMovie: 
        console.log('adding');
        const incrementedMovies = [
            ...state.movies,
            { ...action.data, id: state.movies.length + 1}
        ];
        return {
            ...state,
            movies: incrementedMovies,
        }      
        case actionTypes.editMovie:
        const updatedMovies = state.movies.map(movie => (
                movie.id === action.data.id ?
                action.data :
                movie
            )) 
            return {
                ...state,
                movies: updatedMovies,
            }         
        default: 
            return state;
    }
}

export default rootReducer;