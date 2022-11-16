import React from "react";
import { getVideogameDetails } from "../../redux/actions";
import './Card.css';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Card(props){  
        var plataformas = props.Plataformas.map(item=>" "+item);
        var generosMap = props.genre.map(item=>" "+item);


        let description = useSelector(state=>state.descriptions); //Traigo el State que necesito de la store
        const dispatch = useDispatch(); //Creo el dispatch
        let handleClickDetails = (e)=>{
                e.preventDefault();
                dispatch(getVideogameDetails(props.Id))
                console.log("DESCRIPCION DEL VIDEOJUEGO",description); //Verifico que me traiga la description
              };



        return(
                <div className="contenedor" key = {props.Id}>
                        <div className="flip-card-container">
                                <div className="flip-card">
                                        <div className="card-front">
                                                <figure>
                                                        <div className="img-bg"></div>
                                                        <img src={props.Img_URL} alt={props.Nombre}/>
                                                        <figcaption>{props.Nombre}</figcaption>
                                                </figure>

                                                <ul>
                                                        <li>Released: {props.Fecha_lanzamiento}</li>
                                                        <li>Rating: {props.Rating}/5</li>
                                                        <li>Platforms: {plataformas}</li>
                                                        <li>Genres: {generosMap}</li>
                                                        
                                                </ul>
                                        </div>

                                        <div className="card-back">
                                                <figure>
                                                        <div className="img-bg"></div>
                                                        <img src={props.Img_URL} alt={props.Nombre}/>
                                                </figure>
                                                <div onClick={(e)=>handleClickDetails(e)}>
                                                      <NavLink to="/descripcion" ><button>Description</button></NavLink>  
                                                </div>
                                                

                                        </div>

                                </div>
                        </div>
                </div>
        )    

};