import React from "react";
import "../Styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="sections">
        <h1 className="header-title">MOVIE APP</h1>
        <ul className="menu">
          <li className="menu-item">
            Películas
            <ul className="submenu">
              <li className="submenu-item">Más Populares</li>
              <li className="submenu-item">Recientes</li>
              <li className="submenu-item">Más Vistas</li>
            </ul>
          </li>
          <li className="menu-item">
            Series
            <ul className="submenu">
              <li className="submenu-item">Más Populares</li>
              <li className="submenu-item">Recientes</li>
              <li className="submenu-item">Más Vistas</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="navbar">
        <input className="input-navbar" type="text" placeholder="Buscar" />
        <button className="btn-navbar">Buscar</button>
      </div>
    </header>
  );
}

export default Header;
