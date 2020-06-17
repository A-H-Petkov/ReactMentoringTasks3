import { modalTypes } from '../mockData/data';

export const updateMovieList = (list, action, itemId, data) => {
    if(action === modalTypes.DELETE) {
        return list.map(movie => (
            movie.id === itemId ?
            { ...movie, isActive: false} :
            movie
        ))
    }
}