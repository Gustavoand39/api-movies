import React from "react";
import "../Styles/MediaCard.css";

const MediaCard = ({ data }) => {
  // Obtener el año de la fecha de lanzamiento
  const release_year = new Date(
    data.release_date || data.first_air_date
  ).getFullYear();
  // Calcular el porcentaje de llenado de la barra de progreso
  const ratingPercentage = (data.vote_average / 10) * 100;
  let progressBarColor = "";

  if (data.vote_average >= 7.5) {
    progressBarColor = "#4CAF50"; // Verde
  } else if (data.vote_average >= 5) {
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
    <div className="media-card">
      <img
        className="media-image"
        src={`https://image.tmdb.org/t/p/w500${
          data.poster_path || data.backdrop_path
        }`}
        alt={data.title || data.original_name}
      />
      <div className="media-body">
        <h3 className="media-title">{data.title || data.original_name}</h3>
        <div className="media-details">
          <p className="media-year">{release_year}</p>
          <div className="media-rating">
            <div className="progress-bar-container">
              <div className="progress-bar" style={progressBarStyle}></div>
            </div>
            <p className="media-vote">{data.vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
