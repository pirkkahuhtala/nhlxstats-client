import {List} from 'immutable';
import games from './reducers';
import {ADD_GAME} from './actionTypes';

describe('games', () => {
  it('should return new state with one object', () => {
    expect(games(List(), {type: ADD_GAME, payload: {}}).count()).toEqual(1);
  });
});
