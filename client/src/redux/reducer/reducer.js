import {
    GET_VIDEOGAMES,
    GET_VIDEOGAME_NAME,
    GET_VIDEOGAMES_ID,
    GET_GENRES,
    POST_VIDEOGAMES,
    FILTER,
    ORDER,
    FILTER_BY_GENRES,
    PAGE,
    FILTER_RATING,
    /////////////////
    SET_CURRENT_PAGE,
    SET_VIDEOGAMES_PER_PAGE,
    //////////////////////
  } from "../actions/actions_types";
  
  const initialState = {
    videogames: [],
    id: [],
    genres: [],
    videogamesCopy: [],
    videogamesOrigin: [],
    plataforms:[],
    pageActual: 1,

    //////////////////
    currentPage: 1,
    videogamesPerPage: 15,
    ///////////////////
  };
  
  const rootReducer = (state = initialState, { type, payload }) => {

    switch (type) {
//////////////////////////////////

  case SET_CURRENT_PAGE:
    return { ...state, currentPage: payload };
  case SET_VIDEOGAMES_PER_PAGE:
    return { ...state, videogamesPerPage: payload };

//////////////////////////////

      case GET_VIDEOGAMES:
        return {
          ...state,
          videogames: payload,
          videogamesCopy: payload,
          videogamesOrigin: payload,
        };
      case GET_VIDEOGAME_NAME:
        state.videogamesCopy = payload;
        return {
          ...state,
          videogames: state.videogamesCopy,
          currentPage: 1,
        };
      case GET_VIDEOGAMES_ID:
        return {
          ...state,
          id: payload,
        };
      case GET_GENRES:
        return {
          ...state,
          genres: payload,
        };

      case FILTER_BY_GENRES:
          console.log("state.videogamesCopy", state.videogamesCopy);
          console.log("PAYLOAD", payload);
        
          // Filtra desde la API
          const filteredFromApi = state.videogamesCopy.filter((videogame) => {
            if (Array.isArray(videogame.genres)) {
              return videogame.genres.some((genre) => genre.name === payload);
            }
            return false;
          });
        
          // Filtra desde la base de datos
          const filteredFromDb = state.videogamesCopy.filter((videogame) => {
            if (Array.isArray(videogame.Genres)) {
              return videogame.Genres.some((genre) => genre.name === payload);
            }
            return false;
          });
        
          // Combina los resultados de ambas fuentes
          const filteredVideoGames = [...filteredFromApi, ...filteredFromDb];
        
          return {
            ...state,
            videogames: filteredVideoGames,
            currentPage: 1,
          };
    
      case POST_VIDEOGAMES:
        return {
          ...state,
        };
      
      case FILTER:
        
        if (payload === "Api") {
          const allVideogamesApi = state.videogamesCopy.filter(
            (videogame) => typeof videogame.id === "number"
          );
          
          return { ...state, videogames: allVideogamesApi,currentPage: 1, };
        }
        if (payload === "BD") {
          const allVideogamesBD = state.videogamesCopy.filter(
            (videogame) => typeof videogame.id === "string"
          );
          
          return { ...state, videogames: allVideogamesBD,currentPage: 1, };
        } else {
          return {
            ...state,
            videogames: state.videogamesCopy, 
            currentPage: 1,
          }};

      case ORDER:

        if (payload === "AscendingAZ" || payload === "DescendingZA") {
          const alphabetic = [...state.videogames];
          const alphabeticCopy = [...state.videogamesCopy];
          return {
            ...state,
            videogames:
              payload === "AscendingAZ"
                ? alphabetic.sort((a, b) => a.name.localeCompare(b.name))
                : alphabetic.sort((a, b) => b.name.localeCompare(a.name)),
                currentPage: 1,
            videogamesCopy:
              payload === "AscendingAZ"
                ? alphabeticCopy.sort((a, b) => a.name.localeCompare(b.name))
                : alphabeticCopy.sort((a, b) => b.name.localeCompare(a.name)),
                currentPage: 1,
          };
        }
        if (payload === "Id") {
          return {
            ...state,
            videogames: state.videogamesOrigin,
            videogamesCopy: state.videogamesOrigin,
            currentPage: 1,
          };
        };

      case FILTER_RATING:
          const ratingToFilter = [...state.videogames]
          return {
            ...state,
            videogames:
              payload === "DES"
                ? ratingToFilter.sort((a, z) => z.rating - a.rating)
                : ratingToFilter.sort((a, z) => a.rating - z.rating),
                currentPage: 1,
            
          };
      
      case PAGE:
        return {
          ...state,
        pageActual: payload,
        }

      default:
        return { ...state };
    };
  };
  export default rootReducer;
  