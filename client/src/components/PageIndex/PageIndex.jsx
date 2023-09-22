import React from "react";
import style from "./PageIndex.module.css";
// import pokedex from "../../assets/pokedex_mod2.png"

const PageIndex = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={style.container}>
        {/* <img src={pokedex} alt="pokedex" className={style.pokedex} /> */}
      {pageNumbers.map((pageNumber) => (
        <div
          key={pageNumber}
          className={`page-number ${pageNumber === currentPage ? "active" : ""}`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </div>
      ))}
    </div>
  );
};

export default PageIndex;
