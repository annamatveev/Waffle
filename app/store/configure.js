import { createStore, combineReducers } from 'redux';

import FeedReducer from '../containers/Feed/FeedReducer';
import ItemsReducer from '../containers/Items/ItemsReducer';

// Flattening the data because of https://github.com/reactjs/redux/issues/316#issuecomment-124485087

export default function configure() {
  return createStore(combineReducers({ feed: FeedReducer, items: ItemsReducer }));
}

