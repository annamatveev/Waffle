import { createStore, combineReducers } from 'redux';

import FirstWaffleReducer from '../containers/FirstWaffle/FirstWaffleReducer';
import SecondWaffleReducer from '../containers/SecondWaffle/SecondWaffleReducer';

export default function configureStore(initialState) {
  return createStore(
    combineReducers({ firstWaffle: FirstWaffleReducer, secondWaffle: SecondWaffleReducer }),
    initialState,
  );
}
