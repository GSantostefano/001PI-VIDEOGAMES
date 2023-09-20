
import "./home.styles.css";

import Navbar from "../../components/navbar/navbar.component";
import Cards from "../../components/cards/cards.component";


function Home() {
  
  return (
    
      <div className='Container'>
      <p>estas en la HomePage</p>
      <Navbar/>
      <Cards/>
      </div>
        
  )
}

export default Home;
