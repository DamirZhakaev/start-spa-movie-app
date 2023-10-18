// mainReducer.js
// const initialState = {
//     movies: [], // Инициализация свойства movies
//   };
  
//   const mainReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'SET_MOVIES':
//         return { ...state, movies: action.payload };
//       default:
//         return state;
//     }
//   };
  
//   export default mainReducer;
  
// mainReducer.js
// const initialState = {
//     movies: [], // начальное значение для свойства movies
//     // другие свойства вашего состояния
//     randomMovie: null,
//   };
  
//   const mainReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_MOVIE':
//         // Обработка действия для добавления фильма в свойство movies
//         return {
//           ...state,
//           movies: [...state.movies, action.payload],
//         };
//       // Другие обработчики действий
//       default:
//         return state;
//     }
//   };
  
//   export default mainReducer;
  
// mainReducer.js

// import { SET_MOVIES } from '../actions'; // Убедитесь, что импортируется правильное действие

// const initialState = {
//   movies: [], // Начальное значение для movies
//   // Другие поля вашего состояния
// };

// const mainReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_MOVIES:
//       return {
//         ...state,
//         movies: action.payload,
//       };
//     // Другие обработчики действий
//     default:
//       return state;
//   }
// };

// export default mainReducer;

// mainReducer.js

import { SET_MOVIES } from '../actions';

const initialState = {
  movies: [],
  // другие свойства
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    // другие обработчики действий
    default:
      return state;
  }
};

export default mainReducer;

