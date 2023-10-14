import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import MediaCard from "./Components/MediaCard";
import PageNav from "./Components/PageNav";
import Footer from "./Components/Footer";
import { fetchData } from "./Components/apiCalls";

function App() {
  const [mediaData, setMediaData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentSection, setCurrentSection] = useState("movie");
  const [currentCategory, setCurrentCategory] = useState("now_playing");

  // Se ejecuta la petición a la API cuando se monta el componente
  useEffect(() => {
    const loadMovies = async () => {
      try {
        // Se obtiene la información en formato JSON
        const data = await fetchData(
          currentSection,
          currentCategory,
          currentPage
        );
        // Se actualizan los estados
        console.log(data);
        setTotalPages(data.total_pages);
        setMediaData(data.results);
      } catch (error) {
        alert(error);
      }
    };

    loadMovies();
  }, [currentPage, currentSection, currentCategory]);

  // Función que actualiza el estado de la página actual
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Función para actualizar el estado de mediaData
  const handleMediaData = (newMediaData) => {
    setMediaData(newMediaData);
  };

  // Función para actualizar el estado de la sección actual
  const handleSectionChange = (newSection) => {
    setCurrentSection(newSection);
  };

  // Función para actualizar el estado de la categoría actual
  const handleCategoryChange = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  return (
    <div className="App">
      <Header
        handlePageChange={handlePageChange}
        handleMediaData={handleMediaData}
        handleSectionChange={handleSectionChange}
        handleCategoryChange={handleCategoryChange}
      />

      <h2 className="section-title">
        {currentSection === "movie" ? "Películas" : "Programas de TV"}
        {currentCategory === "now_playing" && " en cines"}
        {currentCategory === "popular" && " populares"}
        {currentCategory === "top_rated" && " con mejores críticas"}
        {currentCategory === "upcoming" && " a estrenarse"}
        {currentCategory === "on_the_air" && " en emisión"}
      </h2>
      <div className="mediaData-container">
        {mediaData.map((data) => {
          return <MediaCard key={data.id} data={data} />;
        })}
      </div>

      <PageNav
        onPageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      <Footer />
    </div>
  );
}

export default App;
