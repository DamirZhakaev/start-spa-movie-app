// reducers.js
const initialState = {
    movies: [],
    randomMovie: null,
  };
  
  export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MOVIES':
        return { ...state, movies: action.payload };
      case 'SET_RANDOM_MOVIE':
        return { ...state, randomMovie: action.payload };
      default:
        return state;
    }
  };