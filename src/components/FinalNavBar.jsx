import React from "react";
import Filtros from "./Navbar/Filtros";
import NavBar from "./Navbar/NavBar";
import './FinalNavBar.css';

export default function FinalNavBar(){
    return(
        <div className="containerFinal">
            <NavBar></NavBar>
            <Filtros></Filtros>

        </div>
    )
}