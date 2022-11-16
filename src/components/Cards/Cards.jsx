import React from "react";
import Card from "../Card/Card.jsx";
import LoadingModule from '../LoadingModule/LoadingModule.jsx';
import './Cards.css';

export default function Cards({videogamesData}){

    return(
        <div className="cardsContainer">
            {videogamesData.length > 0 ? (videogamesData.map(game=>
                            <div key={game.Id} className="cards">                                  
                                <Card
                                Nombre={game.Nombre}
                                Fecha_lanzamiento={game.Fecha_lanzamiento}
                                Plataformas={game.Plataformas}
                                Img_URL={game.Img_URL}
                                genre={game.Generos}
                                Rating={game.Rating}
                                Id={game.Id}
                                
                                />                
                            </div>  )) : (<LoadingModule/>)} 
            
        </div>
    );
};