
import style from "./HomePage.module.css";

import Navbar from "../../components/Nav/Nav";
import Cards from "../../components/cards/Cards";

function Home() {
  
  return (
    
      <div className={style.Container}>
      
      <h2>Home</h2>
      <Cards/>
      </div>
        
  )
}

export default Home;
