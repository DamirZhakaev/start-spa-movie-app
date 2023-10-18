// // actions.js
// export const setMovies = (movies) => ({
//     type: 'SET_MOVIES',
//     payload: movies,
//   });
  
//   export const setRandomMovie = (movie) => ({
//     type: 'SET_RANDOM_MOVIE',
//     payload: movie,
//   });


// actions.js

export const SET_MOVIES = 'SET_MOVIES';
export const SET_RANDOM_MOVIE = 'SET_RANDOM_MOVIE'; // Добавьте экспорт для setRandomMovie

export const setMovies = (movies) => ({
  type: SET_MOVIES,
  payload: movies,
});

export const setRandomMovie = (movie) => ({
  type: SET_RANDOM_MOVIE, // Используйте SET_RANDOM_MOVIE
  payload: movie,
});

// Другие действия
