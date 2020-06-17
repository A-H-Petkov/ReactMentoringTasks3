import { modalTypes } from '../mockData/data';

export const updateMovieList = (list, action, item, data) => {
    if(action === modalTypes.DELETE) {
        return list.map(movie => (
            movie.id === item.id ?
            { ...movie, isActive: false} :
            movie
        ))
    }
    else if(action === modalTypes.ADD) {
        return [
            ...list,
            { ...data, id: list.length + 1}
        ]
    }
    else {
        return list.map(movie => (
            movie.id === item.id ?
            data :
            movie
        ))

    }
}