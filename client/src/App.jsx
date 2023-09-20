import { useState } from 'react';
import {Route,Routes} from "react-router-dom";

import Home from "./views/home/home.component";
import Detail from './views/detail/detail.component';
import Create from './views/create/create.component';
import Landing from './views/landing/landing';
import Card from './components/card/card.component';
import Cards from './components/cards/cards.component';
function App() {
  
  return (
    
      <div>
      <Routes>
      <Route path="/" element={ <Landing /> } />      
      <Route exact path="/home" element={<Home/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/create" element={<Create/>}/>

      <Route path="/card" element={ <Card /> } />
      <Route path="/cards" element={ <Cards /> } />
      </Routes>
      </div>
  )
}

export default App
