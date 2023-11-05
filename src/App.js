import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import MediaCard from "./Components/MediaCard";
import PageNav from "./Components/PageNav";
import Footer from "./Components/Footer";
import MediaDetails from "./Components/MediaDetails";
import { fetchData } from "./Components/apiCalls";

function App() {
  const [mediaData, setMediaData] = useState([]); // Datos de la API
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [totalPages, setTotalPages] = useState(0); // Total de páginas
  const [currentSection, setCurrentSection] = useState("movie"); // Sección actual
  const [currentCategory, setCurrentCategory] = useState("now_playing"); // Categoría actual
  const [showDetails, setShowDetails] = useState(false); // Determina si se muestra el detalle de un elemento
  const [selectedMedia, setSelectedMedia] = useState({}); // Elemento seleccionado

  // Se ejecuta la petición a la API cuando se monta el componente
  useEffect(() => {
    const loadMovies = async () => {
      try {
        // Se obtienen los datos de la API
        const data = await fetchData(
          currentSection,
          currentCategory,
          currentPage
        );
        // Se actualizan los estados del total de páginas y los datos de la API
        setTotalPages(data.total_pages);
        setMediaData(data.results);
      } catch (error) {
        alert(error);
      }
    };

    loadMovies();
  }, [currentPage, currentSection, currentCategory]);

  // Actualiza el estado de los datos de la API
  const handleMediaData = (newMediaData) => {
    setMediaData(newMediaData);
  };
  
  // Actualiza el estado de la página actual
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Actualiza el estado de la sección actual
  const handleSectionChange = (newSection) => {
    setCurrentSection(newSection);
  };

  // Actualiza el estado de la categoría actual
  const handleCategoryChange = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  // Determina si se muestra la lista de elementos
  const showMediaList = () => {
    setSelectedMedia({});
    setShowDetails(false);
  };
  
  // Determina si se muestra el detalle de un elemento
  const showMediaDetails = (media) => {
    setSelectedMedia(media);
    setShowDetails(true);
  };

  return (
    <div className="App">
      <Header
        handlePageChange={handlePageChange}
        handleMediaData={handleMediaData}
        handleSectionChange={handleSectionChange}
        handleCategoryChange={handleCategoryChange}
      />

      {!showDetails && (
        <h2 className="section-title">
          {currentSection === "movie" ? "Películas" : "Programas de TV"}
          {currentCategory === "now_playing" && " en cines"}
          {currentCategory === "popular" && " populares"}
          {currentCategory === "top_rated" && " con mejores críticas"}
          {currentCategory === "upcoming" && " a estrenarse"}
          {currentCategory === "on_the_air" && " en emisión"}
        </h2>
      )}

      {showDetails ? (
        <MediaDetails
          mediaData={selectedMedia}
          section={currentSection}
          onBack={showMediaList}
        />
      ) : (
        <div className="mediaData-container">
          {mediaData.map((data) => {
            return (
              <MediaCard
                key={data.id}
                data={data}
                onCardClick={showMediaDetails}
              />
            );
          })}
        </div>
      )}

      {!showDetails && (
        <PageNav
          onPageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
