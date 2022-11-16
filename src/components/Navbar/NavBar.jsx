import React from "react";
import './NavBar.css';
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function NavBar(){
    
        const [click, setClick] = useState(false); //Seteo States para chequear cuando se haga click      
        const handleClick = () => setClick(!click); //Evalua cuando se clickea, si esto ocurre cambia el valor de click a false o true.
        const Close = () => setClick(false); ////Cambia el State directamente a false
      
        return (
          <div className="containerSuper">
            <div className="containerMenu">
           <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
              <div className="nav-container">
                <div className="logoContainer">
                <NavLink exact to="/home" className="nav-logo">
                  Sotark Games.
                </NavLink>
                </div>
                <div className={click ? "nav-menu1 active" : "nav-menu1"}>
                  <div className="nav-item">
                    <NavLink
                      exact
                      to="/home"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      Home
                    </NavLink>
                  </div>

                  <div className="nav-item">
                    <NavLink
                      exact
                      to="/createVideogame"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      Create your Videogame!
                    </NavLink>
                  </div>

                </div>
                </div>
              
            </nav>
          </ div>
          </div>
        );
      

};