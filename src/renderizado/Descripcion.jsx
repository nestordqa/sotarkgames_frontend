import react from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoadingModule from '../components/LoadingModule/LoadingModule';
import { clearVideogameDetails } from '../redux/actions';
import './Descripcion.css';
let obj={
    "Id": 5286,
    "Nombre": "Tomb Raider (2013)",
    "Descripcion": "<p>A cinematic revival of the series in its action third person form, Tomb Rider follows Lara in her least experience period of life – her youth. Heavily influenced by Naughty Dog’s “Uncharted”, the game is a mix of everything, from stealth and survival to combat and QTE action scenes.<br />\nYoung Lara Croft arrives on the Yamatai, lost island near Japan, as the leader of the expedition in search of the Yamatai Kingdom, with a diverse team of specialists. But shipwreck postponed the successful arrival and seemingly forgotten island is heavily populated with hostile inhabitants, cultists of Solarii Brotherhood.<br />\nThe game will be graphic at times, especially after failed QTE’s during some of the survival scenes, but overall players will enjoy classic action adventure, reminiscent of the beginning of the series. This game is not a direct sequel or continuation of existing sub-series within the franchise, but a reboot, setting up Tomb Raider to represent modern gaming experience.<br />\nThe game has RPG elements and has a world, which you can explore during the story campaign and after the completion. As well as multiplayer mode, where 2 teams (4 scavengers and 4 survivors) are clashing in 3 game modes while using weapons and environments from the single-player campaign.</p>",
    "Fecha_lanzamiento": "2013-03-05",
    "Rating": 4.06,
    "Plataformas": [
      "PC",
      "PlayStation",
      "Xbox",
      "Apple Macintosh"
    ],
    "Img_URL": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    "Generos": [
      "Action",
      "Adventure"
    ]
  }

export default function Descripcion(){
    let description = useSelector(state=>state.descriptions);
    if(Array.isArray(description.Plataformas)){
        var plataformas = description.Plataformas.map(item=>" "+item);
}else{
        var plataformas = description.Plataformas;
}

if(Array.isArray(description.genre)){
        var generosMap = description.Generos.map(item=>" "+item);
}else{
        var generosMap = description.Generos;
}
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
                <h2>Platforms: {plataformas}</h2>
            </div>
            <div className="containerGeneros">
                <h2>Genres: {generosMap}</h2>
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