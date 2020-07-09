import { defaultMovieList } from '../mockData/data';

export const actionTypes = {
    getMovies: 'GET_MOVIES',
    getMovieById: 'GET_MOVIE_BY_ID',
    setFilter: 'SET_FILTER',
    setSorting: 'SET_SORTING',
    addMovie: 'ADD_MOVIE',
    editMovie: 'EDIT_MOVIE',
    deleteMovie: 'DELETE_MOVIE',
}

export const getMovies = () => ({
    type: actionTypes.getMovies,
    data: defaultMovieList 
});

export const getMovieById = (id) => ({
    type: actionTypes.getMovieById,
    id, 
});

export const setFilter = (data) => ({
    type: actionTypes.setFilter,
    data, 
});

export const setSorting = (data) => ({
    type: actionTypes.setSorting,
    data, 
});

export const addMovie = (data) => ({
    type: actionTypes.addMovie,
    data, 
});

export const editMovie = (data) => ({
    type: actionTypes.editMovie,
    data, 
});

export const deleteMovie = (id) => ({
    type: actionTypes.deleteMovie,
    id, 
});