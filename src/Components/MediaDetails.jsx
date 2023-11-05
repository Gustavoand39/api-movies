import React, { useEffect, useState } from "react";
import "../Styles/MediaDetails.css";
import { getGenresNames } from "./apiCalls";

const MediaDetails = ({ mediaData, section, onBack }) => {
  const [genresMedia, setGenresMedia] = useState("");

  const detailYear =
    new Date(mediaData.release_date).getFullYear() ||
    new Date(mediaData.first_air_date).getFullYear() ||
    "----";

  // Obtener los géneros de la película o serie
  const getGenres = async (genres_ids) => {
    try {
      const genresList = await getGenresNames(section);

      // Comprobar que el objeto no está vacío
      if (Object.entries(genresList).length > 0) {
        const genres = genres_ids.map((id) => genresList[id]);
        setGenresMedia(genres.join(", "));
      } else {
        setGenresMedia("No hay géneros disponibles");
      }
    } catch (error) {
      console.error("Error al obtener los géneros: ", error);
    }
  };

  useEffect(() => {
    getGenres(mediaData.genre_ids);
  });

  return (
    <div className="mediaDetails-container">
      <div className="btnBack-container">
        <button className="btnBack" onClick={onBack}>
          <span className="material-symbols-outlined">arrow_back</span>
          <span> Volver</span>
        </button>
      </div>
      <div className="img-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${
            mediaData.poster_path || mediaData.backdrop_path
          }`}
          alt={mediaData.title || mediaData.original_name}
          className="img"
        />
      </div>
      <div className="details-container">
        <h1 className="details-title">
          {mediaData.title || mediaData.original_name}
          <span className="details-year"> ({detailYear})</span>
        </h1>
        <span className="details-genres">{genresMedia}</span>
        <p className="details-overview">
          {mediaData.overview || "Descripción no disponible."}
        </p>
      </div>
    </div>
  );
};

export default MediaDetails;
