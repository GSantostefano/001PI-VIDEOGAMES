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
  } from "../actions/actions_types";
  
  const initialState = {
    videogames: [],
    id: [],
    genres: [],
    videogamesCopy: [],
    videogamesOrigin: [],
    plataforms:[],
    pageActual: 1,
  };
  
  const rootReducer = (state = initialState, { type, payload }) => {

    switch (type) {

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
        };

      case GET_VIDEOGAMES_ID:
        return {
          ...state,
          id: payload,
        };
      
      case GET_GENRES:
        console.log("payload",payload);
        return {
          ...state,
          genres: payload,
        };

      case POST_VIDEOGAMES:
        return {
          ...state,
        };
      
      case FILTER:
        console.log("state.videogamesCopy", state.videogamesCopy);
        console.log("Filtering by:", payload);
        console.log("Filtered objects:", state.videogamesCopy.filter((videogame) => videogame.id));
        if (payload === "Api") {
          const allVideogamesApi = state.videogamesCopy.filter(
            (videogame) => typeof videogame.id === "number"
          );
          console.log("allVideogamesApi:", allVideogamesApi);
          return { ...state, videogames: allVideogamesApi };
        }
        if (payload === "BD") {
          const allVideogamesBD = state.videogamesCopy.filter(
            (videogame) => typeof videogame.id === "string"
          );
          console.log("allVideogamesBD:", allVideogamesBD);
          return { ...state, videogames: allVideogamesBD };
        } else {
          return {
            ...state,
            videogames: state.videogamesCopy, 
          }};

      case FILTER_BY_GENRES:
          if (payload !== "All Videogames") {
            const filteredVideogames = state.videogamesOrigin.filter(
              (videogame) => videogame.Genre?.includes(payload)
            );
            const filteredVideogamesDB = state.videogamesOrigin.filter(
              (videogame) => videogame.genres?.some((genre) => genre.name === payload)
            );
            const combinedVideogames = [...filteredVideogames, ...filteredVideogamesDB];
            const uniqueVideogames = Array.from(new Set(combinedVideogames.map((videogame) => videogame.id)))
              .map((id) => combinedVideogames.find((videogame) => videogame.id === id));
            return { ...state, videogames: uniqueVideogames };
          } else {
            return {
              ...state,
              videogames: state.videogamesOrigin,
            };
          };

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
            videogamesCopy:
              payload === "AscendingAZ"
                ? alphabeticCopy.sort((a, b) => a.name.localeCompare(b.name))
                : alphabeticCopy.sort((a, b) => b.name.localeCompare(a.name)),
          };
        }
        if (payload === "Id") {
          return {
            ...state,
            videogames: state.videogamesOrigin,
            videogamesCopy: state.videogamesOrigin,
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
            page: 1
          };

   


      default:
        return { ...state };
    };
  };
  export default rootReducer;
  