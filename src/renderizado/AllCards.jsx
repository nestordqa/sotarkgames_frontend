import FinalNavBar from '../components/FinalNavBar.jsx'
import Cards from '../components/Cards/Cards.jsx'
import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getAllVideogames} from "../redux/actions/index.js";
import Pagination from '../components/Pagination/Pagination.jsx';

export default function AllCards(){
    //Declaro un state por la página que debe renderizarse
    const [currentPage, setCurrentPage]=useState(1);
    //Declaro un state que me indique cuántas cards deben renderizarse por página.
    const[postPerPage, setPostPerPage] = useState(15);

    //Paso toda la data necesaria por props al componente cards, de tal manera desde éste componente
    //puedo hacer slice al arr que contiene todos los videojuegos y hacer la paginación.
    let stateVideogames = useSelector(state=>state.videogames); //Traigo el State que necesito de la store
    const dispatch = useDispatch(); //Creo el dispatch
    useEffect(()=>{
        dispatch(getAllVideogames()); //Hago el dispatch de la Action importada
    }, [dispatch]);
    console.log(stateVideogames);

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPost = stateVideogames.slice(firstPostIndex, lastPostIndex);
    return(
        <div>
            <FinalNavBar/>
            <Pagination totalPost = {stateVideogames.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage}/>
            <Cards videogamesData={currentPost}/>
            
        </div>
    )
}