import List from 'immutable';
import {ADD_GAME} from './ActionTypes';

const games = (state = List(), action) => {
  switch (action.type) {
    case ADD_GAME:
      return state.push(game(state, action));
    default:
      return state;
  }
}

const game = (state = {}, action) => {
  switch (action.type) {
    case ADD_GAME:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export default games;
