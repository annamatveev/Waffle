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
    title: 'qui est esse',
    body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis ' +
    'voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
  },
  H1xKl15G43: {
    guid: 'H1xKl15G43',
    color: '#EAA732',
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit autt',
    body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium ' +
    'quis pariatur molestiae porro eius odio et labore et velit aut',
  },
  H1xKl15G44: {
    guid: 'H1xKl15G44',
    color: '#EAA732',
    title: 'eum et est occaecati',
    body: 'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic ' +
    'commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit',
  },
};

// const initialState = fromJS({ items });
const initialState = items;

export default function ItemsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ITEM_COLOR:
      const modifiedState = Object.assign({}, state);
      modifiedState[action.feedItemGuid].color = '#ffffff';
      return modifiedState;
    case ADD_ITEM:
      return {
        ...state, [action.guid]: { guid: action.guid, color: '#EAA732' },
      };
    default:
      return state;
  }
}
