import {ADD_GAME} from './actionTypes';

export const addGame = (game) => {
  return {
    type: ADD_GAME,
    payload: game
  };
}
