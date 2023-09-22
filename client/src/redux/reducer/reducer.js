import {
    GET_VIDEOGAMES,
    GET_VIDEOGAME_NAME,
    GET_VIDEOGAMES_ID,
    GET_TYPES,
    POST_VIDEOGAMES,
    FILTER,
    ORDER,
    FILTER_BY_TYPES,
    PAGE,
  } from "../actions/actions_types";
  
  const initialState = {
    videogames: [],
    id: [],
    types: [],
    videogamesCopy: [],
    videogamesOrigin: [],
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
      case GET_TYPES:
        return {
          ...state,
          types: payload,
        };
      case POST_VIDEOGAMES:
        return {
          ...state,
        };
      case FILTER:
        if (payload === "Api") {
          const allVideogamesApi = state.videogamesCopy.filter(
            (videogame) => typeof videogame.ID === "number"
          );
          return { ...state, videogames: allVideogamesApi };
        }
        if (payload === "Base de Datos") {
          const allVideogamesBD = state.videogamesCopy.filter(
            (videogame) => typeof videogame.ID === "string"
          );
          return { ...state, videogame: allVideogamesBD };
        } else {
          return {
            ...state,
            videogames: state.videogamesCopy, 
          }};
      case FILTER_BY_TYPES:
          if (payload !== "All Videogames") {
            const filteredVideogames = state.videogamesOrigin.filter(
              (pokemon) => pokemon.Tipo?.includes(payload)
            );
            const filteredVideogamesDB = state.videogamesOrigin.filter(
              (videogame) => videogame.types?.some((type) => type.Nombre === payload)
            );
            const combinedVideogames = [...filteredVideogames, ...filteredVideogamesDB];
            const uniqueVideogames = Array.from(new Set(combinedVideogames.map((videogame) => videogame.ID)))
              .map((id) => combinedVideogames.find((videogame) => videogame.ID === id));
            return { ...state, videogames: uniqueVideogames };
          } else {
            return {
              ...state,
              videogames: state.videogamesOrigin,
            };
          };
      // case ORDER:
      //   if (payload === "AscendingAttack" || payload === "DescendingAttack") {
      //     const attack = [...state.videogames];
      //     const attackCopy = [...state.videogamesCopy];
      //     return {
      //       ...state,
      //       videogames:
      //         payload === "AscendingAttack"
      //           ? attack.sort((a, b) => a.Ataque - b.Ataque)
      //           : attack.sort((a, b) => b.Ataque - a.Ataque),
      //       pokemonsCopy:
      //         payload === "AscendingAttack"
      //           ? attackCopy.sort((a, b) => a.Ataque - b.Ataque)
      //           : attackCopy.sort((a, b) => b.Ataque - a.Ataque),
      //     };
      //   }
      //   if (payload === "AscendingAZ" || payload === "DescendingZA") {
      //     const alphabetic = [...state.pokemons];
      //     const alphabeticCopy = [...state.pokemonsCopy];
      //     return {
      //       ...state,
      //       pokemons:
      //         payload === "AscendingAZ"
      //           ? alphabetic.sort((a, b) => a.Nombre.localeCompare(b.Nombre))
      //           : alphabetic.sort((a, b) => b.Nombre.localeCompare(a.Nombre)),
      //       pokemonsCopy:
      //         payload === "AscendingAZ"
      //           ? alphabeticCopy.sort((a, b) => a.Nombre.localeCompare(b.Nombre))
      //           : alphabeticCopy.sort((a, b) => b.Nombre.localeCompare(a.Nombre)),
      //     };
      //   }
      //   if (payload === "Id") {
      //     return {
      //       ...state,
      //       pokemons: state.pokemonsOrigin,
      //       pokemonsCopy: state.pokemonsOrigin,
      //     };
      //   };
      default:
        return { ...state };
    };
  };
  export default rootReducer;
  