import { defaultMovieList } from '../mockData/data';

export const fetchMovies = () => ({
    type: 'GET_MOVIES',
    data: defaultMovieList 
})