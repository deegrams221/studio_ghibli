import {FETCH_FILM_START, FETCH_FILM_SUCCESS} from "../Actions";

// setup initialState and reducer
const initialState = {
  movies: [
    {
      id: Math.random(),
      title: 'title',
      description: 'description',
      director: 'director',
      producer: 'producer',
      release_date: 'release_date'
    }
  ],
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_FILM_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_FILM_SUCCESS:
      return {
        ...state,
        films: action.payload,
        isFetching: false
      };
    default:
      return state;
  };
};