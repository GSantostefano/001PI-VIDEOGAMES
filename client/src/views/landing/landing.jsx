
import style from './landing.module.css';

function Landing() {
  
  return (
    <div className={style.background}>

      <div className={style.Container}>
      <h1>¡Henry Videogames!</h1>
      <h4>El sitio indicado para conocer la información</h4>
      <h4>Para próxima aventura gaming</h4>

      <button className={style.landingPageButton}>Click aqui para descubrirla</button>

      
      </div>

      <h6>proyecto impulsado por RAWG.io</h6>

     </div>
    
  )
}

export default Landing;
