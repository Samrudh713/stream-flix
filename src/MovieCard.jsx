import React from "react";

// object destructuring
const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
        {/* getting the year of the movie from the movie1 object */}
      </div>

      <div>
        <img
          src={
            movie.Poster !== "N/A" // N/A indicates no img according to the API
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          // in case the movie1.poster (basically the api) is not displayed, a 400 X 400 placeholder image will be displayed
          alt={movie.Title}
        />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
