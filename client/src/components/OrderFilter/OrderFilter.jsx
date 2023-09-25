import style from "./OrderFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterVideogame,orderVideogames,filterByGenres,filterByRating } from "../../redux/actions/actions";
import { useState } from "react";
import { getGenres } from "../../redux/actions/actions";
import { useEffect } from "react";

const OrderFilter = () => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);
  // const [selectedGenre, setSelectedGenre] = useState(false);
  // const genres = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleFilter = (event) => {
    dispatch(filterVideogame(event.target.value));
  };

  function handleGenres(event) {
    dispatch(filterByGenres(event.target.value));
  }
  function handleSelectChange(event) {
    if (event.target.value === "ASC" || event.target.value === "DES") {
      dispatch(filterByRating(event.target.value));
    } else {
      dispatch(orderVideogames(event.target.value));
      setAux(!aux);
    }
  }
  return (
    <div className={style.container}>
    <p className={style.orden}>Ordenar y Filtrar:</p>
    <div  className={style.orden}>
        <div >
          <select onChange={handleSelectChange} className={style.option}>
            <option value="AscendingAZ">Ascendente A-Z</option>
            <option value="DescendingZA">Descendente Z-A</option>
            <option value="ASC">Rating lowest</option>
            <option value="DES">Rating best</option>
          </select>
        </div>

        </div>
        <div>

      <select
        name="genero"
        onChange={handleGenres}
        defaultValue=""
        className={style.option} // Agregamos la misma clase aquí
      >
        <option value="Action">Action</option>
        <option value="Inide">Inide</option>
        <option value="Adventure">Adventure</option>
        <option value="RPG">RPG</option>
        <option value="Strategy">Strategy</option>
        <option value="Shooter">Shooter</option>
        <option value="Casual">Casual</option>
        <option value="Simulation">Simulation</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Arcade">Arcade</option>
        <option value="Platformer">Platformer</option>
        <option value="Massively Multiplayer">Massively Multiplayer</option>
        <option value="Racing">Racing</option>
        <option value="Sports">Sports</option>
        <option value="Fighting">Fighting</option>
        <option value="Board Games">Board Games</option>
        <option value="Educational">Educational</option>
      </select>
    </div>


    <div className={style.labels}>
      <label htmlFor="allVideogames" className={style.label}>
        {" "}
        ALL
        <input
          type="radio"
          name="filter"
          id="allVideogames"
          value="All Videogames"
          onChange={handleFilter}
        />
      </label>


      <label htmlFor="api" className={style.label}>
        {" "}
        <span className={style.radio}>API</span>
        <input
          type="radio"
          name="filter"
          id="api"
          value="Api"
          onChange={handleFilter}
        />
      </label>
      <label for="red" htmlFor="baseDeDatos" className={style.label}>
        {" "}
        DB
        <input
          type="radio"
          name="filter"
          id="baseDeDatos"
          value="BD"
          onChange={handleFilter}
        />
      </label >
    </div>
  
    
  </div>
  
  );
};

export default OrderFilter;
