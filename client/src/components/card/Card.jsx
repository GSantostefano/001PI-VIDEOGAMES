import style from "./Card.module.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions/actions";
import Loading from "../Loading/Loading"; // Importa el componente Loading

const Card = ({ videogames }) => {
  const allVideogames = useSelector((state) => state.videogames);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Agrega el estado loading

  useEffect(() => {
    if (allVideogames.length === 0) {
      dispatch(getVideogames())
        .then(() => {
          setLoading(false); // Cuando la carga se completa, establece loading en false
        });
    } else {
      setLoading(false); // Si ya hay datos en el estado, establece loading en false
    }
  }, [dispatch, allVideogames.length]);

  if (loading) {
    return <Loading />; // Muestra el componente Loading mientras se carga
  }

  return (
    <div className={style.grid}>
      {videogames.map((videogame) => (
        <div className={style.card} key={videogame.id}>
          <Link to={`/id/${videogame.id}`}>
            <img
              className={style.image}
              src={videogame.background_image}
              alt={videogame.name}
            />
          </Link>
          <h3 className={style.name}>{videogame.name}</h3>
          <p className={style.id}>ID: {videogame.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
