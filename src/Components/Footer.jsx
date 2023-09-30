import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3 className="footer-title">Movie App</h3>
        <p className="footer-text">
          Este sitio web fue desarrollado con fines educativos y de
          aprendizaje.
        </p>
        <p className="footer-text">
          Este producto no está respaldado ni certificado por TMDB.
        </p>
      </div>

      <div className="footer-section">
        <h3 className="footer-title">TMDB</h3>
        <a
          className="footer-link"
          href="https://www.themoviedb.org/about"
          target="_blank"
          rel="noreferrer"
        >
          <span className="footer-link-text">Acerca de TMDB</span>
        </a>
        <a
          className="footer-link"
          href="https://www.themoviedb.org/terms-of-use"
          target="_blank"
          rel="noreferrer"
        >
          <span className="footer-link-text">Términos de uso</span>
        </a>
        <a
          className="footer-link"
          href="https://www.themoviedb.org/documentation/api/terms-of-use"
          target="_blank"
          rel="noreferrer"
        >
          <span className="footer-link-text">Términos de uso de la API</span>
        </a>
        <a
          className="footer-link"
          href="https://www.themoviedb.org/privacy-policy"
          target="_blank"
          rel="noreferrer"
        >
          <span className="footer-link-text">Política de privacidad</span>
        </a>
      </div>

      <div className="footer-section">
        <h3 className="footer-title">Contáctame</h3>
        <a
          className="footer-link"
          href="https://github.com/Gustavoand39"
          target="_blank"
          rel="noreferrer"
        >
          <span className="footer-link-text">Github</span>
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/gustavo-alonso-p-66776a286/"
        >
          <span className="footer-link-text">Linkedin</span>
        </a>
        <a
          className="footer-link"
          href="mailto:hola@hola.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="footer-link-text">Correo Electrónico</span>
        </a>
      </div>

      <div className="footer-section">
        <a href="#a">
          <button className="footer-button">Volver al inicio</button>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
