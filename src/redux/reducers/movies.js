// // redux/reducers/movies.js

// const initialState = {
//     movies: [],
//     searchTerm: '',
//   };
  
//   const moviesReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'SET_MOVIES':
//         return { ...state, movies: action.payload };
//       case 'SET_SEARCH_TERM':
//         return { ...state, searchTerm: action.payload };
//       default:
//         return state;
//     }
//   };
  
//   export default moviesReducer;
  
// moviesReducer.js

const initialState = {
  movies: [], // Начальное состояние для списка фильмов
  // Другие начальные свойства вашего состояния
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };
    // Другие обработчики действий (actions) для вашего редьюсера
    default:
      return state;
  }
};

export default moviesReducer;
