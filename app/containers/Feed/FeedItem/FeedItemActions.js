import { UPDATE_ITEM_COLOR } from './FeedItemActionsTypes';

export function UpdateColorActionCreator(feedItemGuid) {
  console.log('EVENT: update color');
  return {
    feedItemGuid,
    type: UPDATE_ITEM_COLOR,
  };
}
