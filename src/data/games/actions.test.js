import {addGame, ADD_GAME} from './actions';

describe('actions', () => {
  it('should return ADD_GAME action object', () => {
    expect(addGame({})).toEqual({type: ADD_GAME, payload: {}});
  });
});
