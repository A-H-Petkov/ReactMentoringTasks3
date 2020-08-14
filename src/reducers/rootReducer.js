import { actionTypes } from '../actions/actions';
import {
    filterOptions,
    sortingOptions,
} from '../mockData/data';

const defaultState = {
    previewedMovie: null,
    movies: [],
    filterBy: filterOptions[0],
    sortBy: sortingOptions[0],
}

const rootReducer = (state = defaultState, action) => {
    switch(action.type){
        case actionTypes.getMovies:
            return {
                ...state,
                movies: action.data
            }
        case actionTypes.getMovieById:
            return {
                ...state,
                previewedMovie: action.movie
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
        case actionTypes.setFilter:
            return {
                ...state,
                filterBy: action.data,
            }
        case actionTypes.setSorting:
            return {
                ...state,
                sortBy: action.data,
            }
        default: 
            return state;
    }
};

export default rootReducer;