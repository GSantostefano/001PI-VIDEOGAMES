// import { useState } from 'react';
// import {Route,Routes} from "react-router-dom";

// import Home from "./views/home/home";
// import Detail from './views/detail/detail';
// import Create from './views/create/create';
// import Landing from './views/landing/landing';
// import Card from './components/card/card';
// import Cards from './components/cards/cards';

// function App() {
  
//   return (
    
//       <div>
//       <Routes>
//       <Route path="/" element={ <Landing /> } />      
//       <Route exact path="/home" element={<Home/>}/>
//       <Route path="/detail/:id" element={<Detail/>}/>
//       <Route path="/create" element={<Create/>}/>
//       </Routes>
//       </div>
//   )
// }

// export default App

import LandingPage from "./components/LandingPage"
import Detail from "./components/detail/Detail"
import Cards from "./components/cards/cards"
// import CreateVideogameForm from "./components/CreateVideogameForm"
import NavBar from "./components/NavBar"
import About from "./components/About"
import RefreshRedirect from './components/RefreshRedirect';

import {Routes, Route, useLocation, useNavigate } from "react-router-dom"

import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { addVideogames } from './redux/actions';
import axios from "axios"

export default function App() {
  
  const location = useLocation();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function goingHome() {
    navigate('/home')
  }

  useEffect(() => {
    dispatch(addVideogames()) 
  }, [])

  useEffect(() => {
    (async function inEffect() {
      try {
        await axios.get('http://localhost:3001/genres')
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  


  return (
    <div className="App">
      {/* {(location.pathname !== "/") && <NavBar />} */}
      <RefreshRedirect />
      <Routes>
        {/* <Route path="/" element={<LandingPage goingHome={goingHome} />}/> */}
        <Route path="/home" element={<Cards  />} />
        {/* <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<CreateVideogameForm />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  );
}


