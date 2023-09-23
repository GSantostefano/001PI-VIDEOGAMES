import { useState } from 'react';
import {Route,Routes, useLocation} from "react-router-dom";
import  "./App.css";
import Home from "./views/HomePage/HomePage";
import Detail from './views/DetailPage/DetailPage';
import Create from './views/CreatePage/CreatePage';
import Landing from './views/LandingPage/LandingPage';
import Nav from "./components/Nav/Nav";

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/'; 
  return (
    
      <div className="App">
      {!isHome && <Nav />}
      <Routes>
      <Route path="/" element={ <Landing /> } />      
      <Route exact path="/home" element={<Home/>}/>
      <Route path="/id/:id" element={<Detail/>}/>
      <Route path="/create" element={<Create/>}/>
      </Routes>
      </div>
  )
}

export default App
