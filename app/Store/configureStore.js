import { createStore } from 'redux';
import Reducer from '../containers/App/GridReducer';

export default function configureStore(initialState) {
  return createStore(
    Reducer,
    initialState,
  );
}
