// Se obtiene la API Key desde el archivo .env
const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = "https://api.themoviedb.org/3";

// Función para obtener los datos de las películas o series
export const fetchData = async (section, category, page) => {
  const response = await fetch(
    `${apiUrl}/${section}/${category}?api_key=${apiKey}&language=es-MX&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Ocurrió un error al obtener los datos.");
  }

  return response.json();
};

// Función para obtener los nombres de los géneros
export const getGenresNames = async (section) => {
  const response = await fetch(
    `${apiUrl}/genre/${section}/list?api_key=${apiKey}&language=es-MX`
  );

  if (!response.ok) {
    throw new Error("Ocurrió un error al obtener los datos de los géneros.");
  }

  const data = await response.json();
  const genreNames = {};
  data.genres.forEach((genre) => {
    genreNames[genre.id] = genre.name;
  });
  return genreNames;
};
