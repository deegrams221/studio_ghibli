// setup initialState and empty reducer
const initialState = {
  movies: [],
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  };
};