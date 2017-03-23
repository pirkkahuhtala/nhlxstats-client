import games from './reducers';
import ADD_GAME from './actions';

describe('games', () => {
  it('should return new state with one object', () => {
    expect(games([], {type: ADD_GAME, payload: {}})).toHaveLength(1);
  });
});
