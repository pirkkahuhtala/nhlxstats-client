import ADD_GAME from './actions';

const games = (state = [], action) => {
  switch (action.type) {
    case ADD_GAME:
      return Object.assign([], state, [game(state, action)]);
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
