import style from "./Cards.module.css";
import Card from "../card/Card";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions/actions";
import Loading from "../Loading/Loading"; 

const Cards = ({videogames}) => {
  console.log(videogames);
  const allVideogames = useSelector((state) => state.videogames);
  console.log(allVideogames);
  console.log(videogames);
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
         

          <Card className={style.card}
          // key={videogame.id}
          id={videogame.id}
          name={videogame.name}
          // background_image={videogame.background_image}
          image={videogame.image?videogame.image:videogame.background_image}
          />
        
        

      ))}
    </div>
  );
  
};

export default Cards;
