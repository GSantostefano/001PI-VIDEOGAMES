
import style from "./Card.module.css";

import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getVideogames } from "../../redux/actions/actions";



const Card = ({ videogames }) => {

  const allVideogames = useSelector((state) => state.videogames);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allVideogames.length === 0) {
      dispatch(getVideogames());
    }
  }, [dispatch, allVideogames.length]);

  return (
    <div className={style.container}>
      
      <div className={style.grid}>

        {videogames.map((videogames) => (
          <div  className={style.card} key={videogames.name}>

            <h3>{videogames.name}</h3>
            
            <Link to={`/detail/${videogames.ID}`}>
              <img
                className={style.image}
                src={videogames.background_image}
                alt={videogames.name}
              />
            </Link>

            <h3 className={style.id}>{videogames.id}</h3>

          </div>
        ))}
    </div>

    </div>
  );
};

export default Card;
