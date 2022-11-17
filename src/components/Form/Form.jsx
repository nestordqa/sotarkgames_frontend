import React from "react";
import './Form.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createVideogame } from "../../redux/actions";

export default function Form(){  

        //Creo un estado local que será un objeto, el cual será pasado directamente al back a través 
        //Del reducer, action y route correspondiente.
        const [videogames, setVideogames] = useState({
                
                Nombre: "",
                Descripcion: "",
                Fecha_lanzamiento: "",
                Rating: "",
                Plataformas: [],
                Img_URL: "",
                Generos: []
        });

        //Creo un estado local que de inicio será un objeto vacío, de existir errores, se irán almacenando acá con la function VALIDATE
        const [errores, setErrores]=useState({});       
        
        const [botonErr, setBotonErr] = useState(true);

        //Function para validar errores
        //Crea un objeto a partir de los errores captados en el state videogames (objeto);
function validate(obj){
                let error={}; //Objeto en que se almacenarán los errores.
                //Valida que exista el nombre
                if(obj.Nombre.length <= 1 || typeof obj.Nombre !== "string") error.Nombre = "Debes ingresar un nombre para tu videojuego";
                //Valida que exista la descripcion
                if(obj.Descripcion.length <=1 || typeof obj.Nombre !== "string") error.Descripcion = "Debes ingresar una descripción";
                //Valida que exista la URL para la imagen del juego a crear
                if(obj.Img_URL.length <=1 || typeof obj.Img_URL !== "string") error.Img_URL = "Debes ingresar una URL para tu imagen";
                //Valida que se haya ingresado al menos una plataforma
                if(obj.Plataformas.length <1) error.Plataformas = "Debes ingresar al menos una plataforma";
                //Valida que exista un arreglo con al menos un género
                if(obj.Generos.length <1) error.Generos = "Debes ingresar al menos un género";
                //Valida que el rating ingresado sea menor o igual a cinco, y mayor o igual a 1
                if(obj.Rating > 5) error.Rating = "El Rating debe ser igual o menor a 5";
                if(obj.Rating < 1) error.Rating = "El Rating debe ser igual o mayor a 1";
                
                
                return error;
        }

const dispatch = useDispatch(); //Creo el dispatch

function handleChange(e){
        setErrores(validate(videogames));
        Object.keys(errores).length === 0 ? setBotonErr(false):setBotonErr(true);
        setVideogames({
                ...videogames, //Pushea al obj solo lo que se indique segun sea el input
                [e.target.name]:e.target.value
        });
       

}
function handleSubmit(e){
        e.preventDefault();          
        dispatch(createVideogame(videogames));
        setVideogames({
                
                Nombre: "",
                Descripcion: "",
                Fecha_lanzamiento: "",
                Rating: "",
                Plataformas: [],
                Img_URL: "",
                Generos: []
        });
        alert("Videojuego creado exitósamente");           

}
const genres = useSelector(state=>state.genres);
        
function handleClickGenre(e){
        e.preventDefault();
        setVideogames({
                ...videogames, Generos:[...new Set([...videogames.Generos, e.target.value])] //Creo un set en el cual se eliminarán valores repetidos, y el resultado del mismo lo encierro en un arreglo.
                }
        )
        console.log(videogames);
};
function handleClickPlatform(e){
        e.preventDefault();
        setVideogames({
                ...videogames, Plataformas:[...new Set([...videogames.Plataformas, e.target.value])] //Creo un set en el cual se eliminarán valores repetidos, y el resultado del mismo lo encierro en un arreglo.
                }
        )
        console.log(videogames);
}


return(

        <div>
                <form onSubmit={(e)=>handleSubmit(e)}>
                        <div className="superContainer">
                        <div className="containerForm">
                                <div className="descriptionForm">
                                        <h2>¡Create your Videogame!</h2>
                                        <h3>Instructions:</h3>
                                        <p>-Input the videogame name.</p>
                                        <p>-Input the videogame description.</p>
                                        <p>-Input at least one platform.</p>
                                        <p>-Input at least one genre.</p>
                                        <p>-Input an URL of a image about your videogame.</p>
                                        <p>-Press "Create" button.</p>
                                        <h3>And most importanly: ¡HAVE FUN!</h3>
                                </div>

                                <div className="formChild">
                                <label htmlFor="Nombre">Videogame name:</label><input type="text" name="Nombre" placeholder="Input here videogame name..." onChange={(e)=>handleChange(e)} value={videogames.Nombre}></input>
                                {errores.Nombre ? <h5>{errores.Nombre}</h5>:false}
                                </div>

                                <div className="formChild">                             
                                        <select onChange={(e)=>handleClickGenre(e)} name="Selector" className="genreSelector">
                                                <option value="">Select genres...</option>      
                                                {genres.map((genero, index)=>{
                                                return(<option value={genero.Nombre} key={index}>{genero.Nombre}</option>
                                                )
                                                })}                    
                                        </select>
                                        {errores.Generos ? <h5>{errores.Generos}</h5>:false}                             
                                </div>

                                <div className="formChild">
                                        <select onChange={(e)=>handleClickPlatform(e)} name="Plataformas" className="genreSelector">
                                                <option value="">Select platforms...</option>
                                                <option value="PC">PC</option>
                                                <option value="Playstation">Playstation</option>
                                                <option value="Xbox">Xbox</option>
                                                <option value="Nintendo">Nintendo</option>
                                                <option value="Mcintosh">Mcintosh</option>
                                        </select>
                                        {errores.Plataformas ? <h5>{errores.Plataformas}</h5>:false}
                                </div>                             

                                <div className="formChild">
                                <label htmlFor="Fecha_lanzamiento">Release date:</label><input type="date" name="Fecha_lanzamiento" placeholder="Fecha de lanzamiento..." onChange={(e)=>handleChange(e)} value={videogames.Fecha_lanzamiento}></input>
                                </div>

                                <div className="formChild">
                                <label htmlFor="Rating">Rating:</label><input type="number" name="Rating" placeholder="Rating..." onChange={(e)=>handleChange(e)} value={videogames.Rating}></input>
                                {errores.Rating ? <h5>{errores.Rating}</h5>:false}
                                </div>

                                <div className="formChild">
                                <label htmlFor="Img_URL">Image:</label><input type="text" name="Img_URL" placeholder="Input here videogame URL image..." onChange={(e)=>handleChange(e)} value={videogames.Img_URL}></input>
                                {errores.Img_URL ? <h5>{errores.Img_URL}</h5>:false}
                                </div>

                                <div className="formChild">
                                <label htmlFor="Descripcion">Description:</label><input type="text" name="Descripcion" placeholder="Input here videogame description..." onChange={(e)=>handleChange(e)} value={videogames.Descripcion}></input>
                                {errores.Descripcion ? <h5>{errores.Descripcion}</h5>:false}
                                </div>

                                <div className="divButton">
                                <button type="submit"
                                disabled={botonErr}>CREATE</button>
                                </div>
                        </div>
                        </div>

                </form> 
   
        </div>
)     
};