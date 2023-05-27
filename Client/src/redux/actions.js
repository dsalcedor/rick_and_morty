import { ADD_FAVORITE, DELETE_FAVORITE } from "./actionsTypes";
import axios from 'axios';

export const addFavorite = (character) => {
    // return {
    //     type: ADD_FAVORITE,
    //     payload: character
    // }

    const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return (dispatch) => {
      axios.post(endpoint, character).then(({ data }) => {
         return dispatch({
            type: ADD_FAVORITE,
            payload: data,
         });
      });
   };

};

export const deleteFavorite = (id) => {
    // return {
    //     type: DELETE_FAVORITE,
    //     payload: id
    // }

    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   return (dispatch) => {
      axios.delete(endpoint).then(({ data }) => {
         return dispatch({
            type: DELETE_FAVORITE,
            payload: data,
      });
      });
   };
};