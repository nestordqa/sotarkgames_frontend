import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoadingModule from '../components/LoadingModule/LoadingModule';
import { clearVideogameDetails } from '../redux/actions';
import './Descripcion.css';


export default function Descripcion(){
    let description = useSelector(state=>state.descriptions);

    // var plataformas =description.Plataformas.map(item=>" "+item);
    // var generosMap = description.Generos.map(item=>" "+item);

const dispatch = useDispatch();
const handleClickClear = (e)=>{
    e.preventDefault();
    dispatch(clearVideogameDetails());
    console.log("Description limpia", description)
}

    console.log(description);
    console.log(description.Nombre);
    return(
        <div className = "descriptionContainer">
            {!Array.isArray(description) ? (
                <div>
            <div className="volver" onClick={handleClickClear}>
                <NavLink to="/home">
                    <button >Back</button>
                </NavLink>
                
            </div>
            <div className="containerNombre">
                <h1>{description.Nombre}</h1>
            </div>
            <div className="containerImg">
                <img src={description.Img_URL} alt={description.Nombre} className="imgGame"/>
            </div>
            <div className="containerFecha">
                <h2>Release date: {description.Fecha_lanzamiento}</h2>
            </div>
            <div className="containerRating">
                <h2>Rating: {description.Rating}/5</h2>
            </div>
            <div className="containerPlataformas">
                <h2>Platforms: {description.Plataformas.map(item=>" "+item)}</h2>
            </div>
            <div className="containerGeneros">
                <h2>Genres: {description.Generos.map(item=>" "+item)}</h2>
            </div>
            <div className="containerDescripcion">
                <textarea>
                    {description.Descripcion}
                </textarea>
            </div>
                </div>
            ) : (<LoadingModule/>)}

        </div>
    )
}