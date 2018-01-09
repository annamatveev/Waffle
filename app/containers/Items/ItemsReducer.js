// import { fromJS } from 'immutable';
import { UPDATE_ITEM_COLOR } from '../Feed/FeedItem/FeedItemActionsTypes';
import { ADD_ITEM } from '../Feed/FeedActionsTypes';

const items = [
  { guid: 'H1xKl15G4z', color: '#EAA732' },
  { guid: 'H1xKl15G4q', color: '#EAA732' },
  { guid: 'H1xKl15G4a', color: '#EAA732' },
  { guid: 'H1xKl15G4b', color: '#EAA732' },
  { guid: 'H1xKl15G44', color: '#EAA732' },
  { guid: 'H1xKl15G45', color: '#EAA732' },
  { guid: 'H1xKl15G46', color: '#EAA732' },
  { guid: 'H1xKl15G47', color: '#EAA732' },
];

// const initialState = fromJS({ items });
const initialState = items;

export default function ItemsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ITEM_COLOR:
      return state.map((item) => {
        if (item.guid === action.feedItemGuid) { // Override color
          return { guid: item.guid, color: '#ffffff' };
        }
        return item;
      });
    case ADD_ITEM:
      return [...state, { guid: action.guid, color: '#EAA732' }];
    default:
      return state;
  }
}
