import { useSelector, useDispatch } from "react-redux";
import PageIndex from "../PageIndex/PageIndex";
import Card from "../card/Card";
import { useEffect, useState } from "react";
import { getVideogames } from "../../redux/actions/actions";
import style from "./Cards.module.css";

const Cards = () => {
  const videogames = useSelector((state) => state.videogames);
  const dispatch = useDispatch();
  const [actualPage, setActualPage] = useState(1);
  const videogamesPerPage = 15;

  useEffect(() => {
    if (videogames.length === 0) {
      dispatch(getVideogames());
    }
  }, [dispatch, videogames.length]);

  const indexOfLastVideogame = actualPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = videogames.slice(indexOfFirstVideogame, indexOfLastVideogame);

  const paginate = (pageNumber) => {
    setActualPage(pageNumber);
  };

  const startPage = (actualPage - 1) * videogamesPerPage;
  const endPage = startPage + videogamesPerPage;
  const currentVideogamesForPagination = videogames.slice(startPage, endPage);

  const PreviousPage = () => {
    if (actualPage > 1) {
      setActualPage(actualPage - 1);
    }
  };

  const NextPage = () => {
    const totalPages = Math.ceil(videogames.length / videogamesPerPage);
    if (actualPage < totalPages) {
      setActualPage(actualPage + 1);
    }
  };

  return (
    <div>
      <div >
      {/* Componente Paginacón TOP */}
      <PageIndex
        totalPages={Math.ceil(videogames.length / videogamesPerPage)}
        currentPage={actualPage}
        onPageChange={paginate}
      />
      </div>

      {/* Componente Pokemon con las CARDS y sus detalles */}
      <div >
      <Card videogames={currentVideogames} />
      </div>



      {/* Botones ANTERIOR y SIGUIENTE Paginación BOTTOM */}
      <div className={style.botones} >
        <button onClick={PreviousPage} disabled={actualPage === 1}>
          Anterior
        </button>

        <div className={style.pageNum}>{actualPage}</div>

        <button onClick={NextPage} disabled={endPage >= videogames.length}>
          Siguiente
        </button>
      </div>

    </div>
  );
};

export default Cards;
