
import style from "./home.module.css";

import Navbar from "../../components/navbar/navbar.component";
import Cards from "../../components/cards/cards.component";

function Home() {
  
  return (
    
      <div className={style.Container}>
      
      <Navbar/>
      <h2>Home</h2>
      <Cards/>
      </div>
        
  )
}

export default Home;
