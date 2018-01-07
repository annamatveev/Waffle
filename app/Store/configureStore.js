import { createStore } from 'redux';
import Reducer from '../containers/App/Reducer';

export default function configureStore(initialState) {
  return createStore(
    Reducer,
    initialState,
  );
}
