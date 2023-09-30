import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import MovieCard from "./Components/MovieCard";
import Footer from "./Components/Footer";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Comprobamos si ya tenemos las películas en caché de la sesión actual
    const cachedMovies = sessionStorage.getItem("cachedMovies");

    if (cachedMovies) {
      // Si las películas están en caché, las cargamos desde la caché
      const parsedMovies = JSON.parse(cachedMovies);
      setMovies(parsedMovies);
    } else {
      // Si no están en caché, hacemos la solicitud a la API
      const loadMovies = async () => {
        try {
          const apiKey = process.env.REACT_APP_API_KEY;
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=es-MX`
          );

          if (response.status === 401) {
            throw new Error("Petición no autorizada");
          } else if (response.status === 404) {
            throw new Error("No se encontró la información solicitada");
          } else if (response.status !== 200) {
            throw new Error("Ocurrió un error inesperado");
          }

          const data = await response.json();
          setMovies(data.results);

          // Almacenamos las películas en caché de la sesión actual
          sessionStorage.setItem("cachedMovies", JSON.stringify(data.results));
        } catch (error) {
          alert(error);
        }
      };

      loadMovies();
    }
  }, []);

  return (
    <div className="App">
      <Header />

      <h2 className="section-title">En cartelera</h2>
      <div className="movies-container" id="moviesContainer">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
