import axios from "axios";

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_VIDEOGAME_DETAILS = "GET_VIDEOGAME_DETAILS";
export const CLEAR_VIDEOGAME_DETAILS = "CLEAR_VIDEOGAMES_DETAILS";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const DELETE_VIDEOGAME = "DELETE_VIDEOGAME";
export const GET_GENRES = "GET_GENRES";
export const GET_VIDEOGAMES_BY_GENRE = "GET_VIDEOGAMES_BY_GENRE";
export const SEARCH_VIDEOGAMES = "SEARCH_VIDEOGAMES";
export const ALPHABETICAL_SORT = "ALPHABETICAL_SORT";
export const RATING_SORT = "RATING_SORT";
export const FIND_CREATED = "FIND_CREATED";


//Action para traer todos los videojuegos.
export const getAllVideogames= ()=>{
        return async(dispatch)=>{
            const response = await axios.get('http://localhost:3001/videogames');
            const data = response.data;
            dispatch({type: GET_ALL_VIDEOGAMES, payload: data});
                };
};

//Action para traer la descripcion de un juego en específico.
export const getVideogameDetails=(id)=>{
    return async(dispatch)=>{
        const response= await axios.get(`http://localhost:3001/videogames/${id}`);
        const data= response.data;
        dispatch({type: GET_VIDEOGAME_DETAILS, payload:data})
    }
};
export const clearVideogameDetails=()=>{
    return async(dispatch)=>{

        dispatch({type: CLEAR_VIDEOGAME_DETAILS})
    }
};
//Action para traer la lista de géneros.
export const getGenres=()=>{
    return async(dispatch)=>{
        const response1= await axios.get(`http://localhost:3001/genres`);
        const data1= response1.data;
        dispatch({type: GET_GENRES, payload:data1})
    };
};

//Action para traer un filtrado de videojuegos por género pasado por params.
export const getVideogamesByGenre=(genero)=>{
    return async(dispatch)=>{
        const response= await axios.get(`http://localhost:3001/genres/${genero}`);
        const data= response.data;
        dispatch({type: GET_VIDEOGAMES_BY_GENRE, payload:data})
    }
};

//Action para traer un filtrado de videojuegos por palabra ingresada por query.
export const searchVideogames= (name)=>{

    return async(dispatch)=>{
        try{
            const response = await axios.get(`http://localhost:3001/videogames?name=${name}`);
            const data = response.data;
            dispatch({type: SEARCH_VIDEOGAMES, payload: data});
        }catch(err){
            console.log(err.message);
        }
        };
};

//Action para realizar el sort de manera ascendente o descendente por el alfabeto.
export const alphabeticalSort = (value)=>{
    return async(dispatch)=>{
        try{
            const response = await axios.get('http://localhost:3001/videogames');
            const data = response.data;
            if(value == "AtoZ"){
                data.sort((game1, game2)=>{
                    if(game1.Nombre < game2.Nombre){
                        return -1;
                    }else if(game1.Nombre > game2.Nombre){
                        return 1;
                    }else{
                        return 0;
                    }            
                }) 
                dispatch({type: ALPHABETICAL_SORT, payload: data});              
            }else if(value == "ZtoA"){
                data.sort((game1, game2)=>{
                    if(game1.Nombre < game2.Nombre){
                        return 1;
                    }else if(game1.Nombre > game2.Nombre){
                        return -1;
                    }else{
                        return 0;
                    }            
                })
                dispatch({type: ALPHABETICAL_SORT, payload: data});
            }
        }catch(err){
            console.log(err);
        }
    }
}

//Action para aplicar un sort de mayor a menor rating a todos los videjuegos.
export const ratingSort = (value)=>{
    return async(dispatch)=>{
        try{
            const response = await axios.get('http://localhost:3001/videogames');
            const data = response.data;
            if(value == "Better"){
                data.sort((game1, game2)=>{
                    if(game1.Rating < game2.Rating){
                        return 1;
                    }else if(game1.Rating > game2.Rating){
                        return -1;
                    }else{
                        return 0;
                    }            
                }) 
                dispatch({type: RATING_SORT, payload: data});              
            }else if(value == "Lower"){
                data.sort((game1, game2)=>{
                    if(game1.Rating < game2.Rating){
                        return -1;
                    }else if(game1.Rating > game2.Rating){
                        return 1;
                    }else{
                        return 0;
                    }            
                })
                dispatch({type: RATING_SORT, payload: data});
            }
        }catch(err){
            console.log(err);
        }
    }
}

//Action para crear un videojuego.
export const createVideogame = (obj)=>{
    return async(dispatch)=>{
        try{
            await axios.post(`http://localhost:3001/videogames`, obj);
            await dispatch({type: CREATE_VIDEOGAME, payload: obj});
        }catch(err){
            console.log(err.message)
        }
    }
};

//Action para filtrar por creados y no creados
export const findCreated = ()=>{
    return async(dispatch)=>{
        try{
            await dispatch({type: FIND_CREATED})
        }catch(err){
            console.log(err.message)
        }
    }
}

