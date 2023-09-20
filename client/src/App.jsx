import { useState } from 'react';
import './App.css';
import {Route,Routes} from "react-router-dom";

import Home from "./views/home/home.component";
import Detail from './views/detail/detail.component';
import Create from './views/create/create.component';
import Landing from './views/landing/landing';




function App() {
  
  return (
    
      <div className='App'>
      <Routes>
      <Route path="/" element={ <Landing /> } />
      <Route path="/home" element={<Home/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/create" element={<Create/>}/>
      </Routes>
      </div>
  )
}

export default App
