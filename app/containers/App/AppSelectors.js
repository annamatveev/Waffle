import { createSelector } from 'reselect';

const selectFeed = (state) => state.feed;

const makeSelectFeedItems = () => createSelector(
  selectFeed,
  (feedState) => feedState.get('items'),
);
export {
  selectFeed,
  makeSelectFeedItems,
};