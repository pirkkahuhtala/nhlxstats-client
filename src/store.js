import { createStore, combineReducers } from 'redux';
import games from './data/games/reducers';

const nhlxstatsApp = combineReducers({
  games
});

const store = createStore(nhlxstatsApp);

export default store;
