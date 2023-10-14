// Se obtiene la API Key desde el archivo .env
const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = "https://api.themoviedb.org/3";

// Función para manejar los errores
const errorHandler = (response) => {
  if (response.status === 401) {
    throw new Error("Petición no autorizada");
  } else if (response.status === 404) {
    throw new Error("No se encontró la información solicitada");
  } else if (response.status !== 200) {
    throw new Error("Ocurrió un error inesperado");
  }
};

// Función genérica para obtener las películas
export const fetchData = async (section = "movie", category = "now_playing", page = 1) => {
  try {
    const response = await fetch(
      `${apiUrl}/${section}/${category}?api_key=${apiKey}&language=es-MX&page=${page}`
    );

    errorHandler(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
