import shortid from 'shortid';
import { ADD_ITEM } from './FeedActionsTypes';

export function AddItemActionCreator() {
  return {
    guid: shortid.generate(),
    type: ADD_ITEM,
  };

}
