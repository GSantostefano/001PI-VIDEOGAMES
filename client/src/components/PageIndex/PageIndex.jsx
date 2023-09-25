import React from "react";
import style from "./PageIndex.module.css";


const PageIndex = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  // Imprime las propiedades en la consola
  console.log("totalPages:", totalPages);
  console.log("currentPage:", currentPage);
  console.log("onPageChange:", onPageChange);
  return (
    <div>
    <div className={style.content}>
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`${style.pageNumber} ${currentPage === page ? style.active : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  </div>
  );
};

export default PageIndex;
