
import style from "./navbar.module.css";

function Navbar() {
  
  return (
    
      <div className={style.Container}>
      <p>estas en la NavbarPage</p>
      <form>
        <input placeholder="Busqueda"/>
        <button>buscar</button>
      </form>
      </div>
     
    
  )
}

export default Navbar;