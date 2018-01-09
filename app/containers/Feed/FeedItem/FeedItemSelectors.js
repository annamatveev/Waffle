import { createSelector } from 'reselect';

const selectItems = (state) => state.items;

const makeSelectFeedItem = (id) => createSelector(
  selectItems,
  (squaresState) => squaresState.get(id),
);

export {
  selectItems,
  makeSelectFeedItem
};