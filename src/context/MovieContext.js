import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    // Здесь вы можете добавить логику загрузки фильмов при монтировании компонента Main
    // Вместо использования getMovies из useEffect в Main
  }, []);

  const getRandomMovie = () => {
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      const randomMovie = movies[randomIndex];
      setRandomMovie(randomMovie);
    } else {
      console.warn("No movies available for random selection");
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        randomMovie,
        getRandomMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovie() {
  return useContext(MovieContext);
}
