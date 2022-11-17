import React from "react";
import './GenreFilter.css';
import { getGenres, getVideogamesByGenre } from "../../redux/actions";
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';


      export default function GenreFilter() {
        
        let stateGenres = useSelector(state=>state.genres); //Traigo el State que necesito de la store
        const dispatch = useDispatch(); //Creo el dispatch
        useEffect(()=>{
                dispatch(getGenres()); //Hago el dispatch de la Action importada
        }, [dispatch]);
        console.log("GENEROS: ",stateGenres);
        
        let stateVideogames = useSelector(state=>state.videogames);
        let handleClickGenre=(e)=>{
                e.preventDefault();
                dispatch(getVideogamesByGenre(e.target.value))
                console.log("FILTRADO", stateVideogames, "FILTRADO")
        };     
        

              return(
                <div className="genreFilter">
                        
                        <select onChange={(e)=>handleClickGenre(e)} name="Selector" className="genreSelector">
                         <option value="all">Filter by genre...</option>       
                        {stateGenres.map((genero, index)=>{
                                return(<option value={genero.Nombre} key ={index}>{genero.Nombre}</option>
                                )
                        })}                    
                        </select>                        
                        
                </div>
              )
        

    }