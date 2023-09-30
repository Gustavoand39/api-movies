import React from "react";
import "../Styles/Header.css";

function Header() {
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
                  <a className="nav-sublink" href="#_">
                    En cartelera
                  </a>
                </li>
                <li className="nav-subitem">
                  <a className="nav-sublink" href="#_">
                    Próximamente
                  </a>
                </li>
                <li className="nav-subitem">
                  <a className="nav-sublink" href="#_">
                    Popular
                  </a>
                </li>
                <li className="nav-subitem">
                  <a className="nav-sublink" href="#_">
                    Mejor valoradas
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                Series
                <ul className="nav-sublist">
                  <li className="nav-subitem">
                    <a className="nav-sublink" href="#_">
                      Populares
                    </a>
                  </li>
                  <li className="nav-subitem">
                    <a className="nav-sublink" href="#_">
                      Mejor valoradas
                    </a>
                  </li>
                </ul>
              </span>
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
}

export default Header;
