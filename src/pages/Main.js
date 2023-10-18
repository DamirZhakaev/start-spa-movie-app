// import axios from "axios";
// import React, { useContext, useEffect, useState, useCallback } from "react"; // Импорт useCallback
// import { useSelector, useDispatch } from 'react-redux';
// import { setMovies, setRandomMovie } from '../redux/actions';
// import ChatBot from '../chatbot/ChatBot';
// import MovieCard from "../components/MovieCard";
// import { toastWarnNotify } from "../helpers/ToastNotify";
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


// const API_KEY = process.env.REACT_APP_TMDB_KEY;
// const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
// const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

// const Main = () => {
//   const movies = useSelector((state) => state.main.movies);
//   const randomMovie = useSelector((state) => state.main.randomMovie);
//   const dispatch = useDispatch();

//   const getMovies = useCallback((API) => { // Добавьте useCallback
//     axios
//       .get(API)
//       .then((res) => dispatch(setMovies(res.data.results)))
//       .catch((err) => console.log(err));
//   }, [dispatch]);
  
//   useEffect(() => {
//     getMovies(FEATURED_API);
//   }, [getMovies]);


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (searchTerm && currentUser) {
//       getMovies(SEARCH_API + searchTerm);
//     } else if (!currentUser) {
//       toastWarnNotify('Please log in to search a movie');
//     } else {
//       toastWarnNotify('Please enter a text');
//     }
//   };

//   const toggleChat = () => {
//     setIsChatOpen(!isChatOpen);
//   };

//   const getRandomMovie = () => {
//     if (movies.length > 0) {
//       const randomIndex = Math.floor(Math.random() * movies.length);
//       const randomMovie = movies[randomIndex];
//       dispatch(setRandomMovie(randomMovie));
//     } else {
//       toastWarnNotify('No movies available for random selection');
//     }
//   };

//   return (
//     <>
//       <form className="search" onSubmit={handleSubmit}>
//         <input
//           type="search"
//           className="search-input"
//           placeholder="Search a movie..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//       <div className="d-flex justify-content-center flex-wrap">
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} {...movie} />
//         ))}
//       </div>
//       <div className="button-container">
//         <button className="random-movie-button" onClick={getRandomMovie}>
//           Get Random Movie
//         </button>
//         {randomMovie && (
//           <div className="random-movie-info">
//             <h2>Randomly Selected Movie:</h2>
//             <MovieCard key={randomMovie.id} {...randomMovie} />
//           </div>
//         )}
//         <button className="chat-button" onClick={toggleChat}>
//           Chat
//         </button>
//       </div>
//       {isChatOpen ? <ChatBot /> : null}
//     </>
//   );
// };

// export default Main;

// import axios from "axios";
// import React, { useContext, useEffect, useState, useCallback } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { setMovies, setRandomMovie } from '../redux/actions';
// // import { useSelector } from 'react-redux';
// import ChatBot from '../chatbot/ChatBot';
// import MovieCard from "../components/MovieCard";
// import { toastWarnNotify } from "../helpers/ToastNotify";
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// const API_KEY = process.env.REACT_APP_TMDB_KEY;
// const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
// const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

// const Main = () => {
//   const [searchTerm, setSearchTerm] = useState(''); // Инициализация searchTerm
//   const [currentUser, setCurrentUser] = useState(null); // Инициализация currentUser
//   const [isChatOpen, setIsChatOpen] = useState(false); // Инициализация isChatOpen

//   const movies = useSelector((state) => state.movies);
//   const randomMovie = useSelector((state) => state.randomMovie);
//   const dispatch = useDispatch();

//   const getMovies = useCallback((API) => {
//     axios
//       .get(API)
//       .then((res) => dispatch(setMovies(res.data.results)))
//       .catch((err) => console.log(err));
//   }, [dispatch]);

//   useEffect(() => {
//     getMovies(FEATURED_API);
//   }, [getMovies]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (searchTerm && currentUser) {
//       getMovies(SEARCH_API + searchTerm);
//     } else if (!currentUser) {
//       toastWarnNotify('Please log in to search a movie');
//     } else {
//       toastWarnNotify('Please enter a text');
//     }
//   };

//   const toggleChat = () => {
//     setIsChatOpen(!isChatOpen);
//   };

//   const getRandomMovie = () => {
//     if (movies.length > 0) {
//       const randomIndex = Math.floor(Math.random() * movies.length);
//       const randomMovie = movies[randomIndex];
//       dispatch(setRandomMovie(randomMovie));
//     } else {
//       toastWarnNotify('No movies available for random selection');
//     }
//   };

//   return (
//     <>
//       <form className="search" onSubmit={handleSubmit}>
//         <input
//           type="search"
//           className="search-input"
//           placeholder="Search a movie..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//       <div className="d-flex justify-content-center flex-wrap">
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} {...movie} />
//         ))}
//       </div>
//       <div className="button-container">
//         <button className="random-movie-button" onClick={getRandomMovie}>
//           Get Random Movie
//         </button>
//         {randomMovie && (
//           <div className="random-movie-info">
//             <h2>Randomly Selected Movie:</h2>
//             <MovieCard key={randomMovie.id} {...randomMovie} />
//           </div>
//         )}
//         <button className="chat-button" onClick={toggleChat}>
//           Chat
//         </button>
//       </div>
//       {isChatOpen ? <ChatBot /> : null}
//     </>
//   );
// };

// export default Main;

//--------------------
  import React, { useState, useEffect, useCallback } from 'react';
  import { useSelector, useDispatch } from 'react-redux';
  import axios from 'axios';
  import { setMovies, setRandomMovie } from '../redux/actions'; // Update the path to your Redux actions
  // Измените импорт createRoot
import { createRoot } from 'react-dom/client';

  import MovieCard from '../components/MovieCard'; // Use a relative path
  import ChatBot from '../chatbot/ChatBot'; // Use a relative path

  // Rest of your Main component code...
  const Main = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(false);

    const movies = useSelector((state) => state.movies);
    const randomMovie = useSelector((state) => state.randomMovie);
    const dispatch = useDispatch();

    
    const API_KEY = process.env.REACT_APP_TMDB_KEY;
    const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?api_key=e9dfe057189ab5836fd689e66179f5e9';
    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=e9dfe057189ab5836fd689e66179f5e9&query=';
        
    // const getMovies = useCallback((API) => {
    //   axios
    //     .get(API)
    //     .then((res) => dispatch(setMovies(res.data.results)))
    //     .catch((err) => console.log(err));
    // }, [dispatch]);

    const getMovies = useCallback((API) => {
      axios
        .get(API, {
          headers: {
            Authorization: 'Bearer ${API_KEY}', // Replace with your actual authorization method
          },
        })
        .then((res) => dispatch(setMovies(res.data.results)))
        .catch((err) => console.log(err));
    }, [dispatch]);
    
    useEffect(() => {
      getMovies(FEATURED_API);
    }, [getMovies]);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (searchTerm) {
        getMovies(SEARCH_API + searchTerm);
      } else {
        console.log('Please enter a search term.');
      }
    };

    const toggleChat = () => {
      setIsChatOpen(!isChatOpen);
    };

    const getRandomMovie = () => {
      if (movies.length > 0) {
        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];
        dispatch(setRandomMovie(randomMovie));
      } else {
        console.log('No movies available for random selection.');
      }
    };

    return (
      <>
        <form className="search" onSubmit={handleSubmit}>
          <input
            type="search"
            className="search-input"
            placeholder="Search a movie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <div className="d-flex justify-content-center flex-wrap">
        {movies && movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
        <div className="button-container">
          <button className="random-movie-button" onClick={getRandomMovie}>
            Get Random Movie
          </button>
          {randomMovie && (
            <div className="random-movie-info">
              <h2>Randomly Selected Movie:</h2>
              <MovieCard key={randomMovie.id} {...randomMovie} />
            </div>
          )}
          <button className="chat-button" onClick={toggleChat}>
            Chat
          </button>
        </div>
        {isChatOpen ? <ChatBot /> : null}
      </>
    );
  };

  export default Main;
