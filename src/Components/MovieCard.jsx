import React from "react";
import "../Styles/MovieCard.css";

function MovieCard({ movie }) {
  // Obtener el año de la fecha de lanzamiento
  const release_year = new Date(movie.release_date).getFullYear();
  // Calcular el porcentaje de llenado de la barra de progreso
  const ratingPercentage = (movie.vote_average / 10) * 100;
  let progressBarColor = "";

  if (movie.vote_average >= 7.5) {
    progressBarColor = "#4CAF50"; // Verde
  } else if (movie.vote_average >= 5) {
    progressBarColor = "#FFC107"; // Amarillo
  } else {
    // Rojo sangre
    progressBarColor = "#E53935";
  }

  // Anchura y color de la barra de progreso
  const progressBarStyle = {
    width: `${ratingPercentage}%`,
    backgroundColor: progressBarColor,
  };

  return (
    <div className="movie-card">
      <img
        className="movie-image"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-body">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-details">
          <p className="movie-year">{release_year}</p>
          <div className="movie-rating">
            <div className="progress-bar-container">
              <div className="progress-bar" style={progressBarStyle}></div>
            </div>
            <p className="movie-vote">{movie.vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
