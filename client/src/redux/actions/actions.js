import axios from "axios";
import {
  GET_VIDEOGAMES,
  GET_VIDEOGAME_NAME,
  GET_VIDEOGAMES_ID,
  GET_GENRES,
  POST_VIDEOGAMES,
  FILTER,
  ORDER,
  FILTER_BY_GENRES,
  FILTER_RATING,
} from "./actions_types";

export const getVideogames = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/videogames");
    dispatch({
      type: GET_VIDEOGAMES,
      payload: data,
    });
  };
};

export const getVideogameName = (name) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `http://localhost:3001/videogames?name=${name}`
    );
    dispatch({
      type: GET_VIDEOGAME_NAME,
      payload: data,
    });
  };
};

export const getVideogamesId = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`http://localhost:3001/videogames/id/${id}`);
    dispatch({
      type: GET_VIDEOGAMES_ID,
      payload: data,
    });
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    try{
    const { data } = await axios.get("http://localhost:3001/genres");
    console.log("data",data);
    dispatch({
      type: GET_GENRES,
      payload: data,
    });
  }catch (error) {
  console.log(error.message, 'error en géneros');
}}}

export const createVideogames = (videogame) => {
  return async (dispatch) => {
    const { data } = await axios.post(
      "http://localhost:3001/videogames",
      videogame
    );
    return {
      type: POST_VIDEOGAMES,
      payload: data,
    };
  };
};

export const filterVideogame = (filter) => {
  return {
    type: FILTER,
    payload: filter,
  };
};

export const filterByGenres = (filter) => {
  return {
    type: FILTER_BY_GENRES,
    payload: filter,
  };
};

export const orderVideogames = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export function filterByRating(payload) {
  return {
      type: FILTER_RATING,
      payload: payload
  }
}
