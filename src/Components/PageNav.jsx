import React, { useEffect } from "react";
import "../Styles/PageNav.css";

const PageNav = ({ onPageChange, currentPage, totalPages }) => {
  // Funciones para cambiar de página
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Función para generar los números de paginación
  const generatePageNumbers = () => {
    const pageNumbers = [];

    if (currentPage > 1) {
      pageNumbers.push(currentPage - 1);
    }

    pageNumbers.push(currentPage);

    if (currentPage < totalPages) {
      pageNumbers.push(currentPage + 1);
    }

    return pageNumbers;
  };

  // Función para cambiar de página al hacer click en un número de página
  const handlePageNumberClick = (event) => {
    const pageNumber = Number(event.target.textContent);
    onPageChange(pageNumber);
  };

  // Scroll to top al cambiar de página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="page-nav">
      <button className="page-nav-btn" onClick={handlePrevPage}>
        <i className="fa-solid fa-angle-left"></i>
        <span>Prev</span>
      </button>

      {/* Mapear y mostrar los números de página */}
      {generatePageNumbers().map((pageNumber) => (
        <button
          key={pageNumber}
          className={
            pageNumber === currentPage ? "current-page" : "page-number"
          }
          onClick={handlePageNumberClick}
        >
          {pageNumber}
        </button>
      ))}

      <button className="page-nav-btn" onClick={handleNextPage}>
        <span>Next</span>
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

export default PageNav;
