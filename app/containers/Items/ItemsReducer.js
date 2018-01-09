// import { fromJS } from 'immutable';
import { UPDATE_ITEM_COLOR } from '../Feed/FeedItem/FeedItemActionsTypes';
import { ADD_ITEM } from '../Feed/FeedActionsTypes';

const items = [
  { id: 0, color: '#EAA732' },
  { id: 1, color: '#EAA732' },
  { id: 2, color: '#EAA732' },
  { id: 3, color: '#EAA732' },
  { id: 4, color: '#EAA732' },
  { id: 5, color: '#EAA732' },
  { id: 6, color: '#EAA732' },
  { id: 7, color: '#EAA732' },
];

// const initialState = fromJS({ items });
const initialState = items;

export default function ItemsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ITEM_COLOR:
      return state.map((item) => {
        if (item.id === action.feedItemId) { // Override color
          return { id: item.id, color: '#ffffff' };
        }
        return item;
      });
    case ADD_ITEM:
      return [...state, { id: state.length, color: '#EAA732' }];
    default:
      return state;
  }
}
