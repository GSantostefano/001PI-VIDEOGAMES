import React from "react";
import style from "./PageIndex.module.css";


const PageIndex = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={style.container}>

      {pageNumbers.map((page) => (
        <div
          key={page}
          className={`${style["pageNumber"]} ${currentPage === page ? style.active : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default PageIndex;
