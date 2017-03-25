import {List} from 'immutable';
import games from './reducers';
import ADD_GAME from './actions';

describe('games', () => {
  beforeEach(function () {
     jest.addMatchers(matchers);
   });

  it('should return new state with one object', () => {
    expect(games(List(), {type: ADD_GAME, payload: {}}).count()).toEqual(1);
  });
});
