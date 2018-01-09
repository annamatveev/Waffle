// import { fromJS } from 'immutable';
import shortid from 'shortid';
import { ADD_ITEM } from './FeedActionsTypes';

const feed = {
  items: ['H1xKl15G4z', 'H1xKl15G4q', 'H1xKl15G4a', 'H1xKl15G4b', 'H1xKl15G44', 'H1xKl15G45', 'H1xKl15G46', 'H1xKl15G47'],
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
