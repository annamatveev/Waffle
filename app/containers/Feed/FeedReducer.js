// import { fromJS } from 'immutable';
import { ADD_ITEM } from './FeedActionsTypes';

const feed = {
  items: [0, 1, 2, 3, 4, 5, 6, 7],
}

// const initialState = fromJS({ feed });
const initialState = feed;

export default function FeedItemReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return { items: [...state.items, state.items.length ] };
    default:
      return state;
  }
}
