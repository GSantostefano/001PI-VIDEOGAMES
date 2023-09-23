import axios from "axios";
import {
  GET_VIDEOGAMES,
  GET_VIDEOGAME_NAME,
  GET_VIDEOGAMES_ID,
  GET_TYPES,
  POST_VIDEOGAMES,
  FILTER,
  ORDER,
  FILTER_BY_TYPES,
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

export const getTypes = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/types");
    dispatch({
      type: GET_TYPES,
      payload: data,
    });
  };
};

export const createVideogames = (videogame) => {
  return async (dispatch) => {
    const { data } = await axios.post(
      "http://localhost:3001/videogames",
      pokemon
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

export const filterByTypes = (filter) => {
  return {
    type: FILTER_BY_TYPES,
    payload: filter,
  };
};

export const orderVideogames = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};