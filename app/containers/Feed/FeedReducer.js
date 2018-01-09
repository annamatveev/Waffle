// import { fromJS } from 'immutable';
import { ADD_ITEM } from './FeedActionsTypes';

const feed = {
  items: ['H1xKl15G41', 'H1xKl15G42', 'H1xKl15G43', 'H1xKl15G44'],
}

// const initialState = fromJS({ feed });
const initialState = feed;

export default function FeedItemReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return { items: state.items.concat(action.guid) };
    default:
      return state;
  }
}
