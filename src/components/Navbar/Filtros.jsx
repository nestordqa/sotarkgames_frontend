import React from "react";
import './Filtros.css';
import { useState } from "react";
import {useDispatch} from 'react-redux';
import {searchVideogames, getAllVideogames, alphabeticalSort, ratingSort, findCreated} from '../../redux/actions/index.js';
import GenreFilter from "../GenreFilter/GenreFilter";


export default function Filtros(){

  const [click, setClick] = useState(false); //Seteo States para chequear cuando se haga click      
  const handleClick = () => setClick(!click); //Evalua cuando se clickea, si esto ocurre cambia el valor de click a false o true.
  const Close = () => setClick(false); ////Cambia el State directamente a false

  //Declaro un estado local en el que podré almacenar lo ingresado por el input
  const [name, setName]=useState(""); 

  //Traigo el dispatch
  const dispatch = useDispatch();

  //Declaro una funcion que detecta el cambio en el input y setea en el state local lo ingresado.
  //Consologueo para comprobar que esté actualizando el state
  let handleChange = (e)=>{
    e.preventDefault();
    setName(e.target.value)
    };
  //Declaro una funcion que detecta cuando se haga click en el botón de buscar.
  //Si se hace click, ésta hace el dispatch correspondiente.
  let handleSubmit = (e)=>{
    e.preventDefault();
    if(!name){
      alert("Por favor ingresa un videojuego")
    }else{
      dispatch(searchVideogames(name));       
      setName("")
    }   
  };
  //Declaro funcion que se ejecute en botón para resetear los filtros
  let handleClickReset = (e)=>{
    e.preventDefault();
    dispatch(getAllVideogames())
  };
  //Declaro funcion que se ejecute en el SELECT/OPTION y ordene alfabéticamente la data
  let handleChangeAlphabetical = (e)=>{
    e.preventDefault();
    dispatch(alphabeticalSort(e.target.value));
    
    };
   //Declaro funcion que se ejecute en el SELECT/OPTION y ordene por rating la data 
  let handleChangeRating = (e)=>{
    e.preventDefault();
    dispatch(ratingSort(e.target.value));
    
    };
    //Declaro funcion que se traiga solo los videojuegos creados  
  let handleClickCreated = (e)=>{
    e.preventDefault();
    dispatch(findCreated());
  }


        return (
        <div className="containerFiltrado">
           <div className={click ? "main-container" : ""}   onClick={()=>Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
            <div>
                  <div className="searchBar">
                  <div className="containerInput"><input name="buscador"type="text" placeholder="Videogame..." className="buscador" value={name} onChange={(e)=>handleChange(e)}></input></div>
                  <div><div className="containerBtn"><button type="submit" className="botonFiltrado1" onClick={(e)=>handleSubmit(e)}>Search</button></div></div>  
                  <div><div className="containerBtn"><button type="submit" className="botonFiltrado1" onClick={(e)=>handleClickReset(e)}>Reset</button></div></div>                
                  <div className="containerBtn"><button type="submit" className="botonFiltrado1" onClick={handleClickCreated}>Creados</button></div>
                  </div>
                </div>
              <div className="nav-container">

                <div className={click ? "nav-menu2 active" : "nav-menu2"}>
                  <div className="nav-item2">
                    <GenreFilter/>                  
                  </div>

                  <div className="genreFilter">
                    <select name="selector" onChange={(e)=>handleChangeAlphabetical(e)} className="genreSelector">

                      <option value="" selected>Alphabetically sort...</option>
                      <option value="AtoZ">A-Z</option>
                      <option value="ZtoA">Z-A</option>
                    
                    </select>
                  </div>                  
                 
                  <div className="genreFilter">
                    <select name="selector" onChange={(e)=>handleChangeRating(e)} className="genreSelector">

                      <option value="" selected>Rating sort...</option>
                      <option value="Better">+Rating</option>
                      <option value="Lower">-Rating</option>
                    
                    </select>
                  </div>  

                </div>
              </div>
              <div className="nav-icon" onClick={handleClick}>
                  <span>Filters</span>
              </div>              
            </nav>
          </ div>
         
        );
      

};