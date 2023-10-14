import React from "react";
import "../Styles/Header.css";
import { fetchData } from "./apiCalls";

const Header = ({
  handlePageChange,
  handleMediaData,
  handleSectionChange,
  handleCategoryChange,
}) => {
  const handleNavClick = async (e) => {
    e.preventDefault();

    const section = e.target.dataset.section;
    const category = e.target.getAttribute("href").slice(1);

    const data = await fetchData(section, category, 1);
    handleMediaData(data.results);
    handlePageChange(1);
    handleSectionChange(section);
    handleCategoryChange(category);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <h1 className="header-logo-title">MOVIE APP</h1>
      </div>

      <nav className="header-nav">
        <input type="checkbox" className="nav-check" id="nav-check" />
        <label htmlFor="nav-check" className="nav-toggle">
          <i className="fa-solid fa-bars"></i>
        </label>

        <div className="nav-search-container">
          <ul className="nav-list">
            <li className="nav-item">
              Películas
              <ul className="nav-sublist">
                <li className="nav-subitem">
                  <a
                    className="nav-sublink"
                    href="#now_playing"
                    data-section="movie"
                    onClick={handleNavClick}
                  >
                    En cartelera
                  </a>
                </li>
                <li className="nav-subitem">
                  <a
                    className="nav-sublink"
                    href="#upcoming"
                    data-section="movie"
                    onClick={handleNavClick}
                  >
                    Próximamente
                  </a>
                </li>
                <li className="nav-subitem">
                  <a
                    className="nav-sublink"
                    href="#popular"
                    data-section="movie"
                    onClick={handleNavClick}
                  >
                    Popular
                  </a>
                </li>
                <li className="nav-subitem">
                  <a
                    className="nav-sublink"
                    href="#top_rated"
                    data-section="movie"
                    onClick={handleNavClick}
                  >
                    Mejor valoradas
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              Series
              <ul className="nav-sublist">
                <li className="nav-subitem">
                  <a
                    className="nav-sublink"
                    href="#on_the_air"
                    data-section="tv"
                    onClick={handleNavClick}
                  >
                    En emisión
                  </a>
                </li>
                <li className="nav-subitem">
                  <a
                    className="nav-sublink"
                    href="#popular"
                    data-section="tv"
                    onClick={handleNavClick}
                  >
                    Populares
                  </a>
                </li>
                <li className="nav-subitem">
                  <a
                    className="nav-sublink"
                    href="#top_rated"
                    data-section="tv"
                    onClick={handleNavClick}
                  >
                    Mejor valoradas
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="nav-search">
            <input
              type="text"
              className="nav-search-input"
              placeholder="Buscar..."
            />
            <button className="nav-search-button">
              <i className="fa-solid fa-search"></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
