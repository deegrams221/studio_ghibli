// import axios and setup dispatch --- axios.get(`https://ghibliapi.herokuapp.com/films`)
import axios from 'axios';

// action types
export const FETCH_FILM_START = 'FETCH_FILM_START';
export const FETCH_FILM_SUCCESS = 'FETCH_FILM_SUCCESS';
export const FETCH_FILM_FAIL = 'FETCH_FILM_FAIL';
export const SET_FILM_SEARCH = 'SET_FILM_SEARCH';
export const FETCH_SEARCH_START = 'FETCH_SEARCH_START';
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const FETCH_SEARCH_FAIL = 'FETCH_SEARCH_FAIL';
export const CHANGE_PAGE = 'CHANGE_PAGE';

// action creators
export const changePage = (number) => {
  return {
    type: CHANGE_PAGE,
    payload: number
  };
};

export const getFilm = (url) => dispatch => {
  // dispatch and axios request
  dispatch({type: FETCH_FILM_START});
  axios
    .get(url)
    .then(res => {
      console.log('axios request:', res.data);
      dispatch({type: FETCH_FILM_SUCCESS, payload: res.data})
    })
    .catch(error => {
      dispatch({type: FETCH_FILM_FAIL, payload: error.res})
    })
};

export const setSearch = (url) => {
  return {
    type: SET_FILM_SEARCH, payload: url
  }
};

export const getSearch = () => dispatch => {
  dispatch({type: FETCH_SEARCH_START});
  axios
    .get(`https://ghibliapi.herokuapp.com/films/<id>`)
    .then(res => {
      dispatch({type: FETCH_SEARCH_SUCCESS, payload: res.data})
    })
    .catch(error => ({type: FETCH_SEARCH_FAIL, payload: error.res}))
};