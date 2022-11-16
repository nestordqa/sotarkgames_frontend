
import {
  GET_ALL_VIDEOGAMES, 
  CREATE_VIDEOGAME, 
  GET_VIDEOGAME_DETAILS, 
  GET_GENRES,
  GET_VIDEOGAMES_BY_GENRE, 
  SEARCH_VIDEOGAMES, 
  ALPHABETICAL_SORT,
  RATING_SORT,
  FIND_CREATED,
  CLEAR_VIDEOGAME_DETAILS

} from "../actions/index.js";
const initialState = {
  videogames: [],
  genres: [],
  descriptions: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

      case GET_ALL_VIDEOGAMES:
        return{...state, videogames: action.payload}

      case GET_VIDEOGAME_DETAILS:
        return({...state, descriptions: action.payload})

      case CLEAR_VIDEOGAME_DETAILS:
        return({...state, descriptions: initialState.descriptions})

      case GET_GENRES:
        return({...state, genres: action.payload});

      case GET_VIDEOGAMES_BY_GENRE:
        return({...state, videogames: action.payload})
        
      case SEARCH_VIDEOGAMES:
        return({...state, videogames: action.payload})  
      
      case CREATE_VIDEOGAME:
        return{...state, videogames: [...state.videogames, action.payload]}

      case ALPHABETICAL_SORT:
        return{...state, videogames: action.payload}

      case RATING_SORT:
        return{...state, videogames: action.payload}

      case FIND_CREATED:
        return{...state, videogames: state.videogames.filter(game=>game.Created==true)}

      default: return state;
      
  }
};

export default rootReducer;