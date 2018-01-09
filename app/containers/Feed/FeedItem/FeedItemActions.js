import { UPDATE_ITEM_COLOR } from './FeedItemActionsTypes';

export function UpdateColorActionCreator(feedItemGuid) {
  return {
    feedItemGuid,
    type: UPDATE_ITEM_COLOR,
  };
}
