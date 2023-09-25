import style from "./Card.module.css";
// Importa el componente Loading
import { Link } from "react-router-dom";


const Card = (props) => {
  
const {id, name,image} = props;
const noImage= "../../../public/detail.jpg";

 
  return (

  <div className={style.card} key={id}>

  <Link to={`/id/${id}`}>
    <div className={style.img}>

        {image?(<img
        className={style.image}
        src={image}
        alt={name}
      />):(<img
        className={style.image}
        src={noImage}
        alt={name}
      />)}


    </div>
  </Link>
  <h3 className={style.name}>{name}</h3>
  <p className={style.id}>ID: {id}</p>
  </div>
  );
};

export default Card;
