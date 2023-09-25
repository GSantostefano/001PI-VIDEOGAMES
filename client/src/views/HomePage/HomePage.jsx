
import style from "./HomePage.module.css";
import Cards from "../../components/cards/Cards";
//////////////////////////////////
import PageIndex from "../../components/PageIndex/PageIndex";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getVideogames } from "../../redux/actions/actions";
import Nav from "../../components/Nav/Nav";

///////////////////////////
function Home() {
  ///////////////////
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




////////////////////////

  return (
    <div >
      <div><Nav/></div>
    <div ><PageIndex
      totalPages={Math.ceil(videogames.length / videogamesPerPage)}
      currentPage={actualPage}
      onPageChange={paginate}/>
    </div>

      <div ><Cards videogames={currentVideogames}/></div>
      
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
  )
}

export default Home;
