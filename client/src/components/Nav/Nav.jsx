import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import OrderFilter from "../OrderFilter/OrderFilter";
import style from "./Nav.module.css";
const Nav = () => {
  

  // Verificar si la ruta actual es diferente de "/home"
  

  const {pathname} = useLocation();

  if (pathname !== '/home') {
  return (
    <div className={style.container}>
                  <div> <Link to="/home" style={{ textDecoration: "none" }}>
                    <p className={style.Home}>HOME</p>
                    </Link>
                  </div>
      </div>
     ); }
     else {
      return (
        <div>
        <div className={style.container}>
        <div className={style.content}>
          <div> <Link to="/home" style={{ textDecoration: "none" }}>
          <p className={style.Home}>HOME</p>
          </Link>
          </div>
          
              <div>
                      <SearchBar />
              </div>
              <div><Link  to="/form">
                        <button className={style.btnCrear}>
                          CREAR VIDEOGAME
                        </button>
                      </Link>
              </div>
              </div>
              </div>
              <div>
                      <OrderFilter />
              </div>  

              
        </div>
    
    );
  } ;
}
export default Nav;


