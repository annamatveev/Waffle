import { UPDATE_ITEM_COLOR } from './FeedItemActionsTypes';

export function UpdateColorActionCreator(feedItemId) {
  console.log('EVENT: update color');
  return {
    feedItemId,
    type: UPDATE_ITEM_COLOR,
  };
}
