export const ADD_GAME = 'addGame';

export const addGame = (game) => {
  return {
    type: ADD_GAME,
    payload: game
  };
}
