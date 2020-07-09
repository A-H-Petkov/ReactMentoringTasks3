// import { defaultMovieList } from '../mockData/data';

const defaultState = {
    movies: []
}

const rootReducer = (state = defaultState, action) => {
    if(action.type === 'GET_MOVIES'){
        return {
            ...state,
            movies: action.data
        }
    }

    return state;
}

export default rootReducer;