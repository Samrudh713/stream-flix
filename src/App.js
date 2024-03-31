import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";

// 176ba73b // api key from http://omdbapi.com/apikey.aspx

const API_URL = "http://omdbapi.com?apikey=176ba73b";

const movie1 = {
  Title: "Interstellar: Nolan's Odyssey",
  Year: "2014",
  imdbID: "tt4172224",
  Type: "movie",
  Poster: "N/A",
};

// the above is used as static data just to render out something so that we know what jsx we are writing. Got by copying the object details. Screenshot in notion

const App = () => {
  const [movies, setMovies] = useState([]); // the default value of movies is an empty array

  // we can have multiple states and even multiple useEffect hooks per one component. There is no limit

  const [searchTerm, setSearchTerm] = useState("");
  //  have passed an empty string since the searchTerm in the start is going ot be empty

  const searchMovies = async (title) => {
    // async stands for asynchronous. async means it is going to take some time to search the movies
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Interstellar");
  }, []); // useEffect syntax involves a call back function and a dependency array

  return (
    <div className="app">
      {/* note that it's className in react unlike just class in html */}
      <h1>StreamFlix</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          // value="Interstellar"
          // the input now immediately has the value of interstellar and now we cant change/modify it because the value is statically set. To change it we have to have an onChange event that accepts a callback function as written below
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          // The `target` property provides a way to access information about the element that triggered the event. target.value is particularly relevant when dealing with input elements. target.value represents the current value of the input element.
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {/* <MovieCard movie1={movie1} /> */}
          {/* <MovieCard movie1={movies[0]} /> */}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
