import {FETCH_FILM_START, FETCH_FILM_SUCCESS, FETCH_FILM_FAIL, FETCH_SEARCH_START, FETCH_SEARCH_SUCCESS} from "../Actions";

// setup initialState and reducer
const initialState = {
  films: [
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
  error: '',
  searchResults: [],
  searchUrl: null,
  filmCard: {},
  url: `https://ghibliapi.herokuapp.com/films`
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
    case FETCH_FILM_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case FETCH_SEARCH_START:
      return {
        ...state,
        searchResults: action.payload,
        isFetching: false
      };
    case FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        searchUrl: action.payload
      };
    default:
      return state;
  };
};