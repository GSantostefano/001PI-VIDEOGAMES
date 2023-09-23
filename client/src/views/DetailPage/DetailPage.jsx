import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVideogamesId } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import style from "./DetailPage.module.css";
import Loading from "../../components/Loading/Loading";


const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const videogame = useSelector((state) => state.id);
  
  // Loading... state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getVideogamesId(id))
      .then(() => {
        setLoading(false); // Cuando la carga se completa, establece loading en false
      });
  }, [dispatch, id]);

  // Renderiza el componente Loading mientras se carga la información
  if (loading) {
    return <Loading />;
  }


  return (
    <div className={style.body}>
      <div className={style.container}>
        <div className={style.blackText}>Name: <span className={style.whiteText}>{videogame.name}</span></div>
        
        <img 
          className={style.image}
          src={videogame.background_image}
          alt={videogame.nombre}
        />
        
        <div className={style.blackText}>Released: <span className={style.whiteText}>{videogame.released}</span></div>
  
        {/* Mapea las plataformas y muéstralas */}
        <div className={style.blackText}>Platforms: <span className={style.whiteText}>{videogame.platforms.map(platform => platform.platform.name).join(', ')}</span></div>
        
        <div className={style.blackText}>Rating: <span className={style.whiteText}>{videogame.rating}</span></div>
        <div className={style.blackText}>Website: <span className={style.whiteText}>{videogame.website}</span></div>
        <div className={style.description} dangerouslySetInnerHTML={{ __html: videogame.description }}></div>
        
        <div className={style.blackText}><span className={style.whiteText}>{videogame.gender}</span></div>
      </div>
  
      <div>
        <Link to="/home"><button className={style.goback}>VOLVER</button></Link>
      </div>
    </div>
  );
  
};

export default DetailPage;