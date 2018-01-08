import { createSelector } from 'reselect';

const selectFirstSquares = ({ state }) => state.get('firstWaffle');

const makeSelectFirstWaffle = () => createSelector(
  selectFirstSquares,
  ({ squaresState }) => squaresState.get('squares'),
);

export {
  selectFirstSquares,
  makeSelectFirstWaffle,
};
