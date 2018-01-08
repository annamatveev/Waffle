import { createSelector } from 'reselect';

const selectSecondSquares = ({ state }) => state.get('secondWaffle');

const makeSelectSecondWaffle = () => createSelector(
  selectSecondSquares,
  ({ squaresState }) => squaresState.get('squares'),
);

export {
  selectSecondSquares,
  makeSelectSecondWaffle,
};
