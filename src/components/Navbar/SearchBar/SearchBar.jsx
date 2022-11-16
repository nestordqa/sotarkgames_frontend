import React from "react";
import './SearchBar.css';
import { NavLink } from "react-router-dom";



export default function SearchBar(){
            
        return (
            <div className="searchBar">
                <div><input name="buscador"type="text" placeholder="Videojuego..." className="buscador"></input></div>
                <div><button className="botonBuscador">Buscar</button></div>                
            </div>
        );
      

};