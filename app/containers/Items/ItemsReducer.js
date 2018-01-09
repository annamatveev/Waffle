// import { fromJS } from 'immutable';
import { UPDATE_ITEM_COLOR } from '../Feed/FeedItem/FeedItemActionsTypes';
import { ADD_ITEM } from '../Feed/FeedActionsTypes';

const items = {
  H1xKl15G41: {
    guid: 'H1xKl15G41',
    color: '#EAA732',
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam ' +
    'nostrum rerum est autem sunt rem eveniet architecto',
  },
  H1xKl15G42: {
    guid: 'H1xKl15G42',
    color: '#EAA732',
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam ' +
    'nostrum rerum est autem sunt rem eveniet architecto',
  },
  H1xKl15G43: {
    guid: 'H1xKl15G43',
    color: '#EAA732',
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam' +
    'nostrum rerum est autem sunt rem eveniet architecto',
  },
  H1xKl15G44: {
    guid: 'H1xKl15G44',
    color: '#EAA732',
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam ' +
    'nostrum rerum est autem sunt rem eveniet architecto',
  },
};

// const initialState = fromJS({ items });
const initialState = items;

export default function ItemsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ITEM_COLOR:
      return {
        ...state, [action.feedItemGuid]: { guid: action.feedItemGuid, color: '#ffffff' },
      };
    case ADD_ITEM:
      return {
        ...state, [action.guid]: { guid: action.guid, color: '#EAA732' },
      };
    default:
      return state;
  }
}
